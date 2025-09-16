import React, { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import "./App.css";
import Logo from '../Assets/logo.png';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cidade: "",
    sigla: "",
    estadio: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    alert("Time registrado com sucesso!");
    setFormData({
      nome: "",
      cidade: "",
      sigla: "",
      estadio: ""
    });
  };

  return (
    <div className="form-container">
      <img src={Logo} alt="Logo do clube" className="logo" />
      <h2>MY CLUB FC</h2>
      <p>Registre o seu time gratuitamente!</p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <InputField
          label="Cidade"
          name="cidade"
          value={formData.cidade}
          onChange={handleChange}
        />
        <InputField
          label="Sigla"
          name="sigla"
          value={formData.sigla}
          onChange={handleChange}
        />
        <InputField
          label="Estádio"
          name="estadio"
          value={formData.estadio}
          onChange={handleChange}
        />

        <SubmitButton text="REGISTRAR" />
      </form>
    </div>
  );
};

export default FormComponent;