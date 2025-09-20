import React, {Component} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";

class Favoritos extends Component{
    constructor(props) {
        super(props)
        this.state = {
            favoritas: [],
            enFavoritas: false,
        }
    }

    componentDidMount(){
        const storageFavoritos = localStorage.getItem('favoritos');
        if (storageFavoritos !== null) {
            const favParse = JSON.parse(storageFavoritos);
            if (favParse.length > 0) {
                Promise.all(
                    favParse.map((elm) =>
                        fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=fb93fcd4664bbfe64f105075e91d8d7c`)
                            .then((response) => response.json())
                            .catch((error) => console.log(error))
                    )
                )
                .then((data) => this.setState({
                        favoritas: data,
                        enFavoritas: true
                    }))
                    .catch((error) => console.log(error))
            }
        }
    }
    
    filtrarFavoritos(id) {
        const pelisFiltradas = this.state.favoritas.filter(elm =>
            elm.id !== id)
        this.setState({ favoritas: pelisFiltradas })
    }
    render(){
        return (
        <React.Fragment>
            <Navbar/>
            <div>
                <h1>Favoritas</h1>
                {
                    this.state.favoritas.length > 0 ?
                        this.state.favoritas.map((elm, idx) =>
                            <PeliculaCard
                                data={elm}
                                key={idx + elm.title}
                                quitarFavorito={(id) => this.filtrarFavoritos(id)}
                            />)
                        :
                        this.state.enFavoritas === false ?
                            <h1>No hay peliculas favoritas</h1>
                            :
                            <h1>Cargando tus peliculas favoritas</h1>
                }
            </div>

            <Footer/>
        </React.Fragment>
    )}
}
export default Favoritos;