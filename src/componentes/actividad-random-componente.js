import React, { Component } from 'react';
import '../estilos/actividad-random.css';

class ActividadRandom extends Component {
  render(){
    return(
      <div className="actividad">
        <label className="subtitulo">
          «{this.props.activity}»
        </label>
      </div>
    )
  } 
}

  export default ActividadRandom;
