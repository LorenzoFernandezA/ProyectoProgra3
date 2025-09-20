import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard"; 
import "./Series.css";
import "../../styles/VerTodas.css"


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
  }
};

class Series extends Component {
  constructor(props){
    super(props);
    this.state = {
      series: [],
      pagina: 1
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=e869b9e987b5106b290be42193522eba&language=es-ES&page=${this.state.pagina}`)
      .then(res => res.json())
      .then(data => this.setState({
        series: data.results,
        pagina: this.state.pagina + 1
      }))
      .catch(err => console.error(err));
  }

  cargarSeries(){
    fetch(`https://api.themoviedb.org/3/tv/popular?language=es-ES&page=1`, options)
      .then(res => res.json())
      .then(data => this.setState({series: this.state.series.concat(data.results),pagina: this.state.pagina + 1
      }))
      .catch(err => console.error(err));
  }

  render(){
    if (this.state.series.length === 0) return <h3>Cargando...</h3>;
    return(
      <div>
        <h2>Todas las Series Populares</h2>
        <section className="vertodo">
          {this.state.series.map((serie, i) => (
            <PeliculaCard
              key={serie.id}
              nombre={serie.name}
              imagen={serie.poster_path}
              descripcion={serie.overview}
              id={serie.id}
            />
          ))}
        </section>
        <button className="more" onClick={() => this.cargarSeries()}>
          Cargar más series
        </button>
      </div>
    );
  }
}

export default Series;