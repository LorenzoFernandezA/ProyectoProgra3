import React from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import { Link } from "react-router-dom";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
  }
};

class SeriesPopulares extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datos:[]
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/tv/popular?api_key=e869b9e987b5106b290be42193522eba&language=en-US&page=1', options)
    .then(res => res.json())
    .then (data => this.setState({datos:data.results}))
    .catch(err => console.error(err));
    }

    render() {
        if (this.state.datos.length === 0) return <h3>Cargando...</h3>;
        return (
      <div>
        <h2>Series Populares:</h2>
        <section className="cuadrado">
        {this.state.datos.filter((_, index) => index < 4).map((serie) => (
          <SerieCard
            key={serie.id}
            nombre={serie.name}
            imagen={serie.poster_path}
            descripcion={serie.overview}
            id={serie.id}
          />
        ))}
        </section>
        <div className="vertodas">
        <Link to="/series-populares">
          <button>Ver todas</button>
      </Link>
      </div>
      </div>
    );
    }
}

export default SeriesPopulares;