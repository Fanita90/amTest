import React from "react";
import "../styles/home.scss";
import logo1 from "../assets/logo1.png";
import fav from "../assets/fav.png";
import add from "../assets/add.png";

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <section className="btns-fav-add">
          <header>
            <botton className="btn-sticky">
              Favoritos
              <img className="icon-btn" alt="favorite" src={fav} />
            </botton>
            <botton className="btn-sticky">
              Agregar
              <img className="icon-btn" alt="add" src={add} />
            </botton>
          </header>
        </section>
        <section>
          <img className="logo" alt="logoHome" src={logo1} />
          <h1 className="indication">SELECCIONA TU FILTRO</h1>
        </section>
        <div className="btns-home">
          <botton className="btn-filter">ESTUDIANTES</botton>
          <botton className="btn-filter">STAFF</botton>
        </div>

        <div className="container-card"></div>
      </div>
    </>
  );
};

export default Home;
