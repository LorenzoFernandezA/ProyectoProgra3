import React, {Component} from "react";

class FormSearch extends Component{
    constructor(props) {
        super(props)
        this.state = {
            input: '',  
        }
    }

    evitarSubmit(evento){
        evento.preventDefault();
    }

    controlarCambios(evento){
        this.setState({input: evento.target.value})
    }

    render(){
        return(
            <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input placeholder='Buscar...' value={this.state.input} onChange={(evento) => this.controlarCambios(evento)}/> 
            </form>
        )
    }
}

export default FormSearch;