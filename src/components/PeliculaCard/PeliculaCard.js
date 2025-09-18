import React, {Component} from "react";
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            textovm: "Ver más",
            verMas: false
            
    }
    }
    
    cambiar(){
         if(this.state.verMas==true){
                this.setState({
                    verMas: false,
                    textovm: "Ver mas"
            })}else {
                this.setState({
                    verMas: true,
                    textovm: "Ver menos"
            })}}
    
    
    
    render() {

        if (this.state.loading) return <h3>Cargando...</h3>;
        return (
            <React.Fragment>
                    <h3>{this.props.nombre}</h3>
                    <img src ={'https://image.tmdb.org/t/p/w342/' + this.props.imagen}/>   
                    
                     <button className='more' onClick={() =>this.cambiar()}> {this.state.textovm}</button>
                     {this.state.verMas==true ?
                    <section className='extra'><p> Descripcion: {this.props.descripcion}</p>
                    </section> : ""}
                    <button><Link to={`detalle/${this.props.id}`}>Ver Detalles</Link></button>

            </React.Fragment>)
    }
}
export default PeliculaCard;
