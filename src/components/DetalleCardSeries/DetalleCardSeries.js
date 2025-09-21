import React from "react";
import { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import { Link } from "react-router-dom";
import "./DetalleCardSeries.css"



class DetalleCardSeries extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            console.log(this.props.data),
            <div className="cartaDetalle">
                <h3>Nombre: {this.props.data.name}</h3>
                <img src ={'https://image.tmdb.org/t/p/w342/' + this.props.data.poster_path}/>
                <p>Calificacion: {this.props.data.popularity}</p>
                <p>Estreno: {this.props.data.first_air_date} </p>
                <p>Sinopsis: {this.props.data.overview} </p>
                <p>Genero: {this.props.data.genres &&
                    this.props.data.genres.map(genero => genero.name).join(', ')} </p>
                <button>Agregar a Favoritos</button>
                
            </div>
        )
    }
}
export default DetalleCardSeries;