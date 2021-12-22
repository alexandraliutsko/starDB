import React from "react";

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spiner";

export default class ItemList extends React.Component {
    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount() {
        this.swapiService.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                });
            });
    }

    renderItems(people) {
        return people.map(({id, name}) => {
            return (
                <li className="list-group-item" key={ id }
                    onClick={() => this.props.onItemSelected(id)}>
                    { name }
                </li>
            )
        });
    }

    render() {
        const { peopleList } = this.state;

        if (!peopleList) {
            return <Spinner />;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                { items }
            </ul>
        );
    }
}