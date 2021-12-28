import React from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";

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

        return (
            <div className='people-page row mb2'>
                <div className='col-md-6'>
                    <ItemList onItemSelected={ this.onPersonSelected }
                              getData={ this.swapiService.getAllPeople }
                              renderitem={ ({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})` } />
                </div>
                <div className='col-md-6'>
                    <PersonDetails personId={ this.state.selectedPerson }/>
                </div>
            </div>
        )
    }
}
