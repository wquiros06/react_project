import React, { Component } from 'react';
import Contacto from "../../componentes/contacto/info-contacto-componente";
import ProvinciasContenedor from "./provincias-contenedor";
import '../../estilos/contacto.css';

class ContactoContenedor extends Component{
    constructor(props){
        super(props);
        this.state={
                nombre:'',
                apellidos:'',
                selectedOption: {value:"1", label:"San José"}
            };

            console.log('nombre' +this.state.nombre);
            console.log('apellidos' +this.state.apellidos);
    }

    handleSelect = (selectedOption) => {
        this.setState({selectedOption: selectedOption});
    } 

    handleSubmit = (event) => {
        alert('se envió la solicitud de contacto para: ' + this.state.nombre);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <Contacto />
                <ProvinciasContenedor />
                <input type="submit" value="Enviar"/>
            </form>            
        );
    }
}

export default ContactoContenedor;