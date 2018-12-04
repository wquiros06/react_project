import React, { Component } from 'react';
import Provincias from "../../componentes/contacto/provincia-componente"
import '../../estilos/contacto.css';

class ProvinciasContenedor extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            elementos: []
        }
    }

    componentDidMount(){
        fetch("https://ubicaciones.paginasweb.cr/provincias.json")
            .then(respuesta => respuesta.json())
            .then(
                resultado => {
                    console.log(resultado);
                    this.setState({
                        cargado: true,
                        elementos: resultado
                    });                
            },

            error => {
                this.setState({
                    cargado: true,
                    error
                });
            }
            );
        }

        render() {
                return(
                    <div>
                        <Provincias  value={this.state.selectedOption} options={this.state.elementos}/>
                    </div> 
            );
        }
}

export default ProvinciasContenedor;