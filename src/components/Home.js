import React from "react";
import "./styles/home.scss";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        
        <img className="logo" alt="logoHome" src={logo} />
        <h1>Selecciona tu filtro</h1>
        <div className="btns-home">
          <botton className="btn-filter">ESTUDIANTES</botton>
          <botton className="btn-filter">STAFF</botton>
        </div>
      </div>
    </>
  );
};

export default Home;
