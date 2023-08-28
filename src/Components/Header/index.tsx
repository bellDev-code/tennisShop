import React from 'react'
import { Container, MenuList, MenuLink, LogoWrap, SearchBox, ReserveBtn, SearchForm, IconWrap } from './styles'
import Logo from "../../assets/Logo/logo.png"
import { headerList } from './mockup'
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <Container>
            <MenuList>
                <LogoWrap>
                    <img src={Logo} alt='logo' />
                </LogoWrap>
                {headerList.map((i) => {
                    return <MenuLink to={i.url}>{i.title}</MenuLink>
                })}
            </MenuList>
            <SearchBox>
                <ReserveBtn>지금 스트링 맡겨도 돼요?</ReserveBtn>
                <SearchForm>
                    <IconWrap>
                        <BsSearch />
                    </IconWrap>
                    <input type='text' />
                </SearchForm>
            </SearchBox>
        </Container>
    )
}

export default Header