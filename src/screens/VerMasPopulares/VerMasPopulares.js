import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Peliculas from "../../components/Peliculas/Peliculas";
import Filtro from "../../components/Filtro/Filtro";
import "../../styles/VerTodas.css"

function VerMasPopulares() {
    return (
        <React.Fragment>

            <Navbar/>
            <Filtro/>
            <Peliculas/>
            <Footer/>

        </React.Fragment>
    )}
export default VerMasPopulares;