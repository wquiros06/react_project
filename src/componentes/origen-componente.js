import React, { Component } from 'react';
import '../estilos/origen.css';

const Origen = (props) => (
    <div className="contenedor-origen">
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