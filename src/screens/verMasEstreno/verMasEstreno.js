import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculaEstreno from "../../components/PeliculaEstreno/PeliculaEstreno";
import "../../styles/VerTodas.css"

function VerMasEstreno() {
    return (
        <React.Fragment>

            <Navbar/>

            <PeliculaEstreno/> 
            <Footer/>

        </React.Fragment>
    )}
export default VerMasEstreno;



