import {Component} from "react";
import Cartelera from "../Cartelera/Cartelera";

class Peliculas extends Component {
    constructor(props){
        super(props);
        this.state = {
            populares: [],
            estreno: [],
        };
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e869b9e987b5106b290be42193522eba`)
        .then(res => res.json())
        .then(data => this.setState({estreno: data.results.slice(0, 4)}))
        .catch(error => console.error(error));

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=e869b9e987b5106b290be42193522eba`)
        .then(res => res.json())
        .then(data => this.setState({populares: data.results.slice(0, 4)}))
        .catch(error => console.error(error));
        

    }
    render(){
      return(
        <div>
          <h2>Peliculas mas Populares</h2>
          <Cartelera peliculas={this.state.populares}/>
          <h2>Peliculas de Estreno</h2>
          <Cartelera peliculas={this.state.estreno}/>
        </div>
      )
      
    ;
  }
}
 export default Peliculas;