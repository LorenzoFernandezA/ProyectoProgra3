import React from "react";
import {Link} from "react-router-dom";
import FormSearch from "../FormSearch/FormSearch";
import "./Navbar.css";

function Navbar() {
  return (
        <header>
            <h2 className="nombre_app"> PelisUdesa </h2>
            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/peliculas" className="nav-link" >Películas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/series" className="nav-link">Series</Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/favoritos" className="nav-link" >Favoritas</Link>
                    </li>
                </ul>

                <FormSearch />
                 
            </nav>
        </header>
  );
}

  export default Navbar;