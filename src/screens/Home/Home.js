import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel"
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares"
import FormSearch from "../../components/FormSearch/FormSearch";

function Home() {
    return (
        <React.Fragment>

            <Navbar/>
            <FormSearch/>
            <PeliculasPopulares/>
            <PeliculasCartel/>
            <Footer/>

        </React.Fragment>
    )
    
}
export default Home;