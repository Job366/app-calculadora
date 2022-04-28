import React, { useState } from "react";
import Resultado from "./Resultado";


function CalcularButton({ velocidad, distancia, tiempo }) {

  const [resVelocidad, setResVelocidad] = useState('');
  const [resDistancia, setResDistancia] = useState('');
  const [resTiempo, setResTiempo] = useState('');

  const onClickCalcular = () => {

    let calcularVelocidad = 0
    let calcularDistancia = 0
    let calcularTiempo = 0

    if (velocidad === '') {
      calcularVelocidad = distancia / tiempo
      setResVelocidad(calcularVelocidad);
      document.querySelector("#distanciaId").style.display = 'none';
      document.querySelector("#tiempoId").style.display = "none";
    }

    if (distancia === 0) {
      calcularDistancia = velocidad * tiempo;
      setResDistancia(calcularDistancia);
      document.querySelector("#velocidadId").style.display = "none";
      document.querySelector("#tiempoId").style.display = "none";
    }

    if (tiempo === 0) {
      calcularTiempo = distancia / velocidad;
      setResTiempo(calcularTiempo);
      document.querySelector("#distanciaId").style.display = "none";
      document.querySelector("#velocidadId").style.display = "none";
    }

  }


  return (
    <div className="calcular">
      <button onClick={onClickCalcular} className="calcular_button">
        <a href="#">Calcular Resultados</a>
      </button>

      <Resultado resVelocidad={resVelocidad} resDistancia={resDistancia} resTiempo={resTiempo}/>
    </div>
  ); 
};

export default CalcularButton;