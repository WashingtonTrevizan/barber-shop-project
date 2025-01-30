import React from 'react';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider, Container, Typography, Button } from '@mui/material';

const theme = createTheme();

const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: white;
  padding: ${({ theme }) => theme.spacing(6)}px;
  text-align: center;
`;

const StyledTypographyH3 = styled(Typography).attrs({
  variant: 'h3'
})``;

const StyledTypographyH6 = styled(Typography).attrs({
  variant: 'h6'
})`
  margin: ${({ theme }) => theme.spacing(2)}px 0;
`;

const HomeSection = () => (
  <StyledThemeProvider theme={theme}>
    <MuiThemeProvider theme={theme}>
      <StyledBox>
        <Container>
          <StyledTypographyH3>Bem-vindo ao Nosso Site</StyledTypographyH3>
          <StyledTypographyH6>A melhor experiência digital para você.</StyledTypographyH6>
          <Button variant="contained" color="secondary">Saiba Mais</Button>
        </Container>
      </StyledBox>
    </MuiThemeProvider>
  </StyledThemeProvider>
);

export default HomeSection;