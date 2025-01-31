import React from 'react';
import styled from 'styled-components';
import { Container as MuiContainer } from '@mui/material';
import barberphoto1 from '../../image/barber-1.jpg';
import barberphoto2 from '../../image/barber-2.jpg';
import barberphoto3 from '../../image/barber-3.jpg';

const CardDescription = styled.p`
  margin: 16px;
  text-align: center;
`;

const CardImage = styled.img`
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  height: 200px;
  width: 100%;
  object-fit: cover;
  display: block;
`;

const StyledContainerProps = styled(MuiContainer)`
  display: block;
  align-items: center;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  width: 300px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledContainer = styled(MuiContainer)`
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 100%;
  flex-wrap: wrap; /* Adiciona quebra de linha para responsividade */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function CardInfo({ description, image }) {
  return (
    <StyledContainerProps>
      <CardImage src={image} alt="Card image" />
      <CardDescription>{description}</CardDescription>
    </StyledContainerProps>
  );
}

function Card() {
  return (
    <div>
      <StyledContainer>
        <CardInfo description="Descrição 1" image={barberphoto1} />
        <CardInfo description="Descrição 2" image={barberphoto2} />
        <CardInfo description="Descrição 3" image={barberphoto3} />
      </StyledContainer>
    </div>
  );
}

export default Card;