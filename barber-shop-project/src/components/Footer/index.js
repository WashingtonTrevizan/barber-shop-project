import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
      }}
    >
      {/* Seção de Links */}
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '2rem', marginBottom: '1rem' }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Navegação
          </Typography>
          <Link href="#" color="inherit" underline="none" display="block">
            Home
          </Link>
          <Link href="#features" color="inherit" underline="none" display="block">
            Recursos
          </Link>
          <Link href="#pricing" color="inherit" underline="none" display="block">
            Preços
          </Link>
          <Link href="#contact" color="inherit" underline="none" display="block">
            Contato
          </Link>
        </Box>

        {/* Seção de Redes sociais */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Siga-nos
          </Typography>
          <Link href="https://facebook.com" color="inherit" target="_blank" rel="noopener" display="block" sx={{ marginBottom: '0.5rem' }}>
            Facebook
          </Link>
          <Link href="https://twitter.com" color="inherit" target="_blank" rel="noopener" display="block" sx={{ marginBottom: '0.5rem' }}>
            Twitter
          </Link>
          <Link href="https://instagram.com" color="inherit" target="_blank" rel="noopener" display="block" sx={{ marginBottom: '0.5rem' }}>
            Instagram
          </Link>
        </Box>
      </Box>

      {/* Seção de Direitos autorais */}
      <Typography variant="body2" color="inherit" align="center">
        © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
