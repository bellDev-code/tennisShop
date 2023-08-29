import { BrandBox, BrandFont, BrandWrap, Container, PopularBox, PopularTitle } from "./styles"
import { brandList } from "./mockup"

interface Brand {
    title: string;
    image: string;
}

const Popular = () => {
    return (
        <Container>
      <PopularTitle>✨ 현재 가장 인기있는 브랜드를 만나 보세요.</PopularTitle>
      <PopularBox>
        {brandList.map((brand: Brand) => (
          <BrandWrap key={brand.title}>
            <BrandBox>
              <img src={brand.image} alt="brand" />
            </BrandBox>
            <BrandFont>{brand.title}</BrandFont>
          </BrandWrap>
        ))}
      </PopularBox>
    </Container>
    )
}

export default Popular