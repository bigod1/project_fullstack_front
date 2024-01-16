import { api } from "../../../services/api";
import { Modal } from "../MainModal";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Profile } from "../../../pages/profile-edit";
import { ButtonWhite } from "../../../styles/buttons";



interface ModalProps {
    toggleModal: () => void;
    profile: Profile
}

export const ModalClientDelete = ({ toggleModal, profile }: ModalProps) => {

    const navigate = useNavigate()

    const deleteClient = async (id: string) => {
        try {
            await api.delete(`/clients/${id}`);
        } catch (error) {
            console.log(error)
        }
        toggleModal();
        navigate("/")
    };

    return (
        <Modal toggleModal={toggleModal}>
            <Container>
                <ButtonWhite onClick={toggleModal}>CANCELAR</ButtonWhite>
                <ButtonWhite onClick={() => deleteClient(profile.id)}>APAGAR</ButtonWhite>
            </Container>
        </Modal>
    );
};
