import { useNavigate } from "react-router-dom"
import { StyledHeader } from "./styles"
import { ButtonTransparent } from "../../styles/buttons"


export const Header = () => {

    const navigate = useNavigate()
    const token = localStorage.getItem("@kenzie-login:token")
    const href = window.location.href.slice(-13)

    return (
        <StyledHeader>
            {
                href == "/profile-edit" ? (
                    <>
                        <ButtonTransparent onClick={() => navigate("/dashboard")}>Voltar</ButtonTransparent>
                        <ButtonTransparent onClick={() => navigate("/")}>Sair</ButtonTransparent>
                    </>
                ) : token ? (
                    <>
                        <ButtonTransparent onClick={() => navigate("/profile-edit")}>Perfil</ButtonTransparent>
                        <ButtonTransparent onClick={() => navigate("/")}>Sair</ButtonTransparent>
                    </>
                ) : (
                    <>
                        <ButtonTransparent onClick={() => navigate("/")}>Login</ButtonTransparent>
                        <ButtonTransparent onClick={() => navigate("/register")}>Cadastre-se</ButtonTransparent>
                    </>
                )
            }
        </StyledHeader>
    )
}