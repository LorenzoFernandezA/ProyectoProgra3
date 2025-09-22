import React, {Component} from "react";
import { withRouter } from "react-router-dom";

class FormSearch extends Component{
    constructor(props) {
        super(props)
        this.state = {
            type: "movie",  
            query: ""   
        }
    }

    evitarSubmit(evento){
        evento.preventDefault();
        this.props.history.push(`/search?type=${this.state.type}&query=${this.state.query}`);
    }

    controlarCambios(evento){
        this.setState({query: evento.target.value})
    }

    

    render(){
        return(
            <form onSubmit={(evento) => this.evitarSubmit(evento)}>
                <input placeholder='Buscar...' value={this.state.input} onChange={(evento) => this.controlarCambios(evento)}/> 
                <button>Buscar</button>
            </form>
        )
    }
}

export default withRouter(FormSearch);