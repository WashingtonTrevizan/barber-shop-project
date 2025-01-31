import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const Option = styled.li`
  padding: 0 15px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Options = styled.ul`
  display: flex;
  color: black;

  @media (max-width: 600px) {
    display: none;
  }
`;

const textOptions = [
  { text: 'HOME', id: 'home' },
  { text: 'GALERIA', id: 'galeria' },
  { text: 'EQUIPE', id: 'equipe' },
  { text: 'SERVIÇOS', id: 'servicos' },
  { text: 'ASSINATURAS', id: 'assinaturas' },
  { text: 'CONTATO', id: 'contato' }
];

function OptionsHeader() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOptionClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setAnchorEl(null);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Options>
        {textOptions.map((option, index) => (
          <Option key={index} onClick={() => handleOptionClick(option.id)}>
            {option.text}
          </Option>
        ))}
      </Options>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
        sx={{ display: { xs: 'block', sm: 'none' }, marginLeft: 4 }} 
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {textOptions.map((option, index) => (
          <MenuItem key={index} onClick={() => handleOptionClick(option.id)}>
            {option.text}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default OptionsHeader;