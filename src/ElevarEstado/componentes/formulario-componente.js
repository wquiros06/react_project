import React, { Component } from 'react';
import '../../estilos/formulario.css';

class Formulario extends Component {
    handleChangeNombre = (event) => {
      this.props.onFormularioNombreChange(event.target.value);
    }

    handleChangeEdad = (event) => {
      this.props.onFormularioEdadChange(event.target.value);
    }
  
    render() {
      return (
        <form>
          <label>
            Nombre: <input name="nombre" type="text" value={this.props.nombre} onChange={this.handleChangeNombre}/>
          </label>
          <label>
            Edad: <input name="edad" type="number" value={this.props.edad} onChange={this.handleChangeEdad}/>    
          </label>
        </form>
      );
    }
  }

  export default Formulario;
