import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from "./menu"



/*ReactDOM.render(
    <CarouselContenedor/>,
    document.getElementById('crousel-encabezado'));
    */
ReactDOM.render(
    Routing,
    document.getElementById('root'));

serviceWorker.unregister();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
