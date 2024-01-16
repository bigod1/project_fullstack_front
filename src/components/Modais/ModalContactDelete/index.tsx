import { Dispatch, SetStateAction } from "react";
import { api } from "../../../services/api";
import { Modal } from "../MainModal";
import { Container } from "./styles";
import { Contact } from "../../../pages/dashboard";
import { ButtonWhite } from "../../../styles/buttons";


interface ModalProps {
    toggleModal: () => void;
    contacts: Contact[]
    setContacts: Dispatch<SetStateAction<Contact[]>>;
    cardContact: Contact;
}

export const ModalContactDelete = ({ toggleModal, contacts, setContacts, cardContact }: ModalProps) => {

    const deleteContact = async (id: string) => {
        try {
            await api.delete(`/contacts/${id}`);
            const newList = contacts.filter((contact) => contact.id !== id)
            setContacts(newList)
        } catch (error) {
            console.log(error)
        }
        toggleModal();
    };

    return (
        <Modal toggleModal={toggleModal}>
            <Container>
                <ButtonWhite onClick={toggleModal}>CANCELAR</ButtonWhite>
                <ButtonWhite onClick={() => deleteContact(cardContact.id)}>APAGAR</ButtonWhite>
            </Container>
        </Modal>
    );
};
