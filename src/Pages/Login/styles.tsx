import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.section`
    display: flex;
    justify-content: center;
`

export const LoginWrap = styled.div`
    padding-top: 80px;
`

export const LoginTitle = styled.p`
    font-size: 26px;
    font-weight: bold;
    letter-spacing: -1px;
    color: #191f28;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
`

export const LoginBox = styled.div`
    width: 500px;
    padding: 0;
    margin: 0 auto;
    border: 0;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputId = styled.input`
    border: 1px solid #eee;
    font-size: 15px;
    font-weight: 400;
    color: #191f28;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
`

export const InPutPassword = styled.input`
    border: 1px solid #eee;
    font-size: 15px;
    font-weight: 400;
    color: #191f28;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
`

export const SubmitBtn = styled.button`
    width: 100%;
    margin: 0;
    background-color: #00CC41;
    color: #fff;
    padding: 15px 20px;
    min-height: 31px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 400;
    transition: 0.2s ease;
    letter-spacing: -1px;
`

export const RegisterFont = styled.p`
    width: 100%;
    margin: 10px auto;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: #8b95a1;
`
export const RegisterLink = styled(Link)`
    padding: 0 10px;
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: -1px;
    cursor: pointer;
    text-decoration: none;
    color: #8b95a1;
    display: flex;
    align-items: center;
    margin: 0 20px;
    background-color: #fff;
    :visited {
        color: #000000;
    }
`;