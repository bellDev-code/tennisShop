import React from 'react'
import { Container, MenuList, MenuLink, LogoWrap, SearchBox, ReserveBtn, SearchForm, IconWrap, ProfileWrap } from './styles'
import Logo from "../../assets/Logo/logo.png"
import { headerList } from './mockup'
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { FaMale } from "react-icons/fa"

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
                <ReserveBtn><AiOutlineQuestionCircle />지금 스트링 맡겨도 돼요?</ReserveBtn>
                <SearchForm>
                    <IconWrap>
                        <BsSearch />
                    </IconWrap>
                    <input type='text' />
                </SearchForm>
                <ProfileWrap>
                    <BsFillCartFill />
                    <FaMale />
                </ProfileWrap>
            </SearchBox>
        </Container>
    )
}

export default Header