import React, { Component } from 'react';
import '../../estilos/contacto.css';
import Select from 'react-select'

class Provincias extends Component  {
    constructor(props) {
        super(props);

        console.log('props de componente/contaco/provincia-componente '+this.props.options);
    }

    handleChange = (selectedOption) => {
        this.props.OnSelectProvincia(selectedOption);
    }

    render(){
        return(
            <label>
                Seleccione:<br/>
                <Select value={this.props.selectedOption} options={this.props.provincias} onChange={this.props.handleChange}/>
            </label>
        )
    }  
}

export default Provincias;