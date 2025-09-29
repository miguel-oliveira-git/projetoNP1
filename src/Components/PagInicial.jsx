import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  text-align: center;
  padding: 20px;
  background-color: #f0f2f5;
`;

const HomeTitle = styled.h1`
  font-size: clamp(28px, 6vw, 60px);
  color: #2C3E50;
  margin-bottom: 20px;
`;

const HomeText = styled.p`
  font-size: clamp(16px, 3vw, 20px);
  color: #555;
  max-width: 90%;
`;



export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Bem-vindo ao My Club FC</HomeTitle>
      <HomeText>
        Sua plataforma para ver e cadastrar times de futebol. 
      </HomeText>
    </HomeContainer>
  );
}