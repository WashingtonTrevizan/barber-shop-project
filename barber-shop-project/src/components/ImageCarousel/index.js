import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import caroulseimage2 from '../../image/caroulseimage4.png';
import caroulseimage3 from '../../image/caroulseimage3.png';
import caroulseimage4 from '../../image/carouselimage2.png';
import { Container } from "@mui/material";
import cut from '../../image/mainnewimage.png';

const Arrow = styled.div`
  &::before {
    color: white;
    font-size: 20px;
  }
`;

const CarouselContainer = styled.div`
  max-width: 50%;
  margin-left: 0;
  padding: 16px;
  max-height:auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TextContainer = styled.div`
  max-width: 50%;
  padding: 16px;
  color: #fff;
  font-size: 18px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const StyledSlider = styled(Slider)`
  .slick-slide div {
    display: flex;
    justify-content: center;
    max-height:400px;
  }
`;

const StyledImage = styled.img`
  width: 600px;
  border-radius: 8px;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-wrap: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledHeading = styled.h2`
  color: darkgoldenrod;
  text-align: center;
`;

const StyledParagraph = styled.p`
  color: darkgray;
  text-align: center;
`;

const StyledTextImage = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

const images = [
  caroulseimage2,
  caroulseimage3,
  caroulseimage4
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ContainerWrapper>
      <CarouselContainer>
        <StyledSlider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <StyledImage src={src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </StyledSlider>
      </CarouselContainer>
      <TextContainer>
          <StyledHeading>Bem-vindo à nossa Barbearia</StyledHeading>
          <StyledParagraph>Oferecemos os melhores serviços de corte de cabelo e barba. Venha nos visitar e tenha uma experiência incrível!</StyledParagraph>
          <StyledTextImage src={cut} alt="Descrição da Imagem" />
      </TextContainer>  
    </ContainerWrapper>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

function ImageCarousel() {
  return (
    <Container>
      <Carousel />
    </Container>
  );
}


export default ImageCarousel;