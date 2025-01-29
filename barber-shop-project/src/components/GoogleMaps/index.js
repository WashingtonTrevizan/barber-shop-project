import React from 'react';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
  @media (min-width: 600px) {
    width: 600px;
  }
`;

function GoogleMapsLink() {
  return (
    <StyledIframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14668.10000164565!2d-45.8948608!3d-23.205759500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4b006ff491a5%3A0xb2a5732a22019f98!2sRestaurante%20da%20Fazenda%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos!5e0!3m2!1spt-BR!2sbr!4v1738171334920!5m2!1spt-BR!2sbr"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></StyledIframe>
  );
}

export default GoogleMapsLink;