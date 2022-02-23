import React from "react";
import fav2 from "../assets/fav2.png";
import "../styles/card.scss";

const Card = (props) => {
  return (
    <div className="allCards">
      <div className="card">
        <div className="card-img-house">
          <img
            className="card-img"
            src={props.character.image}
            alt="imageCard"
          />
        </div>

        <div className="card-info">
          <h5>
            {props.character.alive === true ? "VIVO " : "DIFUNTO "} / 
            {props.character.hogwartsStudent === true ? "ESTUDIANTE" : "STAFF"}
            <img className="icon-btn" alt="favorite" src={fav2} />
          </h5>

          <h4>
            <span>{props.character.alive === false ? " ✟ " : ""}</span>
            {props.character.name}
          </h4>
          <p>
            <strong>Cumpleaños: </strong> {props.character.dateOfBirth}
          </p>
          <p>
            <strong>Género: </strong> {props.character.gender}
          </p>
          <p>
            <strong>Color de ojos: </strong>
            {props.character.eyeColour}
          </p>
          <p>
            <strong>Color de pelo: </strong> {props.character.hairColour}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
