import React, { Component } from 'react';
import './menu.css';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom'
import App from "./App"
import Review from "./contenedores/empresa-componente"
import ContactoContenedor from "./contenedores/contacto/contacto-contenedor"


import Notfound from './notfound'


const Routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink actvieClassName="active" to="/review">Reviews</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contacto">Contacto</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/review" component={Review} />
                <Route path="/contacto" component={ContactoContenedor}/>
                <Route component={Notfound} />
            </Switch>
        </div>
    </Router>
)

export default Routing;
