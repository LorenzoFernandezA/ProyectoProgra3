import React, {Component} from "react";
import DetalleCard from "../../components/DetalleCard/DetalleCard";
import Navbar from "../../components/Navbar/Navbar"

class Detalle extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e869b9e987b5106b290be42193522eba`)
        .then(res => res.json())
        .then(data => this.setState({data: data}))
        .catch(err => console.error(err));
    }

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                
                {this.state.data && <DetalleCard data={this.state.data}/>}
            </React.Fragment>
        )
    }
};

export default Detalle;