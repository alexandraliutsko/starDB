import React from "react";

import SwapiService from "../../services/swapi-service";

import './random-planet.css';
import Spinner from "../spinner/spiner";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class RandomPlanet extends React.Component {
    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onErr = (err) => {
        this.setState({
           error: true,
           loading: false
        });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 21 + 1);

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErr);
    }

    render() {
        const { planet: { id, name, population, rotationPeriod, diameter }, loading, error } = this.state;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                     onError={(e) => {e.target.onerror = null; e.target.src="https://us.123rf.com/450wm/1xpert/1xpert2005/1xpert200500029/146048530-planet-earth-globe-isolated-.jpg?ver=6"}}
                     alt="planet" />
                <div>
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{ rotationPeriod }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ diameter }</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
