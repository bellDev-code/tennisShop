import React from "react";
import { Container, MainWrap } from "./styles";
import Notice from "../../Components/Notice";
import Category from "../../Components/Category";
import SwiperContainer from "../../Components/AdSwiper";
import Popular from "../../Components/Popular";

const Home = () => {
    return (
        <Container>
            <SwiperContainer />
            <MainWrap>
                <Notice />
                <Category />
                <Popular />
            </MainWrap>
        </Container>
    )
}

export default Home