import React from "react";
import "./styles/home.scss";
import logo1 from "../assets/logo1.png";

const Home = () => {
  return (
    <>
      <div className="containerHome">
      <botton className="btn-sticky">favoritos</botton>
      <botton className="btn-stycky">STAFF</botton>
        <img className="logo" alt="logoHome" src={logo1} />
        <h1 className="indication">SELECCIONA TU FILTRO</h1>
        <div className="btns-home">
          <botton className="btn-filter">ESTUDIANTES</botton>
          <botton className="btn-filter">STAFF</botton>
        </div>
        <div className="container-card">
        
        </div>
      </div>
    </>
  );
};

export default Home;
