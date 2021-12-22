import React from "react";

import Header from "../header/header";
import PeoplePage from "../people-page/people-page";
import RandomPlanet from "../random-planet/random-planet";

import './app.css'
import ErrorIndicator from "../error-indicator/error-indicator";

export default class App extends React.Component {
    state = {
        hasError: false
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <PeoplePage />
                <PeoplePage />
                <PeoplePage />
            </div>
        );
    }
}