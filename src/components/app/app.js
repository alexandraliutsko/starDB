import React from "react";

import './app.css'

import Header from "../header/header";
import ErrorIndicator from "../error-indicator/error-indicator";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import {BrowserRouter as Router, Route, Routes, useParams} from "react-router-dom";
import {StarshipDetails} from "../sw-components";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <SwapiServiceProvider value={ this.swapiService }>
        <Router>
          <div className="stardb-app">
            <Header />

            <RandomPlanet />

            <Routes>
              <Route exact path='/' element={<h2>Welcome to StarDB!</h2>} />
              <Route path='/people' element={ <PeoplePage /> }/>
              <Route path='/planets' element={ <PlanetsPage /> } />
              <Route exact path='/starships' element={ <StarshipsPage /> } />
            </Routes>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}