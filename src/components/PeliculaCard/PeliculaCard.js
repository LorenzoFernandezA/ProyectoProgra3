import React, {Component} from "react";

class PeliculaCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            datos : this.props.data,
            
    }
    }

    
    
    
    render() {

        if (this.state.loading) return <h3>Cargando...</h3>;
        return (
            <React.Fragment>
                <div>
                    <h3>{this.state.data.title}</h3>
                    <img src ={'https://image.tmdb.org/t/p/w342/' + this.state.data.poster_path}/>
                </div>
            </React.Fragment>)
    }
}
export default PeliculaCard;
