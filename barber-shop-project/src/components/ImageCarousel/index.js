import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testeImage from '../../image/teste.jpg';
import { Container } from "@mui/material";

const Arrow = styled.div`
  &::before {
    color: black;
    font-size: 20px;
  }
`;

const CarouselContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 16px;
  max-height:auto;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    display: flex;
    justify-content: center;
    max-height:80vh;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const images = [
  testeImage,
  testeImage,
  testeImage,
  testeImage
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <StyledImage src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </StyledSlider>
    </CarouselContainer>
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