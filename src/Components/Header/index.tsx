import React from 'react'
import { Container, Menu, MenuList } from './styles'

const Header = () => {
    const headerList = [
        { 
            title: '브랜드', 
            url: '/'
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
                {headerList.map((i) => {
                    return <Menu>{i.title}</Menu>
                })}
            </MenuList>
        </Container>
    )
}

export default Header