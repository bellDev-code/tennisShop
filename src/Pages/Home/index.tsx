import React from "react";
import SwiperContainer from "../../Components/AdSwiper";
import { Container } from "./styles";
import Notice from "../../Components/Notice";

const Home = () => {
    return (
        <Container>
            <SwiperContainer />
            <Notice />
        </Container>
    )
}

export default Home