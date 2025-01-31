import React from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FloatingButton = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Fab
      aria-label="home"
      onClick={scrollToHome}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        boxShadow: 3,
        backgroundColor: '#8B4513', // Cor dourado escuro
        color: 'white', // Cor do ícone
        '&:hover': {
          backgroundColor: '#A0522D', // Cor dourado escuro mais claro ao passar o mouse
        },
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  );
};

export default FloatingButton;
