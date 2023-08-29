import { styled } from "styled-components";

export const Container = styled.section`
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
    box-sizing: border-box;
`

export const CategoryTitle = styled.p`
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const CategoryBox = styled.div`
    width: 100%;
    max-width: 1500px;
    position: relative;
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const ServiceBox = styled.div`
    width: 20%;
    max-width: 1500px;
    position: relative;
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`

export const CategoryFont = styled.div`
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const ContentsBox = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
`

export const ContentsWrap = styled.div`

    > img {
        width: 100px;
    } 
`

export const ContentsFont = styled.p`
    font-size: 14px;
    line-height: 16px;
`