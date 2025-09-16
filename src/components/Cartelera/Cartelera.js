import React, {Component} from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";

class Cartelera extends Component {
    
    render() {
        return (
            <div>
                {this.props.peliculas.map((d, i) => (
                    <PeliculaCard data={d} key={i + d.title}/>
                ))}
            </div>
        )
    }
}
export default Cartelera;