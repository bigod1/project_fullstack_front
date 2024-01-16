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
    setContacts: Dispatch<SetStateAction<Contact[]>>;
}

export const ModalContactAdd = ({ toggleModal, setContacts }: ModalProps) => {
    const { register, handleSubmit } = useForm<ContactData>({
        resolver: zodResolver(schema),
    });

    const createContact = async (data: ContactData) => {
        const response = await api.post("/contacts", { ...data });
        setContacts((previousData) => [...previousData, response.data]);
        toggleModal();
    };

    return (
        <Modal toggleModal={toggleModal}>
            <ButtonWhite onClick={toggleModal}>X</ButtonWhite>

            <form onSubmit={handleSubmit(createContact)}>
                <InputContainer>
                    <label htmlFor="name">Nome</label>
                    <StyledInput type="text" id="name" {...register("name")} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="email">E-mail</label>
                    <StyledInput type="email" id="email" {...register("email")} />
                </InputContainer>
                <InputContainer>
                    <label htmlFor="telephone">Telephone</label>
                    <StyledInput
                        type="text"
                        id="telephone"
                        {...register("telephone")}
                    />
                </InputContainer>

                <ButtonWhite>Cadastrar</ButtonWhite>
            </form>
        </Modal>
    );
};
