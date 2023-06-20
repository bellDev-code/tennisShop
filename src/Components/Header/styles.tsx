import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.div`
    display: flex;
    margin: 10px 10px;
`

export const MenuList = styled.div`
    display: flex;
`

export const MenuLink = styled(Link)`
    padding: 0 10px;
    border: 0;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    color: #000000;
    display: flex;
    align-items: center;

    :visited {
        color: #000000;
    }
`;