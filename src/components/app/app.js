import React from "react";

import Header from "../header/header";
import PeoplePage from "../people-page/people-page";
import RandomPlanet from "../random-planet/random-planet";

import './app.css'
import ErrorIndicator from "../error-indicator/error-indicator";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";

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
            <div className="stardb-app">
                <Header />
                <RandomPlanet />

                <PeoplePage />

                <div className='people-page row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={ this.onPersonSelected }
                                  getData={ this.swapiService.getAllPlanets }
                                  renderitem={ (item) => item.name }/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={ this.state.selectedPerson } />
                    </div>
                </div>

                <div className='people-page row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={ this.onPersonSelected }
                                  getData={ this.swapiService.getAllStarships }
                                  renderitem={ (item) => item.name } />
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={ this.state.selectedPerson }/>
                    </div>
                </div>
            </div>
        );
    }
}
