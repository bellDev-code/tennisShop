import { useNavigate } from "react-router-dom"
import { Container, InPutPassword, InputId, LoginBox, LoginForm, LoginTitle, LoginWrap, RegisterFont, RegisterLink, SubmitBtn } from "./styles"


const Login = () => {
    const navigate = useNavigate()

    const goToRegister = () => navigate('/register')

    return (
        <Container>
            <LoginWrap>
                <LoginTitle>테니스메트로 로그인</LoginTitle>
                <LoginBox>
                    <LoginForm>
                        <InputId type="text" placeholder="아이디" />
                        <InPutPassword type="password" placeholder="비밀번호" />
                        <SubmitBtn type="submit">로그인</SubmitBtn>
                    </LoginForm>
                    <RegisterFont>아직 회원이 아니신가요?</RegisterFont>
                </LoginBox>
            </LoginWrap>
        </Container>
    )
}

export default Login