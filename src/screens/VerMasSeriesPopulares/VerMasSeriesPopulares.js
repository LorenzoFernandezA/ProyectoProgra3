import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Series from "../../components/Series/Series";
import Filtro from "../../components/Filtro/Filtro";
import "../../styles/VerTodas.css"

function VerMasSeriesPopulares() {
  return (
    <React.Fragment>
      <Navbar/>
      <Filtro/>
      <Series/>
      <Footer/>
    </React.Fragment>
  )
}

export default VerMasSeriesPopulares;