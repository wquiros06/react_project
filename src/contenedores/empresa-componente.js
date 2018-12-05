import React, { Component } from 'react';
import Origen from "../componentes/origen-componente"
import Empresa from "../componentes/empresa-componente"
import '../estilos/tarjeta.css';

class EmpresaComponente extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            cargado: false,
            elementos: []
        }
    }

    componentDidMount(){
        fetch("https://api.openbrewerydb.org/breweries")
            .then(respuesta => respuesta.json())
            .then(
                resultado => {
                    //console.log(resultado);
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
            const {error, cargado} = this.state;
            if(error){
                return <div>Error: {error.message}</div>
            }else if(!cargado){
                return <div>Cargando...</div>
            }else{
                return(
                    <div key="inicio">
                        
                            {this.state.elementos.map((elem,i) =>{
                                    return(
                                        <div className="tarjeta">
                                            <Origen 
                                            key={elem.id}
                                            country={elem.country}
                                            state={elem.state}
                                            city={elem.city}
                                            />
                                            <Empresa 
                                            key={elem.name}
                                            name={elem.name}
                                            brewery_type={elem.brewery_type}
                                            website_url={elem.website_url}
                                            />
                                        </div>
                                    );
                                })
                            } 
                    </div> 
            );
        }
    }
}

export default EmpresaComponente;