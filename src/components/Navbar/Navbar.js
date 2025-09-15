import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"

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
                 <form className="search-form" onSubmit={(event)=> this.evitarSubmit(event)}>
                    <select name="type" defaultValue="movie">
                    <option value="movie">Películas</option>
                    <option value="tv">Series</option>
                    </select>
                    <input type="text" className="" name="searchData" placeholder="Buscar..." />
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                </form> 
            </nav>
        </header>
  );
}

  export default Navbar;