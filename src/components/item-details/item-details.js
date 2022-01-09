import React from "react";

import './item-details.css';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }</span>
            <span>{ item[field] }</span>
        </li>
    );
}

export { Record };

export default class ItemDetails extends React.Component {
    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    };

    render() {
        const { item, image } = this.state;

        if (!item) {
            return <span>Select a person from the list</span>;
        }

        const { name } = item;

        return (
            <div className="item-details card">
                <img className="item-image"
                     src={ image }
                     onError={(e) => {e.target.onerror = null; e.target.src = "https://image.shutterstock.com/image-photo/portrait-gray-tabby-cat-on-260nw-1180312252.jpg"}}
                     alt="item" />

                <div className="card-body">
                    <h4>{ name }</h4>

                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
