import React, { Component } from 'react';
import Provincias from "../../componentes/contacto/provincia-componente"
import '../../estilos/contacto.css';
import Select from 'react-select'

class ProvinciasContenedor extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            elementos: [],
            selectedOption: {value:'', label:''}
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
                        <label>
                            Provincia: <br/>
                        <Select 
                        onChange={this.handleSelect}
                        value={this.state.selectedOption}
                        options={[{value:"1", label:"San Jose"},
                                      {value:"2", label:"Alajuela"},
                                      {value:"3", label:"Cartago"},
                                      {value:"4", label:"Heredia"},
                                      {value:"4", label:"Guanacaste"},
                                      {value:"4", label:"Puntarenas"},
                                      {value:"4", label:"Limón"}]} />
                        </label>
                      
                    </div> 
            );
        }
}
/*
<Provincias value={this.state.selectedOption} options={this.state.elementos}/>
*/

export default ProvinciasContenedor;