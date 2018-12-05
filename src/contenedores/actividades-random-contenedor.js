import React, { Component } from 'react';
import ActividadRandom from "../componentes/actividad-random-componente"

class ActividadRandomContenedor extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            cargado: false,
            actividad: ''
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.cargar(),
            3000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    cargar(){
        fetch("https://www.boredapi.com/api/activity")
        .then(respuesta => respuesta.json())
        .then(
            resultado => {
                this.setState({
                    cargado: true,
                    actividad: resultado
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

   render(){
    const {error, cargado, actividad} = this.state;
    if(error){
        return <div>Error: {error.message}</div>
    }else if(!cargado){
        return <div>Cargando...</div>
    }else{
       return(
           <div>
                <ActividadRandom 
                    activity={actividad.activity}/>
           </div>
       )
    }
   }
}

export default ActividadRandomContenedor;