import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard"; 


class PeliculaEstreno extends Component {
    constructor(props){
        super(props);
        this.state = {
            estrenos: [],
            pagina: 1
        };
    }

    componentDidMount(){
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e869b9e987b5106b290be42193522eba&language=es-ES&page=1`)
        .then(res => res.json())
        .then(data => this.setState({ estrenos: data.results, pagina: 2 }))
        .catch(err => console.error(err));
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e869b9e987b5106b290be42193522eba&language=es-ES&page=${this.state.pagina}`)
        .then(res => res.json())
        .then(data => this.setState({ estrenos: this.state.estrenos.concat(data.results), pagina: this.state.pagina + 1
        }))
        .catch(err => console.error(err));
    }

    render(){
        if(this.state.estrenos.length === 0) return <h3>Cargando...</h3>;
        return(
          <div>
            <h2>Todas las Películas de Estreno</h2>
            <section className="vertodo">
              {this.state.estrenos.map((pelicula) => (
                <PeliculaCard
                  key={pelicula.id}
                  nombre={pelicula.title}
                  imagen={pelicula.poster_path}
                  descripcion={pelicula.overview}
                  id={pelicula.id}
                />
              ))}
            </section>
            <button className="more" onClick={() => this.cargarMas()}>
              Cargar más estrenos
            </button>
          </div>
        )
    }
}

export default PeliculaEstreno;