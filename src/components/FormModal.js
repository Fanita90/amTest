import React, { useState } from "react";
import "../styles/formModal.scss";
import axios from "axios";

const FormModal = () => {
  const url = "http://localhost:8000/staff";
  const [data, setData] = useState({
    "name": "",
    "gender": "",
    "house": "",
    "dateOfBirth": "",
    "eyeColour": "",
    "hairColour": "",
    "hogwartsStudent": "",
    "hogwartsStaff": "",
    "alive": "",
    "image": "",
  });

  const submit = (e)=> {
    e.preventDefault();
    axios.post(url, {setData}
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
  }

  function handle({target}) {
    setData({
      ...data,
      [target.name]:target.value
    })
    
  }
  return (
    <>
      <div className="contenido-modal">
        <form onSubmit={submit}>
          <label htmlFor="name">
            Nombre:
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="name"
              value={data.name}
            />
          </label>
          <br></br>

          <label htmlFor="dateOfBirth">
            CUMPLEAÑOS:
            <input
              type="text"
              onChange={(e) => handle(e)}
              id="dateOfBirth"
              value={data.dateOfBirth}
            />
          </label>
          <br></br>
          <p>GÉNERO</p>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            onChange={(e) => handle(e)}
            id="male"
            name="gender"
            value={data.gender}
          />

          <label htmlFor="female">Female</label>
          <input
            type="radio"
            onChange={(e) => handle(e)}
            id="female"
            name="gender"
            value={data.gender}
          />
          <br></br>
          <label htmlFor="eyeColour,s">COLOR DE OJOS:</label>
          <input
            id="eyeColour"
            type="text"
            onChange={(e) => handle(e)}
            value={data.eyeColour}
          />

          <br></br>
          <label htmlFor="hairColour">COLOR DE PELO:</label>
          <input
            type="text"
            onChange={(e) => handle(e)}
            id="hairColour"
            value={data.hairColour}
          />
          <br></br>
          <label htmlFor="house">CASA</label>
          <select name="select">
            <option onChange={(e) => handle(e)} value={data.house}>
              Slytherin
            </option>
            <option onChange={(e) => handle(e)} value={data.house}>
              Ravenclaw
            </option>
            <option onChange={(e) => handle(e)} value={data.house}>
              Hufflepuff
            </option>
            <option onChange={(e) => handle(e)} value={data.house}>
              Gryffindor
            </option>
          </select>
          <br></br>
          <p>POSICIÓN</p>
          <label htmlFor="hogwartsStudent">Estudiante</label>
          <input
            type="radio"
            onChange={(e) => handle(e)}
            id="hogwartsStudent"
            name="position"
            value={data.hogwartsStudent}
          />

          <label htmlFor="hogwartsStaff">Staff</label>
          <input
            type="radio"
            onChange={(e) => handle(e)}
            id="hogwartsStaff"
            name="position"
            value={data.hogwartsStaff}
          />
          <br></br>
          <p>ESTADO</p>
          <label htmlFor="alive">Vivo</label>
          <input
            type="radio"
            onChange={(e) => handle(e)}
            id="alive"
            name="state"
            value={data.alive}
          />

          <label htmlFor="dead">Finado</label>
          <input
            type="radio"
            onChange={(e) => handle(e)}
            id="dead"
            name="state"
            value={data.alive}
          />
          <br></br>
          <label htmlFor="image">FOTOGRAFÍA</label>
          <input
            type="file"
            id="image"
            onChange={(e) => handle(e)}
            name="image"
            value={data.image}
          />

          <button type="submit">Guardar</button>
        </form>
      </div>
    </>
  );
};

export default FormModal;
