import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import logo1 from "../assets/logo1.png";
import fav from "../assets/fav.png";
import add from "../assets/add.png";
import { fetchStaff, fetchStudents } from "../api/requests";
import Card from "./Card";
import Modal from "./Modal";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [showStudents, setShowStudents] = useState(true);
  const [showStaff, setShowStaff] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resultStaff = await fetchStaff();
      const resultStudents = await fetchStudents();
      // setStuents(resultStudents.data)
      // setStaff(resultStaff.data)
      setCharacters([...resultStaff.data, ...resultStudents.data]);
    } catch (err) {
      console.log("error");
    }
  };

  const filter = () => {
    if (showStudents === true && showStaff === true) {
      return characters;
    } else {
      const show = characters.filter((item) => {
        if (showStudents) {
          return item.hogwartsStudent === true;
        } else if (showStaff) {
          return item.hogwartsStaff === true;
        }
      });
      console.log(show);
      return show;
    }
  };

  return (
    <>
      <div className="containerHome">
        <section className="btns-fav-add">
          <button className="btn-sticky">
            Favoritos
            <img className="icon-btn" alt="favorite" src={fav} />
          </button>
          <button
            className="btn-sticky"
            onClick={() => setShowModal(!showModal)}
          >
            Agregar
            <img className="icon-btn" alt="add" src={add} />
          </button>
        </section>
        <section>
          <img className="logo" alt="logoHome" src={logo1} />
          <h1 className="indication">SELECCIONA TU FILTRO</h1>
        </section>
        <div className="btns-home">
          <button
            className="btn-filter"
            onClick={() => {
              setShowStudents(true);
              setShowStaff(false);
            }}
          >
            ESTUDIANTES
          </button>
          <button
            className="btn-filter"
            onClick={() => {
              setShowStudents(false);
              setShowStaff(true);
            }}
          >
            STAFF
          </button>
        </div>

        <div className="container-cards">
          {filter().map(function (character) {
            return <Card character={character} />;
          })}
        </div>

        <Modal
          estado={showModal}
          cambiarEstado={setShowModal} >
          <div className="contenido-modal">
            <form>
              <label htmlFor="name">Nombre:</label>
              <input id="name" type="text" />

              <label htmlFor="cumpleanos">CUMPLEAÑOS</label>
              <input id="cumpleanos" type="text" />

              <p>GÉNERO</p>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Estudiante</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Staff</label>

              <label htmlFor="ojos">COLOR DE OJOS</label>
              <input id="ojos" type="text" />

              <label htmlFor="pelo">COLOR DE PELO</label>
              <input id="pelo" type="text" />

              <label htmlFor="house">CASA</label>
              <select name="select">
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Gryffindor">Gryffindor</option>
              </select>

              <p>POSICIÓN</p>
              <input
                type="radio"
                id="hogwartsStudent"
                name="position"
                value="hogwartsStudent"
              />
              <label htmlFor="hogwartsStudent">Estudiante</label>
              <input
                type="radio"
                id="hogwartsStaff"
                name="position"
                value="hogwartsStaff"
              />
              <label htmlFor="hogwartsStaff">Staff</label>

              <p>ESTADO</p>
              <input type="radio" id="alive" name="state" value="alive" />
              <label htmlFor="alive">Vivo</label>
              <input type="radio" id="dead" name="state" value="dead" />
              <label htmlFor="dead">Fallecido</label>

              <label htmlFor="photo">FOTOGRAFÍA</label>
              <input type="file" name="image" />

              <button>Guardar</button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Home;
