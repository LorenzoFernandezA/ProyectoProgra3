import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import "../Series/Series.css"; 
import SerieCard from "../SerieCard/SerieCard";   

class SeriesEstreno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      pagina: 1
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=e869b9e987b5106b290be42193522eba&language=es-ES&page=${this.state.pagina}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ series: data.results, pagina: this.state.pagina + 1
        })
      )
      .catch(err => console.error(err));
  }

  cargarSeries() {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=e869b9e987b5106b290be42193522eba&language=es-ES&page=${this.state.pagina}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          series: this.state.series.concat(data.results),
          pagina: this.state.pagina + 1
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    if (this.state.series.length === 0) return <h3>Cargando...</h3>;
    return (
      <div>
        <h2>Todas las Series de Estreno</h2>
        <section className="vertodo">
          {this.state.series.map((serie) => (
            <SerieCard
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

export default SeriesEstreno;