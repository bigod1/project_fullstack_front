import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactData, schema } from "./validator";
import { api } from "../../../services/api";
import { Modal } from "../MainModal";
import { Contact } from "../../../pages/dashboard";
import { ButtonWhite } from "../../../styles/buttons";
import { InputContainer, StyledInput } from "../../../styles/input";

interface ModalProps {
    toggleModal: () => void;
    contacts: Contact[];
    setContacts: Dispatch<SetStateAction<Contact[]>>;
    cardContact: Contact;
}

export const ModalContactEdit = ({
    toggleModal,
    contacts,
    setContacts,
    cardContact,
}: ModalProps) => {
    const { register, handleSubmit, formState: {errors} } = useForm<ContactData>({
        resolver: zodResolver(schema),
    });

    const editContact = async (data: ContactData) => {
        if (data.name == ""){
            data.name = cardContact.name
        }
        if (data.email == ""){
            data.email = cardContact.email
        }
        if (data.telephone == ""){
            data.telephone = cardContact.telephone
        }

        const response = await api.patch(`/contacts/${cardContact.id}`, {...data});
        const newList = contacts.filter((contact) => contact.id !== cardContact.id);
        const editedList = [...newList, response.data];

        setContacts(editedList);
        toggleModal();
    };

    return (
        <Modal toggleModal={toggleModal}>
            <ButtonWhite onClick={toggleModal}>X</ButtonWhite>

            <h3>Editar contato</h3>

            <form onSubmit={handleSubmit(editContact)}>
                <InputContainer>
                    <label htmlFor="name">Nome</label>
                    <StyledInput
                        type="text"
                        id="name"
                        {...register("name")}
                        />
                        {errors.name ? <p>{errors.name.message}</p> : null}
                </InputContainer>

                <InputContainer>
                    <label htmlFor="email">E-mail</label>
                    <StyledInput
                        type="email"
                        id="email"
                        {...register("email")}
                        />
                        {errors.email ? <p>{errors.email.message}</p> : null}
                </InputContainer>

                <InputContainer>
                    <label htmlFor="telephone">Telephone</label>
                    <StyledInput
                        type="text"
                        id="telephone"
                        {...register("telephone")}
                        />
                        {errors.telephone ? <p>{errors.telephone.message}</p> : null}
                </InputContainer>


                <ButtonWhite>Editar</ButtonWhite>
            </form>
        </Modal>
    );
};
