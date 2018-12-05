import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import ActividadRandomContenedor from "./actividades-random-contenedor"

class  CarouselContenedor extends Component {
  constructor(props){
    super(props);
    this.state = {
        error: null,
        cargado: false
    }
}

  render(){
    return(
      <Carousel autoPlay>
        <div>
          <ActividadRandomContenedor/>
        </div>
      </Carousel>
    )
  }
}

export default CarouselContenedor;