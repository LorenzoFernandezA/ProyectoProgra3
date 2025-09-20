import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Series from "../../components/Series/Series";
import "../../styles/VerTodas.css"

function VerMasSeriesPopulares() {
  return (
    <React.Fragment>
      <Navbar/>
      <Series/>
      <Footer/>
    </React.Fragment>
  )
}

export default VerMasSeriesPopulares;