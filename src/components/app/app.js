import React from "react";

import './app.css'

import Header from "../header/header";
import ErrorIndicator from "../error-indicator/error-indicator";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    hasError: false
  };

  MainContent = () => {
    return (
      <div className="main-content">
        <h2 className="title">Welcome to StarDB!</h2>
        <h4 className="subtitle">Please, choose any category in menu!</h4>
      </div>
    )
  }

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
              <Route exact path='/' element={ this.MainContent() } />
              <Route path='/people/' element={ <PeoplePage /> }/>
              <Route path='/planets/' element={ <PlanetsPage /> } />
              <Route exact path='/starships/' element={ <StarshipsPage /> } />
            </Routes>
          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
