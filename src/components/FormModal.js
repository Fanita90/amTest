import React, { useState } from "react";
import "../styles/formModal.scss";
import axios from "axios";

const FormModal = () => {
  const url = "http://localhost:8000/new/";
  const [data, setData] = useState({
    name: "",
    gender: "",
    house: "",
    dateOfBirth: "",
    eyeColour: "",
    hairColour: "",
    hogwartsStudent: "",
    hogwartsStaff: "",
    alive: "",
    //image: "",
  });

  function handle({ target }) {
    setData({
      ...data,
      [target.name]: target.value,
    });
  }

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(
        url,
         data 
        //name: data.name,
        //gender: data.gender,
        //house: data.house,
        //dateOfBirth: data.dateOfBirth,
        //eyeColour: data.eyeColour,
        //hairColour: data.hairColour,
        //hogwartsStudent: data.hogwartsStudent,
        //hogwartsStaff: data.hogwartsStaff,
        //alive: data.alive,
        //image: data.image,
      )
      .then((res) => {
        console.log(res.data);
      });
    window.location.reload(true);
  };

  return (
    <>
      <div className="contenido-modal">
        <form onSubmit={submit}>
          <label htmlFor="name">
            Nombre:
            <input
              type="text"
              id="name"
              name="name"
              onChange={handle}
              //value={data.name}
            />
          </label>
          <br></br>

          <label htmlFor="dateOfBirth">
            CUMPLEAÑOS:
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              onChange={handle}
              //value={data.dateOfBirth}
            />
          </label>
          <br></br>
          <p>GÉNERO</p>
          <label>
            Male
            <input
              type="radio"
              id="male"
              name="gender"
              onChange={handle}
              value="male"
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              id="female"
              name="gender"
              onChange={handle}
              value="female"
            />
          </label>
          <br></br>
          <label htmlFor="eyeColour">COLOR DE OJOS:</label>
          <input
            id="eyeColour"
            name="eyeColour"
            type="text"
            onChange={handle}
            //value={data.eyeColour}
          />

          <br></br>
          <label htmlFor="hairColour">COLOR DE PELO:</label>
          <input
            type="text"
            onChange={handle}
            id="hairColour"
            name="hairColour"
            //value={data.hairColour}
          />
          <br></br>
          <label htmlFor="house">CASA</label>
          <select name="house" onChange={handle}>
            <option value="Slytherin">Slytherin</option>
            <option value="Revenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Gryffindor">Gryffindor</option>
          </select>

          <br></br>
          <p>POSICIÓN</p>
          <label htmlFor="hogwartsStudent">Estudiante</label>
          <input
            type="radio"
            onChange={handle}
            id="hogwartsStudent"
            name="hogwartsStudent"
            value="true"
          />

          <label htmlFor="hogwartsStaff">Staff</label>
          <input
            type="radio"
            onChange={handle}
            id="hogwartsStaff"
            name="hogwartsStaff"
            value="true"
          />
          <br></br>
          <p>ESTADO</p>
          <label htmlFor="alive">Vivo</label>
          <input
            type="radio"
            onChange={handle}
            id="alive"
            name="alive"
            value="true"
          />

          <label htmlFor="dead">Finado</label>
          <input
            type="radio"
            onChange={handle}
            id="dead"
            name="alive"
            value="true"
          />
          <br></br>
          {/*<label htmlFor="image">FOTOGRAFÍA</label>
          <input
            type="file"
            id="image"
            onChange={(e) => handle(e)}
            name="image"
            value={data.image}
          />*/}

          <button type="submit">Guardar</button>
        </form>
      </div>
    </>
  );
};

export default FormModal;
