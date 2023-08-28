import { categoryList, serviceList } from "./mockup"
import { CategoryBox, CategoryFont, CategoryTitle, Container, ContentsBox, ContentsFont, ContentsWrap, ServiceBox } from "./styles"


const Category = () => {
    return (
        <Container>
            <CategoryTitle>+ 3,000여 개의 테니스 제품이 준비되어 있어요.</CategoryTitle>
            <CategoryBox>
            <CategoryFont>카테고리</CategoryFont>
                <ContentsBox>
                {categoryList.map((i) => {
                    return (
                            <ContentsWrap>
                                <img src={i.image} alt="icon" />
                                <ContentsFont>{i.title}</ContentsFont>
                            </ContentsWrap>
                        )
                    })}
                </ContentsBox>
            </CategoryBox>
            <ServiceBox>
            <CategoryFont>서비스</CategoryFont>
                <ContentsBox>
                {serviceList.map((i) => {
                    return (
                            <ContentsWrap>
                                <img src={i.image} alt="icon" />
                                <ContentsFont>{i.title}</ContentsFont>
                            </ContentsWrap>
                        )
                    })}
                </ContentsBox>
                </ServiceBox>
        </Container>
    )
}

export default Category