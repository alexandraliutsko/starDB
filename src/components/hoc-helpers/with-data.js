import React from "react";
import Spinner from "../spinner/spiner";
import ErrorIndicator from "../error-indicator/error-indicator";

const withData = (View, getData) => {
    return class extends React.Component {
        state = {
            data: null,
            error: false,
            loading: true
        };

        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch(() => {
                    this.setState({
                        error: true,
                        loading: false
                    })
                });
        }

        render() {
            const { data, error, loading } = this.state;

            if (loading) {
                return <Spinner />;
            }

            if (error) {
                return <ErrorIndicator />;
            }

            return <View {...this.props} data={ data } />
        }
    }
}

export { withData };
