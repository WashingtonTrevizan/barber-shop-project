import React from 'react';
import styled from 'styled-components';
import { Container as MuiContainer } from '@mui/material';
import gallery1 from '../../image/gallery-image1.jpeg';
import gallery2 from '../../image/gallery-image2.jpeg';
import gallery3 from '../../image/gallery-image3.jpeg';
import gallery4 from '../../image/gallery-image4.jpeg';
import gallery5 from '../../image/gallery-image5.jpeg';
import gallery6 from '../../image/gallery-image6.jpeg';

const CardImage = styled.img`
    border-radius: 8px;
    margin: 0 auto;
    text-align: center;
    height: 250px; /* Aumentando a altura fixa */
    width: 100%; /* Fazendo a imagem ocupar toda a largura do container */
    object-fit: cover; /* Para garantir que a imagem se ajuste ao container */
    display: block;
    transition: transform 0.3s ease; /* Adicionando transição suave */

    &:hover {
        transform: scale(1.05); /* Aumentando a imagem em 5% ao passar o mouse */
    }
`;

const StyledContainer = styled(MuiContainer)`
    padding: 16px;
    display: flex;
    flex-wrap: wrap; /* Permite que os itens sejam quebrados em várias linhas */
    align-items: center;
    justify-content: center;
    gap: 16px; /* Espaço lateral entre os containers */
    max-width: 100%;
`;

const ImageWrapper = styled.div`
    flex: 1 1 calc(33.333% - 32px); /* Cada imagem ocupa 1/3 da largura menos o espaço entre elas */
    max-width: calc(33.333% - 32px);

    @media (max-width: 768px) {
        flex: 1 1 calc(50% - 32px); /* Cada imagem ocupa 1/2 da largura menos o espaço entre elas em telas menores */
        max-width: calc(50% - 32px);
    }

    @media (max-width: 480px) {
        flex: 1 1 100%; /* Cada imagem ocupa 100% da largura em telas muito pequenas */
        max-width: 100%;
    }
`;

const Gallery = () => (
    <StyledContainer>
        <ImageWrapper><CardImage src={gallery1} alt="Gallery Image 1" /></ImageWrapper>
        <ImageWrapper><CardImage src={gallery2} alt="Gallery Image 2" /></ImageWrapper>
        <ImageWrapper><CardImage src={gallery3} alt="Gallery Image 3" /></ImageWrapper>
        <ImageWrapper><CardImage src={gallery4} alt="Gallery Image 4" /></ImageWrapper>
        <ImageWrapper><CardImage src={gallery5} alt="Gallery Image 5" /></ImageWrapper>
        <ImageWrapper><CardImage src={gallery6} alt="Gallery Image 6" /></ImageWrapper>
    </StyledContainer>
);

export default Gallery;