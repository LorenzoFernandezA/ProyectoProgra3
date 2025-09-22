import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard"; 
import Filtro from "../Filtro/Filtro";
import "./Peliculas.css";
import "../../styles/VerTodas.css"



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
  }
};

class Peliculas extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            proximaPopular: 2,
            peliculas: [], 
            popularesBackup: [],

        };
    }

    componentDidMount(){
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then (data => this.setState({popularesBackup: data.results, peliculas: data.results}))
  .catch(err => console.error(err));
}
      


    cargarPopulares(){
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${this.state.proximaPopular}`,options) /*esta mal la parte de this.state.proximapopular,no lo lee como parte del link*/
    .then(response => response.json())
    .then(data => this.setState({proximaPopular: this.state.proximaPopular + 1, peliculas: this.state.concat(data.results), popularesBackup: this.state.concat(data.results)}))
    .catch(error => console.log(error));
    }

    filtrarPeliculas = (peliSearch) => {
    if (!peliSearch.trim()) {
      this.setState({ peliculas: this.state.popularesBackup });
      return;
    }

    const texto = peliSearch.toLowerCase().trim();
    const filtradas = this.state.popularesBackup.filter((peli) =>
      peli.title.toLowerCase().includes(texto)
    );

    this.setState({ peliculas: filtradas });

    console.log(texto, filtradas)
    };
    
    render(){
      return(
        <React.Fragment>
          <h2>Todas las peliculas mas Populares</h2>
          <Filtro filtro={this.filtrarPeliculas}/>
            <section className="vertodo">
              {this.state.peliculas.map((popular, i) => (
                  <PeliculaCard nombre={popular.title}
                    imagen={popular.poster_path}
                    descripcion={popular.overview}
                    id={popular.id}
                    key={i + popular.id}
                   />
              ))}
            </section> 
            <button className="more" onClick={() => this.cargarPopulares()}> Cargar mas populares</button>

        </React.Fragment>
      );
  };
}
export default Peliculas;