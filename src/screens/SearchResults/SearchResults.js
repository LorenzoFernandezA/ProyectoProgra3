import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculaCard from "../../components/PeliculaCard/PeliculaCard";

class SearchResults extends Component {
    constructor(props) {
      super(props);
      this.state = {
        resultados: [],
        busqueda: ""
      };
    }

    componentDidMount(){
        const queryParams = new URLSearchParams(this.props.location.search);
        const type = queryParams.get("type");  
        const query = queryParams.get("query"); 

        this.setState({ busqueda: query });
    
        fetch(`https://api.themoviedb.org/3/search/${type}?api_key=e869b9e987b5106b290be42193522eba&language=en-US&query=${query}`)
        .then(res => res.json())
        .then(data => this.setState({resultados: data.results}))
        .catch(error => console.error(error));
        
    }

    render(){
        return (
            <React.Fragment>
                <Navbar/>
                <h2 className="resul"> Resultados de: {this.state.busqueda}</h2>
                <div>
                    {this.state.resultados.length > 0
                        ?
                        (this.state.resultados.map(elm => (
                            <PeliculaCard data={elm} key={elm.id} />

                        ))
                    ) : ( 
                        <h2>No hay resultados disponibles</h2>

                    )}
                </div>
                <Footer/>

            </React.Fragment>
        )
    }}

    export default SearchResults;