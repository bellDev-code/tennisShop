import React from 'react'
import { Container, MenuList, MenuLink, LogoWrap, SearchBox, ReserveBtn, SearchForm, IconWrap, ProfileWrap } from './styles'
import Logo from "../../assets/Logo/logo.png"
import { headerList } from './mockup'
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai"
import { FaMale } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    const goToLogin = () => navigate('/login')
    const goToHome = () => navigate('/')

    return (
        <Container>
            <MenuList>
                <LogoWrap onClick={goToHome}>
                    <img src={Logo} alt='logo' />
                </LogoWrap>
                {headerList.map((i) => {
                    return <MenuLink key={i.title} to={i.url}>{i.title}</MenuLink>
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
                    <FaMale onClick={goToLogin} />
                </ProfileWrap>
            </SearchBox>
        </Container>
    )
}

export default Header