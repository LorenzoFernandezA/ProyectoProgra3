import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DetalleCardSeries from "../../components/DetalleCardSeries/DetalleCardSeries";
import Footer from "../../components/Footer/Footer";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODY5YjllOTg3YjUxMDZiMjkwYmU0MjE5MzUyMmViYSIsIm5iZiI6MTc1NzYzMTEwNy43ODksInN1YiI6IjY4YzM1MjgzOGJkN2U4NzM1ZDZlZmRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lH0oQwGP9Tud6Nblp8Fe8CIq77j6N5Xzs1xrQmOC9Ts'
  }
};
class DetalleSeries extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: []
        }}

        componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.props.match.params.id}?language=en-US`, options)
        .then(res => res.json())
        .then(data => this.setState({info: data}))
        .catch(err => console.error(err));
        } 
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <DetalleCardSeries data={this.state.info}/>
                <Footer/>
            </React.Fragment>
        )
}
}
export default DetalleSeries;