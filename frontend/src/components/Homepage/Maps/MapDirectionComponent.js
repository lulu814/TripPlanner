/* global google */
import React from "react";
import {
    DirectionsRenderer
} from "react-google-maps";


export default class MapDirectionsRenderer extends React.Component {
    state = {
        directions: null,
        error: null
    };

    componentDidMount() {
        const { places, travelMode } = this.props;
        console.log(places)
        const waypoints = places.map(p =>({
            location: {lat: p.latitude, lng: p.longitude},
            stopover: true
        }))
        if(waypoints.length >= 2){
            const origin = waypoints.shift().location;
            const destination = waypoints.pop().location;

            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin: origin,
                    destination: destination,
                    travelMode: travelMode,
                    waypoints: waypoints
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        this.setState({
                            directions: result
                        });
                    } else {
                        this.setState({ error: result });
                    }
                }
            );
        }
    }

    render() {
        if (this.state.error) {
            return <h1 className="map-h1">{this.state.error}</h1>;
        }
        return <DirectionsRenderer directions={this.state.directions} />;
    }
}
