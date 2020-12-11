import React from "react";
import TripPlanTripTableItemComponent from "./TripPlanTripTableItemComponent";
import TripService from "../../services/TripService";
import TripPlanCreateFormComponent from "./TripPlanCreateFormComponent";

class TripPlanTripTableComponent extends React.Component {
    componentDidMount() {
        this.loadTrips()
    }

    loadTrips = () => {
        TripService.findTripsForPlan(this.state.planId)
            .then(fetchedTrips => this.setState({trips: fetchedTrips}))
            .then(r => this.setState({loaded: false}))
            .then(r => this.setState({loaded: true}))
    }

    deleteTrip = (tripId) =>
        TripService.deleteTrip(tripId)
            .then(actualTrip => this.loadTrips());

    updateTrip = (tripId, trip) => TripService.updateTrip(tripId, trip);

    createTrip = (planId, trip) => TripService.createTripForPlan(planId, trip)
        .then(actualTrip => this.loadTrips());

    state = {
        loaded: false,
        trips: [],
        planId: this.props.planId
    }

    render() {
        return <div className="mt-4">
            <div className="wbdv-td-table-body-container">
                <ol className="wbdv-td-list">
                    {this.state.loaded && this.state.trips.map(
                        trip => <TripPlanTripTableItemComponent key={trip._id} trip={trip}
                                                                updateTrip={this.updateTrip}
                                                                deleteTrip={this.deleteTrip}
                        />)
                    }
                </ol>
            </div>
            <h2 className="h4 text-center m-2 pb-0 border-bot-3 wbdv-td-headline font-weight-bold text-uppercase">Add Trip</h2>
            {this.state.loaded &&
            <TripPlanCreateFormComponent createTrip={this.createTrip} planId={this.state.planId}
            size={this.state.trips.length + 1}/>}
        </div>
    }
}

export default TripPlanTripTableComponent;
