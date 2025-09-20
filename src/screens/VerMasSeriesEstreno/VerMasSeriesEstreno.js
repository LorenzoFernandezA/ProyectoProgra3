import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SeriesEstreno from "../../components/SeriesEstreno/SeriesEstreno";
import "../../styles/VerTodas.css"

function VerMasSeriesEstreno() {
  return (
    <React.Fragment>
      <Navbar/>
      <SeriesEstreno/>
      <Footer/>
    </React.Fragment>
  )
}

export default VerMasSeriesEstreno;