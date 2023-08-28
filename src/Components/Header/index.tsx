import React from 'react'
import { Container, MenuList, MenuLink, LogoWrap } from './styles'
import Logo from "../../assets/Logo/logo.png"

const Header = () => {
    const headerList = [
        { 
            title: '브랜드', 
            url: '/brand'
         },
        {
            title: '쇼핑하기',
            url: '/'
        },
        {   title: '커뮤니티',
            url: '/'
        },
        {
            title: '런칭캘린더',
            url: '/'
        },
        {
            title: '고객센터',
            url: '/'
        }
    ]
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
        </Container>
    )
}

export default Header