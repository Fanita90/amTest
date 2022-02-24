import React from "react";
import "../styles/modal.scss";
import cerrar from "../assets/cerrar.png";

const Modal = ({ children, state, changeState }) => {
  return (
    <>
      {state && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-title">
              <h1>Agrega un personaje</h1>
            </div>
            <button className="close-btn" onClick={()=> changeState(false)}> <img className="icon-btn-cerrar" alt="add" src={cerrar} /></button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
