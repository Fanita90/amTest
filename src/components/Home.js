import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import logo1 from "../assets/logo1.png";
import fav from "../assets/fav.png";
import add from "../assets/add.png";
import { fetchStaff, fetchStudents ,fetchNew} from "../api/requests";
import Card from "./Card";
import Modal from "./Modal";
import FormModal from "./FormModal";


const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [showStudents, setShowStudents] = useState(true);
  const [showStaff, setShowStaff] = useState(true);
  const [showNew, setShowNew] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resultStaff = await fetchStaff();
      const resultStudents = await fetchStudents();
      const resultNew=await fetchNew();
      // setStuents(resultStudents.data)
      // setStaff(resultStaff.data)
      setCharacters([...resultStaff.data, ...resultStudents.data,...resultNew.data]);
    } catch (err) {
      console.log("error");
    }
  };

  const filter = () => {
    if (showStudents === true && showStaff === true && showNew ===true) {
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

        <Modal state={showModal} changeState={setShowModal} >
          <FormModal/>
        </Modal>
      </div>
    </>
  );
};

export default Home;
