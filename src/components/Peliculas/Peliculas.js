import React, {Component} from "react";
import Cartelera from "../Cartelera/Cartelera";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import PopularCard from "../PopularCard/PopularCard";
import CarteleraCard from "../CarteleraCard/CarteleraCard";

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
            populares: [],
            estreno: [],
            proximaEstrenos: 1,
            proximaPopular: 2
        };
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
        .then(res => res.json())
        .then(data => this.setState({estreno: data.results.slice(0, 4)}))
        .catch(error => console.error(error));

       fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
        .then(res => res.json())
        .then(data => this.setState({populares: data.results}))
        .catch(error => console.error(error));
      
    }

    cargarPopulares(){
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page={this.state.proximaPopula}',options) /*esta mal la parte de this.state.proximapopular,no lo lee como parte del link*/
    .then(response => response.json())
    .then(data => this.setState({populares: this.state.populares.concat(data.results),proximaPopular: this.state.proximaPopular + 1}))
    .catch(error => console.log(error));
    }

    render(){
      return(
        <React.Fragment>
          <h2>Peliculas mas Populares</h2>
  
            <section>
              {this.state.populares.map((popular, i) => (
                  <PopularCard nombre={popular.title}
                    imagen={popular.poster_path}
                    descripcion={popular.overview}
                    key={i + popular.id}
                   />
              ))}
            </section> 
            <button className="more" onClick={() => this.cargarPopulares()}> Cargar mas populares</button>

          <h2>Peliculas en Cartelera</h2>
              <section>
                  {this.state.estreno.map((una, i)=>(
                      <CarteleraCard nombre={una.title}
                      imagen={una.poster_path}
                      descripcion={una.overview}
                      key={i + una.id}/>
                  ))}
              </section>
             <button className="more" onClick={() =>this.cargarPopulares()} > Cargar mas</button>
        </React.Fragment>
      );
  }
}
 export default Peliculas;