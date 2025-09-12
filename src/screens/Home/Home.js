import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Popular from "../../components/Popular/Popular";
function Home() {
    return (
        <React.Fragment>

            <Navbar/>
            <Popular/>
            <Footer/>

        </React.Fragment>
    )
    
}
export default Home;