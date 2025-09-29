import React, { useState } from "react";
import styled from "styled-components";
import { Cabecalho, Corpo, RodapeTodo, NomePagina, HomeContent } from "./Components/portfolio";
import Cadastro from "./Cadastro";
import logo from './Assets/logo.png';
import logoPalmeiras from './Assets/logoPalmeiras.jpg';
import logoSantos from './Assets/logoSantos.png';
import logoCorinthians from './Assets/logoCorinthians.png';
import logoSaoPaulo from './Assets/logoSaoPaulo.png';
import logoFlamengo from "./Assets/logoFlamengo.png";
import logoCruzeiro from "./Assets/logoCruzeiro.png";

const TeamCardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 10px;
  
  @media (min-width: 680px) {
    gap: 30px;
  }
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home'); 

  const renderPage = () => {
    if (currentPage === 'cadastro') {
      return <Cadastro />;
    } else if (currentPage === 'times') {
      return (
        <>
          <NomePagina>Times Registrados</NomePagina>
          <TeamCardsGrid>
            <Corpo srcAvatar={logoPalmeiras} altAvatar={"Logo Palmeiras"} nomeTime={"SE Palmeiras"}></Corpo>
            <Corpo srcAvatar={logoSantos} altAvatar={"Logo Santos"} nomeTime={"Santos FC"}></Corpo>
            <Corpo srcAvatar={logoCorinthians} altAvatar={"Logo Corinthians"} nomeTime={"Corinthians SC"}></Corpo>
            <Corpo srcAvatar={logoSaoPaulo} altAvatar={"Logo São Paulo"} nomeTime={"São Paulo FC"}></Corpo>
            <Corpo srcAvatar={logoFlamengo} altAvatar={"Logo Flamengo"} nomeTime={"CR Flamengo"}></Corpo>
            <Corpo srcAvatar={logoCruzeiro} altAvatar={"Logo Cruzeiro"} nomeTime={"Cruzeiro"}></Corpo>
          </TeamCardsGrid>
        </>
      );
    } else if (currentPage === 'home') {
      return <HomeContent onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div>
      <Cabecalho src={logo} alt="Logo" nomeSite={"My Club FC"}
        onNavigate={setCurrentPage}
      ></Cabecalho>
      {renderPage()}
      <RodapeTodo></RodapeTodo>
    </div>
  );
}

export default App;