import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PeliculasCartel from "../../components/PeliculasCartel/PeliculasCartel"
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares"
import SeriesPopulares from "../../components/SeriesPopulares/SeriesPopulares";
import SeriesCartel from "../../components/SeriesCartel/SeriesCartel";
function Home() {
    return (
        <React.Fragment>

            <Navbar/>
            <PeliculasPopulares/>
            <PeliculasCartel/>
            <SeriesPopulares/>
            <SeriesCartel/>
            <Footer/>

        </React.Fragment>
    )
    
}
export default Home;