import React from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServiceColumn = styled.div`
  flex: 1;
  margin: 0 10px;
  text-align: center; /* Center the text in the columns */
`;

const ServiceTitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif; /* Use Roboto Condensed font */
  font-size: 24px; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
  text-transform: uppercase; /* Make the text uppercase */
  text-align: left; /* Align text to the left */
`;

const ServiceDescription = styled.p`
  font-family: 'Roboto Condensed', sans-serif; /* Use Roboto Condensed font */
  font-size: 16px; /* Set the font size */
  color: lightgray; /* Set the text color to light gray */
  margin-top: 0; /* Remove top margin */
`;

const ServicePrice = styled.p`
  font-family: 'Roboto Condensed', sans-serif; /* Use Roboto Condensed font */
  font-size: 20px; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
  text-align: right; /* Align text to the right */
  margin-top: 0; /* Remove top margin */
`;

const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif; /* Use Roboto Condensed font */
  text-align: center;
  font-size: 24px; /* Increase the font size */
`;

const services = [
  { title: 'Corte de cabelo', price: 'R$ 60,00', description: 'Corte de todos os estilos' },
  { title: 'Barba com toalha quente', price: 'R$ 50,00', description: 'Procedimento com massageador' },
  { title: 'Corte de cabelo e Barba', price: 'R$ 100,00', description: 'Combo promocional' },
  { title: 'Pezinho', price: 'R$ 30,00', description: 'Acabamento' },
  { title: 'Barboterapia', price: 'R$ 85,00', description: 'Limpeza de pele, esfoliação e massageador' },
  { title: 'Selagem de cabelo curto', price: 'R$ 85,00', description: 'Recuperação do cabelo' },
  { title: 'Reconstrução de cabelo curto', price: 'R$ 55,00', description: 'Hidratação' },
  { title: 'Tintura para cabelo curto', price: 'R$ 85,00', description: 'Tintura com produtos selecionados' },
  { title: 'Tintura para barba', price: 'R$ 45,00', description: 'Tintura com produtos selecionados' },
];

function ServicePriceComponent() {
  const half = Math.ceil(services.length / 2);
  const firstColumnServices = services.slice(0, half);
  const secondColumnServices = services.slice(half);

  return (
    <Container>
      <Title>NOSSOS SERVIÇOS</Title>
      <ServicesContainer>
        <ServiceColumn>
          {firstColumnServices.map((service, index) => (
            <div key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServicePrice>{service.price}</ServicePrice>
              <ServiceDescription>{service.description}</ServiceDescription>
            </div>
          ))}
        </ServiceColumn>
        <ServiceColumn>
          {secondColumnServices.map((service, index) => (
            <div key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServicePrice>{service.price}</ServicePrice>
              <ServiceDescription>{service.description}</ServiceDescription>
            </div>
          ))}
        </ServiceColumn>
      </ServicesContainer>
    </Container>
  );
}

export default ServicePriceComponent;