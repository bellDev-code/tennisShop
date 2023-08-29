import { categoryList, serviceList } from "./mockup"
import { CategoryBox, CategoryFont, CategoryTitle, Container, ContentsBox, ContentsFont, ContentsWrap, ServiceBox } from "./styles"


interface Item {
    title: string;
    image: string;
}

const Category = () => {
    const renderContents = (list: Item[]) => {
        return list.map((item) => (
          <ContentsWrap key={item.title}>
            <img src={item.image} alt="icon" />
            <ContentsFont>{item.title}</ContentsFont>
          </ContentsWrap>
        ));
      };
    
    return (
        <Container>
      <CategoryTitle>+ 3,000여 개의 테니스 제품이 준비되어 있어요.</CategoryTitle>
      <CategoryBox>
        <CategoryFont>카테고리</CategoryFont>
        <ContentsBox>{renderContents(categoryList)}</ContentsBox>
      </CategoryBox>
      <ServiceBox>
        <CategoryFont>서비스</CategoryFont>
        <ContentsBox>{renderContents(serviceList)}</ContentsBox>
      </ServiceBox>
    </Container>
    )
}

export default Category