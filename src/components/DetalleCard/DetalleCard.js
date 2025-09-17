import React, {Component} from "react";

class DetalleCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: props.data,
        }   
    }     

    render(){
        return(
            <div>
                <h3>{this.state.data.title}</h3>
                <img src ={'https://image.tmdb.org/t/p/w342/' + this.props.poster_path}/>
                <p>Calificacion: </p>
                <p>Estreno: </p>
                <p>Duracion: </p>
                <p>Sinopsis</p>
                <p>Genero: </p>
                <p>boton de favoritos</p>
                
            </div>
        )
    }
}



export default DetalleCard