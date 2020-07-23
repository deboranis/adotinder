import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Sobre from './Components/Sobre/Sobre';
import Perguntas from './Components/Perguntas/Perguntas';
import Negativa from './Components/Negativa/Negativa';
import Resultado from './Components/Resultado/Resultado';
import Switch from 'react-bootstrap/esm/Switch';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
      <Navbar />
      <Route exact path="/" render={Home} />
      <Route path="/Sobre" render={Sobre} />
      <Route path="/Perguntas" >
        <Perguntas />
      </Route>
      <Route path="/Negativa" render={Negativa} />
      <Route path="/Resultado" render={Resultado} />
      <Footer />
    </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
