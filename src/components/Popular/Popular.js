import react from "react";
import {Component} from "react";
import Cartapopular from "../Cartapopular/Cartapopular";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
    }
    };

class Popular extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            datos:[],
            loading: true,
    }}

    
    componentDidMount() {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => console.log(res))
        // .then (data => this.setState({datos:data.results})) HAY UN PROBLEMA CON ESTE RESULTS
        .catch(err => console.error(err));
    }
    
    render() {
        if (this.state.loading) return <h3>Cargando...</h3>;
        return (
            this.state.datos.map((pelicula, idx) =>
                <Cartapopular key={pelicula.id}
                titulo={pelicula.title}
                imagen={pelicula.poster_path}
                id={pelicula.id}
                />
        ))
    }
}
export default Popular;
