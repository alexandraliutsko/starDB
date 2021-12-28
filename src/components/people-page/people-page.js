import React from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";

export default class PeoplePage extends React.Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 4,
        hasError: false
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={ this.onPersonSelected }
                      getData={ this.swapiService.getAllPeople }
                      renderitem={ ({name, birthYear}) => `${name} (${birthYear})` } />
        );

        const personDetails = (
            <PersonDetails personId={ this.state.selectedPerson }/>
        );

        return (
            <Row left={ itemList } right={ personDetails } />
        )
    }
}
