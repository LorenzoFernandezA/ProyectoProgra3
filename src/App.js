import React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from "./screens/Home/Home";
import Peliculas from "./screens/Peliculas/Peliculas";
import Series from "./screens/Series/Series";
import Favoritos from "./screens/Favoritos/Favoritos";
import Error from "./screens/Error/Error";


function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/peliculas" component={Peliculas}/>
      <Route path="/series" component={Series}/>
      <Route path="/favoritos" component={Favoritos}/>
      <Route component={Error}/>
    </Switch>
  );
}

export default App;
