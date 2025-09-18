import React, { Component } from "react";


class verMasEstreno extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculas: [],

        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=e869b9e987b5106b290be42193522eba`)
        .then(res => res.json())
        .then(data => this.setState({peliculas: data.results}))
        .catch(error => console.error(error));
    }
}

export default verMasEstreno;