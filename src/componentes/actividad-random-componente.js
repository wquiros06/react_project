import React, { Component } from 'react';
import '../estilos/actividad-random.css';

class ActividadRandom extends Component {
  render(){
    return(
      <div className="actividad">
        <label className="titulo">
          {this.props.activity}
        </label>
        <label className="subtitulo">
          {this.props.type}
        </label>
      </div>
    )
  } 
}

  export default ActividadRandom;
