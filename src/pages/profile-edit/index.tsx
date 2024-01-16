import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactData, schema } from "./validator";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import { ModalClientDelete } from "../../components/Modais/ModalClientDelete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyledRegister } from "../../styles/FormStyle";
import { ButtonDiv, Container } from "./styles";
import { ButtonTransparent } from "../../styles/buttons";
import { InputContainer, StyledInput } from "../../styles/input";
import { StyledHeader_3 } from "../../styles/typography";


export interface Profile {
    id: string;
    name: string;
    email: string;
    password: string;
    telephone: string;
    dateJoin: string;
}

export const ProfileEdit = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<ContactData>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate()

    console.log(errors)
    const updateClient = async (data: ContactData) => {
        if (data.name == ""){
            data.name = profile.name
        }
        if (data.email == ""){
            data.email = profile.email
        }
        if (data.password == ""){
            data.password = profile.password
        }
        if (data.telephone == ""){
            data.telephone = profile.telephone
        }


        const response = await api.patch(`/clients/${profile.id}`, { ...data });
        console.log(response.data)

        navigate("/dashboard")
    };

    const clientId = localStorage.getItem("@kenzie-login:clientId")
    const [profile, setProfile] = useState<Profile>(Object)

    useEffect(() => {
        (async () => {
            const response = await api.get(`/clients/${clientId}`);
            setProfile(response.data);
        })();
    }, [clientId])

    const [modalClientDelete, setModalClientDelete] = useState(false);
    const toggleModalDelete = () => setModalClientDelete(!modalClientDelete);

    return (
        <>
            <Header />

            <Container>
                <StyledHeader_3>Atualizar Perfil</StyledHeader_3>
                <FormStyledRegister onSubmit={handleSubmit(updateClient)}>
                    <InputContainer>
                        <label htmlFor="name">Nome</label>
                        <StyledInput
                            type="text"
                            id="name"
                            defaultValue={profile.name}
                            {...register("name")}
                            />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="email">E-mail</label>
                        <StyledInput
                            type="email"
                            id="email"
                            defaultValue={profile.email}
                            {...register("email")}
                            />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="password">Senha</label>
                        <StyledInput
                            type="password"
                            id="password"
                            {...register("password")}
                            />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="telephone">Telephone</label>
                        <StyledInput
                            type="text"
                            id="telephone"
                            defaultValue={profile.telephone}
                            {...register("telephone")}
                            />
                    </InputContainer>

                    <ButtonDiv>
                        <ButtonTransparent type="submit">Atualizar</ButtonTransparent>
                        <ButtonTransparent onClick={toggleModalDelete}>Apagar Conta</ButtonTransparent>
                    </ButtonDiv>

                </FormStyledRegister>
            </Container>

            {modalClientDelete && (
                <ModalClientDelete
                toggleModal={toggleModalDelete}
                profile={profile}
                />
            )}
        </>
    );
};
