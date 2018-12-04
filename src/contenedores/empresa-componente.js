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
            const {error, cargado, elementos} = this.state;
            if(error){
                return <div>Error: {error.message}</div>
            }else if(!cargado){
                return <div>Cargando...</div>
            }else{
                return(
                    <div>
                        {
                            this.state.elementos.map((brewery,i) =>{
                                return(
                                    <div Key={brewery.id} className="tarjeta">
                                        <Origen 
                                        key={brewery.id}
                                        country={brewery.country}
                                        state={brewery.state}
                                        city={brewery.city}
                                        />
                                        <Empresa 
                                        key={brewery.id}
                                        name={brewery.name}
                                        brewery_type={brewery.brewery_type}
                                        website_url={brewery.website_url}
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