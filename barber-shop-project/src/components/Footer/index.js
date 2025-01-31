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

      
  );
};

export default Footer;
