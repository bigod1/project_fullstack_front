import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, schema } from "./validator"
import { useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { Container } from "./styles"
import { Header } from "../../components/Header"
import { useNavigate } from "react-router-dom"
import { FormStyled } from "../../styles/FormStyle"
import { ButtonTransparent } from "../../styles/buttons"
import { InputContainer, StyledInput } from "../../styles/input"
import { StyledHeader_3 } from "../../styles/typography"

export const Login = () => {

    localStorage.removeItem("@kenzie-login:token")

    const navigate = useNavigate()
    const {signIn} = useAuth()
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    })
    const submit = (data: LoginData) =>{
        signIn(data)
    }

    return (
        <>
            <Header />
            
            <Container>
                <StyledHeader_3>Login</StyledHeader_3>
                <FormStyled onSubmit={handleSubmit(submit)}>
                    <InputContainer>
                        <label htmlFor="input__email">E-mail</label>
                        <StyledInput type="email" id="email" {...register("email")} />
                    </InputContainer>
                    <InputContainer>
                        <label htmlFor="input__senha">Senha</label>
                        <StyledInput type="password" id="password" {...register("password")} />
                    </InputContainer>

                    <ButtonTransparent type="submit" className="btn__form">Entrar</ButtonTransparent>
                    <span>ou</span>
                    <ButtonTransparent onClick={() => navigate("/register")}>Cadastrar-se</ButtonTransparent>
                </FormStyled>
            </Container>
        </>
    )
}