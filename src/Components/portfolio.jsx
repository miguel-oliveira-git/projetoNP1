import React from 'react';
import styled from 'styled-components';
import logoInstagram from '../Assets/Rectangle 3.png';
import logoFacebook from '../Assets/image 1.png';
import logoEmail from '../Assets/image 2.png';
import logoTelefone from '../Assets/image 3.png';

const Header = styled.header`
  background-color: #2C3E50;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  
  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start; 
    padding: 15px 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Botoes = styled.a`
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  margin: 0 10px;
  font-size: 16px;
  font-weight: normal;
  cursor: pointer;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  border-bottom: 2px solid transparent;

  &:hover {
  color: #f3c46e;
  border-bottom: 2px solid #f3c46e;
  }
  
  @media (max-width: 480px) {
    margin: 5px 0;
    padding: 8px 15px;
    width: 100%; 
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
    
    &:last-child {
      border-bottom: none;
    }
    
    &:hover {
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
`;

const NomePaginaStyled = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 10px;
  width: 100%;
`;

const Card = styled.div`
  width: 100%; 
  max-width: 320px; 
  padding: 20px;
  margin: 10px; 
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  background-color: #fff;
  font-family: Arial, sans-serif;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 15px auto;
  display: flex;
  object-fit: cover;
`;

const NomeTime = styled.p`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const BotaoPortfolio = styled.button`
  background-color: #2C3E50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
  text-decoration: none;
  display: inline-block;
  &:hover{
    background-color: #f3c46e;
  }
`;

const Rodape = styled.footer`
  background-color: #2b3950;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: 40px; 
`;

const H2Rodape = styled.h2`
  color: white;
`;

const ContatosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 20px 0;
  
  @media (max-width: 480px) {
    gap: 20px; 
  }
`;

const CopyrightContainer = styled.div`
  padding-top: 10px;
  p {
    margin: 0;
    color: white;
}
`;

const LogosRedes = styled.img`
  width: 40px;
  height: 40px;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  min-height: 70vh; /* Garante que a página ocupe a maior parte da tela */
  justify-content: center;

  h1 {
    font-size: 2.5em;
    color: #2C3E50;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2em;
    color: #555;
    margin-bottom: 30px;
    max-width: 600px;
  }
  
  @media (max-width: 600px) {
    padding: 30px 10px;
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1em;
    }
  }
`;

export function Cabecalho({ src, alt, nomeSite, onNavigate }) {
  return (
    <Header>
      <HeaderLeft>
        <Logo src={src} alt={alt}></Logo>
        <h1>{nomeSite}</h1>
      </HeaderLeft>
      <HeaderRight>
        <NavLinks>
          {}
          <Botoes onClick={() => onNavigate('home')}>Início</Botoes>
          <Botoes onClick={() => onNavigate('cadastro')}>Cadastrar Time</Botoes>
          <Botoes onClick={() => onNavigate('times')}>Ver Times</Botoes>
          <Botoes>Login</Botoes>
        </NavLinks>
      </HeaderRight>
    </Header>
  );
}

export function Corpo({ srcAvatar, altAvatar, nomeTime }) {
  return (
    <Card>
      <Avatar src={srcAvatar} alt={altAvatar}></Avatar>
      <NomeTime>
        {nomeTime}
      </NomeTime>
      <BotaoPortfolio>Ver Mais</BotaoPortfolio>
    </Card>
  );
}

export function HomeContent({ onNavigate }) {
  return (
    <HomeContainer>
      <h1>Bem-vindo ao My Club FC</h1>
      <p>Gerencie seus times de futebol de forma simples e eficiente. Cadastre, visualize e organize todos os seus clubes em um só lugar.</p>
      {}
      <BotaoPortfolio onClick={() => onNavigate('cadastro')}>Cadastre seu Primeiro Time!</BotaoPortfolio>
    </HomeContainer>
  );
}

export function NomePagina({ children }) {
  return <NomePaginaStyled>{children}</NomePaginaStyled>;
}

export function RodapeTodo({ instagramIcon, facebookIcon, emailIcon, phoneIcon }) {
  return (
    <Rodape>
      <H2Rodape>Contatos</H2Rodape>
      <ContatosContainer>
        <LogosRedes src={logoInstagram} alt="Instagram" />
        <LogosRedes src={logoFacebook} alt="Facebook" />
        <LogosRedes src={logoEmail} alt="Email" />
        <LogosRedes src={logoTelefone} alt="Telefone" />
      </ContatosContainer>
      <CopyrightContainer>
        <p>2025, feito por Juan e Miguel ©</p>
      </CopyrightContainer>
    </Rodape>
  );
}