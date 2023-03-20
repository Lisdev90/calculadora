import react from "react";

function Boton(props) {
    return (
        <div
          className={`boton-contendor ${esOperador(props.children) ? 'operador' : null}`}>
          {props.children}
        </div>
    )
}

export default Boton;