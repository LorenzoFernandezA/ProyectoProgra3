import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import './DetalleCard.css';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
  }
};


class DetalleCard extends Component{
    constructor(props) {
        super(props)
        this.state = {
            info: []
        }   
    }     
    
    componentDidMount(){
       fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?language=en-US`, options) 
    .then(res => res.json())
    .then(data => this.setState({info: data}))
    .catch(err => console.error(err));
    }

    render(){
        return(
            <div className="cartaDetalle">
                <h3>Nombre: {this.state.info.title}</h3>
                <img src ={'https://image.tmdb.org/t/p/w342/' + this.state.info.poster_path}/>
                <p>Calificacion: {this.state.info.popularity}</p>
                <p>Estreno: {this.state.info.release_date} </p>
                <p>Duracion en minutos: {this.state.info.runtime} </p>
                <p>Sinopsis: {this.state.info.overview} </p>
                <p>Genero: {this.state.info.genres &&
                    this.state.info.genres.map(genero => genero.name).join(', ')} </p>
                <button>Agregar a Favoritos</button>
                
            </div>
        )
    }
}



export default withRouter(DetalleCard);