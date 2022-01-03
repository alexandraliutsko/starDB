import React from "react";

import ItemList from "../item-list/item-list";
import { withData} from "../hoc-helpers/with-data";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getAllPlanets,
    getAllPeople,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderNameAndBirthDate = ({ name, birthYear }) => <span>{ name } ({ birthYear })</span>;
const renderNameAndModel = ({ name, model }) => <span>{ name } ({ model })</span>;
const renderNameAndDiameter = ({ name, diameter }) => <span>{ name } ({ diameter })</span>;

const PersonList = withData(
                        withChildFunction(ItemList, renderNameAndBirthDate),
                        getAllPeople);

const PlanetList = withData(
                        withChildFunction(ItemList, renderNameAndDiameter),
                        getAllPlanets);

const StarshipList = withData(
                        withChildFunction(ItemList, renderNameAndModel),
                        getAllStarships);

export {
    PlanetList,
    PersonList,
    StarshipList
};