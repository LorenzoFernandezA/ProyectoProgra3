import {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import { Link } from "react-router-dom";
import "./PeliculasCartel.css";

class PeliculasCartel extends Component {
    constructor(props){
        super(props);
        this.state = {
            datos: [],
        };
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e869b9e987b5106b290be42193522eba&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => this.setState({datos: data.results}))
        .catch(error => console.error(error));
        

    }

    
    render(){
      if (this.state.datos.length === 0) return <h3>Cargando...</h3>;
        return(
            <div>
                <h2>Peliculas de Estreno: </h2>

                <section className="cuadrado">
                {this.state.datos.slice(0,4).map((pelicula)=> (<PeliculaCard
            key={pelicula.id}
            nombre={pelicula.title}
            imagen={pelicula.poster_path}
            descripcion={pelicula.overview}
            id={pelicula.id}
          />
        ))}
        </section>
        <div className="vertodas">
        <Link to={"verMasEstreno"}><button className="more">Ver Todas</button></Link>
        </div>
      </div>
    );
  }
}
 export default PeliculasCartel;
 