import React from "react";

import './app.css'

import Header from "../header/header";
import ErrorIndicator from "../error-indicator/error-indicator";
import RandomPlanet from "../random-planet/random-planet";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages'

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
                <div className="stardb-app">
                    <Header />

                    <RandomPlanet />

                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </div>
            </SwapiServiceProvider>
        );
    }
}
