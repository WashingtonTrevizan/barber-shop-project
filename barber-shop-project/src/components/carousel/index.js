import React from 'react';
import { Button, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
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
      <Swiper spaceBetween={50} slidesPerView={3}>
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