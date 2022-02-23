import React from "react";
import "../styles/modal.scss";

const Modal = ({ children, state, changeState }) => {
  return (
    <>
      {state && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="modal-title">
              <h1>Agrega un personaje</h1>
            </div>
            <button className="close-btn" onClick={()=> changeState(false)}> X </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
