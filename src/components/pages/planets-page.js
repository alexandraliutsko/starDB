import React from 'react';
import { PlanetDetails, PlanetList } from "../sw-components";
import Row from "../row/row";

export default class PlanetsPage extends React.Component {
    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<PlanetList onItemSelected={ this.onItemSelected } />}
                right={<PlanetDetails itemId={ selectedItem } />} />
        );
    }
}
