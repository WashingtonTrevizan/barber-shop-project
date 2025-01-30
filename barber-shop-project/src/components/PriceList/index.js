import React from "react";
import styled from "styled-components";
import { CardContent, Typography, List, ListItem, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

const StyledCard = styled.div`
  max-width: 300px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  background-color:rgb(34, 33, 33);
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid #b8860b;
  color:rgb(150, 148, 145);

  &:hover {
    transform: scale(1.05);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const PriceList = () => {
  const prices = [
    { name: "Barba Ilimitada", price: "R$89,90/mês", features: ["Barba Ilimitada", "10% de desconto em produtos", "Beneficios em Empresas Parceiras"] },
    { name: "Padrão", price: "R$99,90/mês", features: ["Corte Ilimitado", "10% de desconto em produtos", "Beneficios em Empresas Parceiras"] },
    { name: "Premium", price: "R$169,90/mês", features: ["Corte e Barba Ilimitados", "10% de desconto em produtos", "Beneficios em Empresas Parceiras"] },
  ];

  return (
    <Container>
      {prices.map((plan, index) => (
        <StyledCard key={index}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" textAlign="center">
              {plan.name}
            </Typography>
            <Typography variant="h6" color="#b8860b" textAlign="center">
              {plan.price}
            </Typography>
            <List>
              {plan.features.map((feature, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <CheckCircleIcon color="success" />
                  </ListItemIcon>
                  {feature}
                </ListItem>
              ))}
            </List>
          </CardContent>
        </StyledCard>
      ))}
    </Container>
  );
};

export default PriceList;