import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Popular from "../../components/Popular/Popular";
import CartaPopular from "../../components/CartaPopular/CartaPopular";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel";
function Home() {
    return (
        <React.Fragment>

            <Navbar/>
            <Popular/>
            <PeliculasCartel/>
            <Footer/>

        </React.Fragment>
    )
    
}
export default Home;