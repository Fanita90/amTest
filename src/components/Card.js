import React from "react";
import fav2 from "../assets/fav2.png";
import "../styles/card.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/actions";

const Card = (props) => {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  // const addFavorites=()=>{
  //   dispatch(addToFavorites(props.character))
  // }

  const addOrRemoveFavorites = () => {
    if (favorites.find((favorite) => favorite.name == props.character.name)) {
      dispatch(removeFromFavorites(props.character));
    } else {
      dispatch(addToFavorites(props.character));
    }
  };

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
            <img
              className="icon-btn"
              alt="favorite"
              src={fav2}
              onClick={addOrRemoveFavorites}
            />
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
