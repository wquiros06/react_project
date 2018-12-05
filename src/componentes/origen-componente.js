import React from 'react';
import '../estilos/origen.css';

const Origen = (props) => (
    <div key={props.key} className="contenedor-origen">
        <div className="titulo-origen">
            {props.country}
        </div>
        <div>
            {props.state}
        </div>
        <div>
            {props.city}
        </div>
    </div>
)

export default Origen;