import React from "react";

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spiner";

export default class PersonDetails extends React.Component {
    swapiService = new SwapiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const { personId } = this.props;

        if (!personId) {
            return;
        }

        this.swapiService.getPerson(personId)
            .then((person) => {
                this.setState({ person });
            });
    };

    render() {
        if (!this.state.person) {
            return <span>Select a person from the list</span>;
        }

        const { id, name, gender, birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${ id }.jpg`}
                     onError={(e) => {e.target.onerror = null; e.target.src = "https://lh3.googleusercontent.com/proxy/1S3s8Vtcrt8qFdoZ4H2Ejct2tMkwHuwe9HZkOY-gOnxZ_OenKGVt882RvZxAUzTpcxc5VdfSAy97_aibRL0JPs1iNZMMguF0NLL4LaAxUdOo2EoT"}}
                     alt="person" />

                <div className="card-body">
                    <h4>{ name }</h4>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{ gender }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{ birthYear }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{ eyeColor }</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}