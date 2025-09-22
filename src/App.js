import React from 'react';
import {Route, Switch} from "react-router-dom";
import "./App.css";

import Home from "./screens/Home/Home";
import Favoritos from "./screens/Favoritos/Favoritos";
import Error from "./screens/Error/Error";
import SearchResults from "./screens/SearchResults/SearchResults";
import verMasEstreno from './screens/verMasEstreno/verMasEstreno';

import Detalle from './screens/Detalle/Detalle';
import VerMasPopulares from './screens/VerMasPopulares/VerMasPopulares';
import VerMasSeriesPopulares from "./screens/VerMasSeriesPopulares/VerMasSeriesPopulares";
import VerMasSeriesEstreno from "./screens/VerMasSeriesEstreno/VerMasSeriesEstreno.js";
import DetalleSeries from './screens/DetalleSeries/DetalleSeries';

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/peliculas-populares" component={VerMasPopulares}/>
      <Route path="/series-populares" component={VerMasSeriesPopulares}/> 
      <Route path="/series-estreno" component={VerMasSeriesEstreno}/>
      <Route path="/favoritos" component={Favoritos}/>
      <Route path="/search" component={SearchResults}/>
      <Route path="/verMasEstreno" component={verMasEstreno}/>
      <Route path={'/detalle/:id'} component={Detalle} />
      <Route path={'/detalle-series/:id'} component={DetalleSeries} />
      <Route component={Error}/>
    </Switch>
  );
}

export default App;
