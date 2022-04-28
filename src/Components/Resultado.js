
const Resultado = ({resVelocidad, resDistancia, resTiempo}) => {

  return (
    <div className="resultado_value">
      <p id="velocidadId">
        Velocidad:  <span>{resVelocidad}</span>
      </p>  <br />

      <p id="distanciaId">
        Distancia:  <span>{resDistancia}</span>
      </p>  <br />

      <p id="tiempoId">
        Tiempo: <span>{resTiempo}</span>
      </p>
    </div>
  );
};

export default Resultado;
