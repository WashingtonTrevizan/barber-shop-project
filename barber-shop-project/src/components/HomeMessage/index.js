import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const scrollToSection = () => {
  const section = document.getElementById('assinaturas');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const InitialMessage = () => (
  <Box sx={{ backgroundColor: 'lightgray', color: 'black', p: 6, textAlign: 'center' }}>
    <Container>
      <Typography variant="h3">Primeira Barbearia por assinatura da cidade!</Typography>
      <Typography variant="h6" sx={{ my: 2 }}>Faça parte da maior comunidade de homens que se cuidam.</Typography>
      <Button variant="contained" sx={{ backgroundColor: '#b8860b' }} onClick={scrollToSection}>Saiba Mais</Button>
    </Container>
  </Box>
);

export default InitialMessage;