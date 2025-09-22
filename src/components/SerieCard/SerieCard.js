import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./SerieCard.css";

class  SerieCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            textovm: "Ver más",
            verMas: false,
            favorito: false,
            
    }
    }
    
    cambiar(){
         if(this.state.verMas === true){
                this.setState({
                    verMas: false,
                    textovm: "Ver más"
            })}else {
                this.setState({
                    verMas: true,
                    textovm: "Ver menos"
            })}
        };

        agregarFavorito = (id) => {
        const storage = localStorage.getItem('favoritosSeries');
        const favoritos = storage ? JSON.parse(storage) : [];  
        localStorage.setItem('favoritosSeries', JSON.stringify(favoritos));};


        quitarFavorito(id){
            const storage = localStorage.getItem('favoritosSeries')
            const storageParse = JSON.parse(storage)
            const storageFiltrado = storageParse.filter((elm) => elm !== id)
            const stringifiedStorage = JSON.stringify(storageFiltrado)
            localStorage.setItem('favoritosSeries', stringifiedStorage)

            this.setState({
                favorito: false,
            }); if(this.props.quitarDeFavoritos !==undefined){
                this.props.quitarDeFavoritos(id)
            }
        }
    render() {
        
        return (
            <React.Fragment>
                <article className="card">
                    <h3>{this.props.nombre}</h3>
                    <img src ={'https://image.tmdb.org/t/p/w342' + this.props.imagen}/> 
                    <div className="cardboton">
                     <button className='more' onClick={() =>this.cambiar()}> {this.state.textovm}</button>
                     {this.state.verMas === true ? 
                    <section className='extra'><p> Descripcion: {this.props.descripcion}</p>
                    </section> : ""}
                    <button><Link to={`/detalle-series/${this.props.id}`}>Ver Detalles</Link></button>
                    {
                        this.state.favorito === true ?
                            <button onClick={() => this.quitarFavorito(this.props.id)}>
                                Quitar Favoritos
                            </button>
                            :
                            <button onClick={() => this.agregarFavorito(this.props.id)}>
                                Agregar Favoritos
                            </button>
                    }
                
                    </div> 
                </article>

            </React.Fragment>)
    }
}
export default SerieCard;
