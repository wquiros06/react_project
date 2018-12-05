import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
/*
export default Carousel = () => (
  */
 class CarouselPrueba extends Component{
   render(){
     return(
  <Carousel autoPlay>
    <div>
      <img src="https://websiteblob1.blob.core.windows.net/beverages/1-spring-street-saison-2" alt="Avondale Brewing Co" />
      <p className="legend">Avondale Brewing Co</p>
    </div>
    <div>
      <img src="http://www.bandofbrosbrewing.com/wp-content/uploads/2018/12/Live-Casino-Online-Indonesia-Terbaik-Yang-Menyenangkan.jpg" alt="Band of Brothers Brewing Company"/>
      <p className="legend">Band of Brothers Brewing Company</p>
    </div>
    <div>
      <img src="https://static.wixstatic.com/media/282b89_9383c2c0678e4eec8c734bf511bf2d28~mv2_d_1224_1296_s_2.jpg/v1/fill/w_196,h_220,al_c,q_80,usm_0.66_1.00_0.01/282b89_9383c2c0678e4eec8c734bf511bf2d28~mv2_d_1224_1296_s_2.webp" alt="Yellowhammer Brewery"/>
      <p className="legend">Yellowhammer Brewery</p>
    </div>
  </Carousel>
     )}
 }

 export default CarouselPrueba;