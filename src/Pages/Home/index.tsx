import React from "react";
import SwiperContainer from "../../Components/AdSwiper";
import { Container, MainWrap } from "./styles";
import Notice from "../../Components/Notice";
import Category from "../../Components/Category";

const Home = () => {
    return (
        <Container>
            <SwiperContainer />
            <MainWrap>
                <Notice />
                <Category />
            </MainWrap>
        </Container>
    )
}

export default Home