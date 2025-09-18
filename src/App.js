import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./App.css";

import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Favoritos from "./screens/Favoritos/Favoritos";
import Error from "./screens/Error/Error";
import SearchResults from "./screens/SearchResults/SearchResults";
import VerEstreno from './screens/VerEstreno/VerEstreno';
import DetalleCard from './components/DetalleCard/DetalleCard';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/peliculas" component={Peliculas}/>
      <Route path="/favoritos" component={Favoritos}/>
      <Route path="/search" component={SearchResults}/>
      <Route path="/VerEstreno" component={VerEstreno}/>
      <Route path={'/detalle/:id'} component={DetalleCard} />
      <Route component={Error}/>
    </Switch>
  );
}

export default App;
