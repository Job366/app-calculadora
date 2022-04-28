import React, { useState } from "react";
import CalcularButton from "./CalcularButton";

function Formulario() {

   const [velocidad, setVelocidad] = useState("");
   const [distancia, setDistancia] = useState("");
   const [tiempo, setTiempo] = useState("");

  return (
    <div className="calc">
      <form className="formulario">
        <p>Ingresa los datos del problema</p>
        <div className="formulario_input">
          <label>Velocidad</label>
          <input
            value={velocidad}
            onChange={(evento) => {
              setVelocidad(evento.target.value);
            }}
            className="formulario_input-value"
          />
        </div>

        <div className="formulario_input">
          <label>Distancia</label>
          <input
            value={distancia}
            onChange={(evento) => {
              setDistancia(evento.target.value);
            }}
            className="formulario_input-value"
          />
        </div>

        <div className="formulario_input">
          <label>Tiempo</label>
          <input
            value={tiempo}
            onChange={(evento) => {
              setTiempo(evento.target.value);
            }}
            className="formulario_input-value"
          />
        </div>
      </form>
      <CalcularButton
        velocidad={velocidad}
        distancia={distancia}
        tiempo={tiempo}
      />
    </div>
  );
}

export default Formulario;
