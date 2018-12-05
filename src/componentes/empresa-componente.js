import React from 'react';
import '../estilos/empresa.css'

const Empresa = (props) => (
    <div key={props.key} className="contenedor-empresa">                
        <div className="encabezado-empresa">
            {props.name}
        </div>
        <div className="fechas">
            {props.brewery_type}
        </div>
        <div className="texto-empresa">
        <a href={props.website_url}>
            {props.website_url}
        </a>
        </div>
    </div>
)

export default Empresa;