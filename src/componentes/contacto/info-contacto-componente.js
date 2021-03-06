import React, { Component } from 'react';
import '../../estilos/contacto.css'

class Contacto extends Component {
  constructor(props){
    super(props);
  }

  handleMultipleInput = (event) => {
    this.props.onMultipleInput(event.target.value);
 }

  render(){
    return(
      <>
        <label>
          Nombre: <input name="nombre" type="text" value={this.props.nombre} />
        </label>
        <label>
          Edad: <input name="apellidos" type="text" value={this.props.apellidos} />    
        </label>
        </>
    )
  } 
}

  export default Contacto;
