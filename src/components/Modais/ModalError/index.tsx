import { useNavigate } from "react-router-dom";
import { Modal } from "../MainModal";
import { ButtonTransparent } from "../../../styles/buttons";

interface ModalErrorProps {
    toggleModal: () => void;
}

export const ModalError = ({ toggleModal }: ModalErrorProps) => {
    const navigate = useNavigate();

    const handleCloseAndRedirect = () => {
        toggleModal();
        navigate("/");
    };

    return (
        <Modal toggleModal={toggleModal} blockClosing>
            <p>Você não está autenticado !!!</p>
            <ButtonTransparent onClick={handleCloseAndRedirect}>Ir para o login</ButtonTransparent>
        </Modal>
    );
};
