import React from 'react';
import { Typography} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import testeImage from '../../image/teste.jpg';
import styled from 'styled-components';

const CarouselImage = styled.img`
    max-width: 100%
`


const Carousel = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Mensagem de apresentação
      </Typography>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
      >
        <SwiperSlide>
          <CarouselImage src={testeImage} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={testeImage} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={testeImage} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselImage src={testeImage} alt="Slide 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;