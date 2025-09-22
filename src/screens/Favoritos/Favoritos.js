import React, {Component} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";
import SerieCard from "../../components/SerieCard/SerieCard";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
  }
};


class Favoritos extends Component{
    constructor(props) {
        super(props)
        this.state = {
            favoritas: [],
            enFavoritas: false,
            datosPelicula: [],
            datosSerie: []
        }
    }
    cargarFavoritoPelicula () {
        const recuperoStorage = localStorage.getItem("favoritosPeliculas");
        const ids = recuperoStorage ? JSON.parse(recuperoStorage) : [];
     
        if (ids.length === 0) {
            console.log("No hay favoritos");
            this.setState({ datos: [] });
            return;
        }
        const favoritosRecuperados = [];
        ids.map(id=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(data=> {
                favoritosRecuperados.push(data);
                this.setState({datosPelicula: favoritosRecuperados})
            }
        )
            .catch(err => console.error(err));
        })
        }

    CargarFavoritoSerie () {
        const recuperoStorage = localStorage.getItem("favoritosSeries");
        const ids = recuperoStorage ? JSON.parse(recuperoStorage) : [];
     
        if (ids.length === 0) {
            this.setState({ datos: [] });
            return;
            }

        ids.map(id=>{
            fetch(`https://api.themoviedb.org/3/tv/${id}?language=en-US`, options)
            .then(res => res.json())
            .then(data=> this.setState({datosSerie: this.state.datos.concat(data) }))
            .catch(err => console.error(err));
            })
            }

    componentDidMount(){
        this.cargarFavoritoPelicula();
         this.CargarFavoritoSerie();
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <h2>Peliculas Favoritas</h2>
        {this.state.datosPelicula.map((info, idx) =>(
        <PeliculaCard nombre={info.title} imagen={info.poster_path} descripcion={info.overview} id={info.id} key={idx + info.title}/>
    ))}
                <h2>Series Favoritas</h2>
    {this.state.datosSerie.map((info, idx) =>(
        <SerieCard nombre={info.name} imagen={info.poster_path} descripcion={info.overview} id={info.id} key={idx + info.name}/>
    ))}
                <Footer/>
            </React.Fragment>
   )}




   /*
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
         */
}
   
export default Favoritos;