import { Dispatch, SetStateAction } from "react"
import { Contact } from "../../pages/dashboard"
import { CardContainer, DivButtons } from "./styles"
import { ButtonTransparent } from "../../styles/buttons"


interface CardProps {
    contact: Contact
    toggleEdit: () => void
    toggleDelete: () => void
    setCardContact: Dispatch<SetStateAction<Contact>>;
}

export const Card = ({contact, toggleDelete, toggleEdit, setCardContact}: CardProps) => {

    return (
        <CardContainer>
            <div>
                <h3 className="card__name">Nome:</h3>
                <p>{contact.name}</p>
            </div>
            <div>
                <h3 className="card__email">Email:</h3>
                <p>{contact.email}</p>
            </div>
            <div>
                <h3 className="card__telephone">Telephone:</h3>
                <p>{contact.telephone}</p>
            </div>

            <DivButtons>
                <ButtonTransparent onClick={() => {
                    toggleEdit()
                    setCardContact(contact)
                }}>Editar</ButtonTransparent>
                
                <ButtonTransparent onClick={() => {
                    toggleDelete()
                    setCardContact(contact)
                }}>Excluir</ButtonTransparent>
            </DivButtons>
        </CardContainer>
    )
}