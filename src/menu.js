import React from 'react';
import './menu.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
import App from "./App"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import EmpresaComponente from "./contenedores/empresa-componente"
import ActividadRandomContenedor from "./contenedores/actividades-random-contenedor"
import Formularios from "./ElevarEstado/contenedores/formulario-contenedor"

import Carousel from "./contenedores/Carousel"

import Notfound from './notfound'


const Routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact actvieclassname="active" to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink actvieclassname="active" to="/lista">Lista</NavLink>
                </li>
                <li>
                    <NavLink actvieclassname="active" to="/contacto">Formularios</NavLink>
                </li>
                <li>
                    <NavLink actvieclassname="active" to="/carousel">Carousel</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/lista" component={EmpresaComponente} />
                <Route path="/contacto" component={Formularios}/>
                <Route path="/actividad" component={ActividadRandomContenedor}/>
                <Route path="/carousel" component={Carousel}/>
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default Routing;
