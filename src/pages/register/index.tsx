import { useNavigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { FormStyledRegister } from "../../styles/FormStyle"
import { Container } from "./style"
import { InputContainer, StyledInput } from "../../styles/input"
import { ButtonTransparent } from "../../styles/buttons"
import { StyledHeader_3 } from "../../styles/typography"

export const Register = () => {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            
            <Container>
                <StyledHeader_3>Cadastro de usuario</StyledHeader_3>
                <FormStyledRegister>
                    <InputContainer>
                        <label htmlFor="input__name">Nome</label>
                        <StyledInput type="text" id="input__name" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="input__email">E-mail</label>
                        <StyledInput type="email" id="input__email" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="input__senha">Senha</label>
                        <StyledInput type="password" id="input__senha" />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="input__telephone">Telefone</label>
                        <StyledInput type="text" id="input__telephone" />
                    </InputContainer>
                    
                    <ButtonTransparent className="btn__form">Cadastrar</ButtonTransparent>
                    <span>ou</span>
                    <ButtonTransparent onClick={() => navigate("/")}>Fazer Login</ButtonTransparent>
                </FormStyledRegister>
            </Container>
        </>
    )
}