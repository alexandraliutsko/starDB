import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context/swapi-service-context";
import ItemDetails, {Record} from "../item-details/item-details";

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    return (
                        <ItemDetails itemId={ itemId } getData={ getPerson } getImageUrl={ getPersonImage }>
                            <Record field="gender" label="Gender:" />
                            <Record field="birthYear" label="Birth Year:" />
                            <Record field="eyeColor" label="Eye Color:" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export { PersonDetails };
