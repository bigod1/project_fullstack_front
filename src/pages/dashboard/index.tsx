import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { Container, DashHeader, ListContainer, StyledUl } from "./style";
import { ModalContactAdd } from "../../components/Modais/ModalContactAdd";
import { ModalContactDelete } from "../../components/Modais/ModalContactDelete";
import { ModalContactEdit } from "../../components/Modais/ModalContactEdit";
import { ButtonTransparent } from "../../styles/buttons";
import { StyledHeader_3 } from "../../styles/typography";

export interface Contact {
    id: string;
    name: string;
    email: string;
    telephone: string;
    dateJoin: string;
}

export interface Profile {
    id: string;
    name: string;
    email: string;
    password: string;
    telephone: string;
    dateJoin: string;
}

export const Dashboard = () => {

    const [contacts, setContacts] = useState<Contact[]>([]);

    const [modalCreateContact, setModalCreateContact] = useState(false);
    const [modalEditContact, setModalEditContact] = useState(false);
    const [modalDeleteContact, setModalDeleteContact] = useState(false);


    const clientId = localStorage.getItem("@kenzie-login:clientId")
    const [profile, setProfile] = useState<Profile>(Object)

    useEffect(() => {
        (async () => {
            const response = await api.get(`/clients/${clientId}`);
            setProfile(response.data);
        })();
        (async () => {
            const response = await api.get("/contacts");

            setContacts(response.data);
        })();
    }, [clientId])
    

    const toggleModalCreateContact = () => setModalCreateContact(!modalCreateContact);
    const toggleModalEditContact = () => setModalEditContact(!modalEditContact);
    const toggleModalDeleteContact = () => setModalDeleteContact(!modalDeleteContact);
    
    const [cardContact, setCardContact] = useState<Contact>(Object)
    
    return (
        <>
            <Header/>

            <Container>
                <DashHeader>
                    <StyledHeader_3 className="dash_header__title">{profile.name}</StyledHeader_3>
                    <ButtonTransparent onClick={toggleModalCreateContact}>
                        Novo Contato
                    </ButtonTransparent>
                </DashHeader>
                <ListContainer>
                    <StyledUl>
                        {contacts.map((contact) => (
                            <Card
                            key={contact.id}
                            contact={contact}
                            toggleEdit={toggleModalEditContact}
                            toggleDelete={toggleModalDeleteContact}
                            setCardContact={setCardContact}
                            />
                            ))}
                    </StyledUl>
                </ListContainer>
            </Container>

            {modalCreateContact && (
                <ModalContactAdd
                    toggleModal={toggleModalCreateContact}
                    setContacts={setContacts}
                />
            )}

            {modalEditContact && (
                <ModalContactEdit
                    toggleModal={toggleModalEditContact}
                    contacts={contacts}
                    setContacts={setContacts}
                    cardContact={cardContact}
                />
            )}

            {modalDeleteContact && (
                <ModalContactDelete
                    toggleModal={toggleModalDeleteContact}
                    contacts={contacts}
                    setContacts={setContacts}
                    cardContact={cardContact}
                />
            )}
        </>
    );
};
