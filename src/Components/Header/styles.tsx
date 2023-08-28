import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 10px;
`

export const MenuList = styled.div`
    display: flex;
`

export const LogoWrap = styled.div`
    display: flex;
    padding: 20px 0;

    > img {
        width: 200px;
    }
`

export const MenuLink = styled(Link)`
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

export const SearchBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ReserveBtn = styled.button`
    background-color: #00cc41;
    color: #fff;
    font-size: 15px;
    letter-spacing: -1px;
    border: 1px solid var(--tmgr700);
    padding: 8px 25px;
    border-radius: 10px;
    cursor: pointer;
` 

export const SearchForm = styled.form`
    margin: 0 20px;

    > input {
        max-width: 220px;
        padding: 1.2rem 1.2rem 1.2rem 40px;
        border: 1px solid #eee;
        font-size: 15px;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        letter-spacing: -1px;
        border-radius: 5px;
        background-color: #fff;
        position: relative;
    }
`

export const IconWrap = styled.span`
    position: relative;
    left: 35px;
    z-index: 1;
`