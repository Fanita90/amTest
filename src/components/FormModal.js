import React from 'react'
import "../styles/formModal.scss"

const FormModal = () => {
  return (
    <>
    <div className="contenido-modal">
            <form>
              <label htmlFor="name">Nombre:</label>
              <input id="name" type="text" />

              <label htmlFor="cumpleanos">CUMPLEAÑOS</label>
              <input id="cumpleanos" type="text" />

              <p>GÉNERO</p>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Estudiante</label>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Staff</label>

              <label htmlFor="ojos">COLOR DE OJOS</label>
              <input id="ojos" type="text" />

              <label htmlFor="pelo">COLOR DE PELO</label>
              <input id="pelo" type="text" />

              <label htmlFor="house">CASA</label>
              <select name="select">
                <option value="Slytherin">Slytherin</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Gryffindor">Gryffindor</option>
              </select>

              <p>POSICIÓN</p>
              <input
                type="radio"
                id="hogwartsStudent"
                name="position"
                value="hogwartsStudent"
              />
              <label htmlFor="hogwartsStudent">Estudiante</label>
              <input
                type="radio"
                id="hogwartsStaff"
                name="position"
                value="hogwartsStaff"
              />
              <label htmlFor="hogwartsStaff">Staff</label>

              <p>ESTADO</p>
              <input type="radio" id="alive" name="state" value="alive" />
              <label htmlFor="alive">Vivo</label>
              <input type="radio" id="dead" name="state" value="dead" />
              <label htmlFor="dead">Fallecido</label>

              <label htmlFor="photo">FOTOGRAFÍA</label>
              <input type="file" name="image" />

              <button>Guardar</button>
            </form>
          </div>
    </>
  )
}

export default FormModal