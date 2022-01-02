import React from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details/item-details";
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
        const { getPerson, getPersonImage } = this.swapiService;

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={ this.onPersonSelected }
                      getData={ this.swapiService.getAllPeople }
                      renderitem={ ({name, birthYear}) => `${name} (${birthYear})` } />
        );

        const personDetails = (
            <ItemDetails itemId={ this.state.selectedPerson } getData={getPerson} getImageUrl={getPersonImage} />
        );

        return (
            <Row left={ itemList } right={ personDetails } />
        )
    }
}
