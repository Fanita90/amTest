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
    axios.post(url, data).then((res) => {
      console.log(res.data);
    });
    window.location.reload(true);
  };

  return (
    <>
      <div className="contenido-modal">
        <form onSubmit={submit}>
          <div className="vertical">
          <label className="label-form" htmlFor="name">
            NOMBRE     
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handle}
            className="input-form"
            //value={data.name}
          />
          </div>
         
<div className="vertical">
          <label className="label-form" htmlFor="dateOfBirth">
            CUMPLEAÑOS
          </label>
          <input
            type="text"
            id="dateOfBirth"
            name="dateOfBirth"
            onChange={handle}
            className="input-form"
            //value={data.dateOfBirth}
          />
</div>
         
          <p>GÉNERO</p>
          <label className="label-form">Male</label>
          <input
            type="radio"
            id="male"
            name="gender"
            onChange={handle}
            value="male"
            //className="input-form"
          />

          <label className="label-form">Female</label>
          <input
            type="radio"
            id="female"
            name="gender"
            onChange={handle}
            value="female"
            //className="input-form"
          />

         <br/>
          <label className="label-form" htmlFor="eyeColour">
            COLOR DE OJOS
          </label>
          <input
            id="eyeColour"
            name="eyeColour"
            type="text"
            onChange={handle}
            className="input-form"
            //value={data.eyeColour}
          />

<br/>
          <label className="label-form" htmlFor="hairColour">
            COLOR DE PELO
          </label>
          <input
            type="text"
            onChange={handle}
            id="hairColour"
            name="hairColour"
            className="input-form"
            //value={data.hairColour}
          />
          <br/>
          <label className="label-form" htmlFor="house">
            CASA
          </label>
          <select name="house" onChange={handle} >
            <option value="Slytherin">Slytherin</option>
            <option value="Revenclaw">Ravenclaw</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Gryffindor">Gryffindor</option>
          </select>

          
          <p>POSICIÓN</p>
          <label className="label-form" htmlFor="hogwartsStudent">
            Estudiante
          </label>
          <input
            type="radio"
            onChange={handle}
            id="hogwartsStudent"
            name="hogwartsStudent"
            value="true"
            //className="input-form"
          />

          <label className="label-form" htmlFor="hogwartsStaff">
            Staff
          </label>
          <input
            type="radio"
            onChange={handle}
            id="hogwartsStaff"
            name="hogwartsStaff"
            value="true"
            //className="input-form"
          />
          
          <p>ESTADO</p>
          <label className="label-form" htmlFor="alive">
            Vivo
          </label>
          <input
            type="radio"
            onChange={handle}
            id="alive"
            name="alive"
            value="true"
            //className="input-form"
          />

          <label className="label-form" htmlFor="dead">
            Finado
          </label>
          <input
            type="radio"
            onChange={handle}
            id="dead"
            name="alive"
            value="true"
            //className="input-form"
          />
          <br/>
          <label className="label-form" htmlFor="image">
            FOTOGRAFÍA
          </label>
          <input
            type="file"
            id="image"
            onChange={(e) => handle(e)}
            name="image"
            value={data.image}
            //className="input-form"
          />
<div className="send">
          <button className="send-btn" type="submit">Guardar</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormModal;
