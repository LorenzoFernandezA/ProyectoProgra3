import React, {Component} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculaEstreno from "../../components/PeliculaEstreno/PeliculaEstreno";
import "../../styles/VerTodas.css"



class VerMasEstreno extends Component{
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],
            peliculasBackup: [],
        };
    }

    componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=e869b9e987b5106b290be42193522eba"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          peliculas: data.results,
          peliculasBackup: data.results,
        })
      )
      .catch((error) => console.error(error));
    }

    
    render(){
    return (
        <React.Fragment>

            <Navbar/>
            <PeliculaEstreno/> 
            <Footer/>

        </React.Fragment>
    )}
}
export default VerMasEstreno;



