import React from "react";

import Header from "../header/header";
import PeoplePage from "../people-page/people-page";
import RandomPlanet from "../random-planet/random-planet";

import './app.css'
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list/item-list";
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
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
            <div className="stardb-app">
                <Header />

                <PersonDetails itemId={11} />
                <PlanetDetails itemId={11} />
                <StarshipDetails itemId={11} />

                <PersonList />
                <PlanetList />
                <StarshipList />
            </div>
        );
    }
}
