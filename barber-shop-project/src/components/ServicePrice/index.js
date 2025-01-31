import React from 'react';
import styled from 'styled-components';
import { Container as MuiContainer } from '@mui/material';


const StyledContainer = styled(MuiContainer)`
    background-image: url(https://clubedabarbabh.com.br/wp-content/uploads/2018/10/price-bg-min.jpg); background-color: #171717 !important;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    border-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid #b8860b; 
    padding-bottom: 10px; 
    padding-top: 10px; 
`;



const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;

    @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna em telas menores */
  }
`;


const ServiceColumn = styled.div`
  flex: 1;
  margin: 0 10px;
  text-align: center; 
  display: flex;
  flex-direction: column;
  align-items: flex-start;

    @media (max-width: 768px) {
    margin: 10px 0; /* Ajusta a margem para telas menores */
  }
`;


const ServiceTitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px; 
  font-weight: bold; 
  text-transform: uppercase; 
  text-align: left;
  display: flex;
  align-items: center; 
  width: 100%;
`;

const ServiceDescription = styled.p`
  font-family: 'Roboto Condensed', sans-serif; 
  font-size: 20px; 
  color: lightgray; 
  margin-top: 0; 
  text-align: left; 
  border-bottom: 2px solid #b8860b; 
  padding-bottom: 10px; 
`;


const ServicePrice = styled.span`
  font-family: 'Roboto Condensed', sans-serif; /* Use Roboto Condensed font */
  font-size: 20px; /* Increase the font size */
  font-weight: bold; /* Make the text bold */
  color: #b8860b; /* Set the text color to dark golden */
  margin-left: 10px; /* Add some space between title and price */
`;

const Title = styled.h1`
  font-family: 'Roboto Condensed', sans-serif; /* Use Roboto Condensed font */
  text-align: center;
  font-size: 36px; /* Increase the font size */
  color: white;
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
    <StyledContainer id="galeria">
      <Title>NOSSOS SERVIÇOS</Title>
      <ServicesContainer>
        <ServiceColumn>
          {firstColumnServices.map((service, index) => (
            <div key={index}>
              <ServiceTitle>{service.title}
              <ServicePrice>{service.price}</ServicePrice>
              </ServiceTitle>     
              <ServiceDescription>{service.description}</ServiceDescription>
            </div>
          ))}
        </ServiceColumn>
        <ServiceColumn>
          {secondColumnServices.map((service, index) => (
            <div key={index}>
              <ServiceTitle>{service.title}
                <ServicePrice>{service.price}</ServicePrice>
              </ServiceTitle>    
              <ServiceDescription>{service.description}</ServiceDescription>
            </div>
          ))}
        </ServiceColumn>
      </ServicesContainer>
    </StyledContainer>
  );
}

export default ServicePriceComponent;