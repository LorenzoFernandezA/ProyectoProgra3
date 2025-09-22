import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SeriesEstreno from "../../components/SeriesEstreno/SeriesEstreno";
import Filtro from "../../components/Filtro/Filtro";
import "../../styles/VerTodas.css"

function VerMasSeriesEstreno() {
  return (
    <React.Fragment>
      <Navbar/>
      <Filtro/>
      <SeriesEstreno/>
      <Footer/>
    </React.Fragment>
  )
}

export default VerMasSeriesEstreno;