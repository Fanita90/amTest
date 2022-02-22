import React from "react";
import fav2 from "../assets/fav2.png";
import "../styles/card.scss";

const Card = (props) => {
  return (
    <div className="card">
     
      <div className="card-img-house">
        <img className="card-img" src={props.character.image} alt="imageCard" />
      </div>

      <div className="card-info">
            <h5>
            {props.character.alive === true ? "VIVO " : "DIFUNTO "} /{" "}
            {props.character.hogwartsStudent === true ? "ESTUDIANTE" : "STAFF"}
            <img className="icon-btn" alt="favorite" src={fav2} />
            </h5>

            <h3>
            <span>{props.character.alive === false ? "+ " : ""}</span>
            {props.character.name}
            </h3>
            <p>Cumpleaños:{props.character.dateOfBirth}</p>
            <p>Género:{props.character.gender}</p>
            <p>Color de ojos:{props.character.eyeColour}</p>
            <p>Color de pelo:{props.character.hairColour}</p>
        </div>
    </div>
  );
};

export default Card;
