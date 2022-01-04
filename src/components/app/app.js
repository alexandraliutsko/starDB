import React from "react";

import './app.css'

import Header from "../header/header";
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context/swapi-service-context";
import {
    PersonList,
    PlanetList,
    StarshipList,
    PlanetDetails,
    StarshipDetails,
    PersonDetails
} from '../sw-components/index'


export default class App extends React.Component {
    swapiService = new SwapiService();

    state = {
        hasError: false
    };

    render() {
        const { getStarship, getPerson, getPersonImage, getStarshipImage ,getAllPeople, getAllPlanets } = this.swapiService;

        const personDetails = (
            <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender:" />
                <Record field="birthYear" label="Birth Year:" />
                <Record field="eyeColor" label="Eye Color:" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails itemId={5} getData={getStarship} getImageUrl={getStarshipImage}>
                <Record field="model" label="Model:" />
                <Record field="length" label="Length:" />
                <Record field="costInCredits" label="Cost:" />
            </ItemDetails>
        );

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <SwapiServiceProvider value={ this.swapiService }>
                <div className="stardb-app">
                    <Header />

                    <PersonDetails itemId={11} />
                    <PlanetDetails itemId={11} />
                    <StarshipDetails itemId={11} />

                    <PersonList />
                    <PlanetList />
                    <StarshipList />
                </div>
            </SwapiServiceProvider>
        );
    }
}
