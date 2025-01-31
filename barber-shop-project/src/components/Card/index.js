import React from 'react';
import styled from 'styled-components';
import { Container as MuiContainer } from '@mui/material';
import barberphoto1 from '../../image/profissional1.jpeg';
import barberphoto2 from '../../image/profissional2.jpeg';
import barberphoto3 from '../../image/profissional3.jpeg';

const CardDescription = styled.p`
  margin: 16px;
  text-align: center;
  font-family: 'Font Diner', sans-serif;
`;

const CardImage = styled.img`
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  height: 300px;
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
  width: 450px;
  flex: 1;
  border-bottom: 1px solid #b8860b;
    transition: box-shadow 0.3s ease; /* Adiciona transição suave */

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta a sombra no hover */
  }

  &:hover ${CardImage} {
    transform: scale(1.05); /* Aumenta a escala da imagem no hover */
  }

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
        <CardInfo description="Miguel Rasmuth" image={barberphoto1} />
        <CardInfo description="José Roberto" image={barberphoto2} />
        <CardInfo description="João Paulo" image={barberphoto3} />
      </StyledContainer>
    </div>
  );
}

export default Card;