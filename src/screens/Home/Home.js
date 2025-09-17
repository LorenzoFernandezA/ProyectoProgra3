import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FormSearch from "../../components/FormSearch/FormSearch";
import Peliculas from "../../components/Peliculas/Peliculas";

function Home() {
    return (
        <React.Fragment>

            <Navbar/>
            <FormSearch/>
            <Peliculas/>
            <Footer/>

        </React.Fragment>
    )
    
}
export default Home;