import {Component} from "react";
import CartaPopular from "../CartaPopular/CartaPopular";

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
                <h2>De Estreno: </h2>
                {this.state.datos.map((pelicula)=> (<CartaPopular
            key={pelicula.id}
            titulo={pelicula.title}
            imagen={''}
            id={pelicula.id}
          />
        ))}
        <button>Ver todas</button>
      </div>
    );
  }
}
 export default PeliculasCartel;
 