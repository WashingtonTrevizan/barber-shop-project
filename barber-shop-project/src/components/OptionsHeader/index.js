import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

const Option = styled.li`
  list-style: none;
  font-size: 16px;
  min-width: 120px;
  max-height: auto;
  height: 100%;
  padding: 0 15px;
  cursor: pointer;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Options = styled.ul`
  display: flex;
  color: black;

  @media (max-width: 600px) {
    display: none;
  }
`;

const textOptions = ['HOME', 'GALERIA', 'EQUIPE', 'SERVIÇOS', 'ASSINATURAS', 'CONTATO'];

function OptionsHeader() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="App-header">
      <Options>
        {textOptions.map((text) => (
          <Option key={text}><p>{text}</p></Option>
        ))}
      </Options>
      <div className="mobile-menu">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          disableScrollLock
        >
          {textOptions.map((text) => (
            <MenuItem key={text} onClick={handleClose}>{text}</MenuItem>
          ))}
        </Menu>
      </div>
    </header>
  );
}

export default OptionsHeader;