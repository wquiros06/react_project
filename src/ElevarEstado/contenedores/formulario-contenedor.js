import React, { Component } from 'react';
import Formulario from "../componentes/formulario-componente";

class Formularios extends Component {
    constructor(props) {
      super(props);

      this.state = {nombre: '', 
                    edad: ''};
    }
  
    handleNombreChange = (nombre) => { 
      this.setState({nombre: nombre});
    }

    handleEdadChange = (edad) => {
      this.setState({edad: edad});
    }
  
    render() {
  
      return (
        <div>
          <Formulario
            nombre={this.state.nombre}
            edad={this.state.edad}
            onFormularioNombreChange={this.handleNombreChange}
            onFormularioEdadChange={this.handleEdadChange} />
          <Formulario
            nombre={this.state.nombre}
            edad={this.state.edad}
            onFormularioNombreChange={this.handleNombreChange}
            onFormularioEdadChange={this.handleEdadChange} />
        </div>
      );
    }
  }
  
  export default Formularios;