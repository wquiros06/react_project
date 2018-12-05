import React, { Component } from 'react';
import './menu.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
import App from "./App"
import EmpresaComponente from "./contenedores/empresa-componente"
import ContactoContenedor from "./contenedores/contacto/contacto-contenedor"
import ControlledCarousel from "./contenedores/Carousel-contenedor"


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
                    <NavLink actvieclassname="active" to="/contacto">Contacto</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/lista" component={EmpresaComponente} />
                <Route path="/contacto" component={ContactoContenedor}/>
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default Routing;
