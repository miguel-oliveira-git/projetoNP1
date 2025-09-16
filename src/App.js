import React, { useState } from "react";
import { Cabecalho, Corpo, RodapeTodo } from "./Components/portfolio";
import Cadastro from "./Cadastro";
import logo from './Assets/logo.png';
import logoPalmeiras from './Assets/logoPalmeiras.jpg';
import logoSantos from './Assets/logoSantos.png';
import logoCorinthians from './Assets/logoCorinthians.png';
import logoSaoPaulo from './Assets/logoSaoPaulo.png';
import logoFlamengo from "./Assets/logoFlamengo.png";
import logoCruzeiro from "./Assets/logoCruzeiro.png";

function App() {
  const [currentPage, setCurrentPage] = useState('times');

  const renderPage = () => {
    if (currentPage === 'cadastro') {
      return <Cadastro />;
    } else {
      return (
        <>
          <Corpo srcAvatar={logoPalmeiras} altAvatar={"Logo Palmeiras"} nomeTime={"SE Palmeiras"}></Corpo>
          <Corpo srcAvatar={logoSantos} altAvatar={"Logo Santos"} nomeTime={"Santos FC"}></Corpo>
          <Corpo srcAvatar={logoCorinthians} altAvatar={"Logo Corinthians"} nomeTime={"Corinthians SC"}></Corpo>
          <Corpo srcAvatar={logoSaoPaulo} altAvatar={"Logo São Paulo"} nomeTime={"São Paulo FC"}></Corpo>
          <Corpo srcAvatar={logoFlamengo} altAvatar={"Logo Flamengo"} nomeTime={"CR Flamengo"}></Corpo>
          <Corpo srcAvatar={logoCruzeiro} altAvatar={"Logo Cruzeiro"} nomeTime={"Cruzeiro"}></Corpo>
        </>
      );
    }
  };

  return (
    <div>
      <Cabecalho src={logo} alt="Logo" nomeSite={"My Club FC"}
        botao1={"Cadastrar Time"} botao2={"Ver Times"} botao3={"Login"}
        onNavigate={setCurrentPage}
      ></Cabecalho>
      {renderPage()}
      <RodapeTodo></RodapeTodo>
    </div>
  );
}

export default App;