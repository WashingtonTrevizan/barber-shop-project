import React from 'react';
import styled from 'styled-components';
import testeImage from '../../image/teste.jpg';

const CardContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width:100%;
`;

const CardImage = styled.img`
    max-width: 100%;
    border-radius: 8px;
`;

const CardDescription = styled.p`
    margin: 16px 0;
`;

const CardButton = styled.button`
    background-color: #007BFF;
    color: #FFF;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;


function Card({ description, buttonText, onButtonClick }) {
    return (
        <CardContainer>
            <CardImage src={testeImage} alt="Card image" />
            <CardDescription>{description}</CardDescription>
            <CardButton onClick={onButtonClick}>{buttonText}</CardButton>
        </CardContainer>
    );
}


export default Card;
