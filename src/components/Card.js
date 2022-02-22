import React from "react";

const Card = (props) => {
  return (
    <div>
      <label>{props.character.name}</label>
    </div>
  );
};

export default Card;
