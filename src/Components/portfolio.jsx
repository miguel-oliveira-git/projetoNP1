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
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
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
`;

const Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 15px;
`;

const NomePagina = styled.h1`
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  background-color: #fff;
  font-family: Arial, sans-serif;
  flex-wrap: wrap;
`;
const Avatar = styled.img`
  width: 150px;
  height: 150px;
  margin: 0 auto 15px auto;
  display: flex;
  object-fit: cover;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
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
`;
const H2Rodape = styled.h2`
  color: white;
`

const ContatosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  margin: 20px 0;
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

export function Cabecalho({ src, alt, nomeSite, onNavigate }) {
  return (
    <Header>
      <HeaderLeft>
        <Logo src={src} alt={alt}></Logo>
        <h1>{nomeSite}</h1>
      </HeaderLeft>
      <HeaderRight>
        <NavLinks>
          <Botoes onClick={() => onNavigate('cadastro')}>Cadastrar Time</Botoes>
          <Botoes onClick={() => onNavigate('times')}>Ver Times</Botoes>
          <Botoes>Login</Botoes>
        </NavLinks>
      </HeaderRight>
    </Header>
  );
}

export function Corpo({ nomePagina, srcAvatar, altAvatar, nomeTime }) {
  return (
    <div>
      <NomePagina>
        {nomePagina}
      </NomePagina>
      <CardContainer>
        <Card>
          <Avatar src={srcAvatar} alt={altAvatar}></Avatar>
          <NomeTime>
            {nomeTime}
          </NomeTime>
          <BotaoPortfolio>Ver Mais</BotaoPortfolio>
        </Card>
      </CardContainer>
    </div>
  );
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