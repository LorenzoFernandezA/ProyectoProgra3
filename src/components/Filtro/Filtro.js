import React, {Component} from "react";

class Filtro extends Component{
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
        this.setState({input: evento.target.value},
       // () => this.props.filtro(this.state.input)
        );

        
    }

    render(){
        return(
            <form onSubmit={(evento) => this.evitarSubmit(evento)} className="formFiltro">
                <input onChange={(evento) => this.controlarCambios(evento)} value={this.state.input} placeholder="Filtrar peliculas..."/>
            </form>
        )
    }
}

export default Filtro;