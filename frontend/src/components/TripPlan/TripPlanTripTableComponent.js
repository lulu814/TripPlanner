import React from "react";
import TripPlanTripTableItemComponent from "./TripPlanTripTableItemComponent";
import TripService from "../../services/TripService";
import {Link} from "react-router-dom";
import TripPlanCreateFormComponent from "./TripPlanCreateFormComponent";

class TripPlanTripTableComponent extends React.Component {
    componentDidMount() {
        // this.loadTrips(this.props.planId)
    }

    loadTrips = (planId) => {
        TripService.findTripsForPlan(planId)
            .then(fetchedTrips => this.setState({trips: fetchedTrips}))
    }

    deleteTrip = (tripId) =>
        TripService.deleteTrip(tripId)
            .then(() => this.setState(prevState => ({
                trips: prevState.trips.filter(t => t._id !== tripId)
            })));

    updateTrip = (tripId, trip) => TripService.updateTrip(tripId, trip)
        .then(trips => this.loadPlans(this.props.planId));

    createTrip = (planId, trip) => TripService.createTripForPlan(planId, trip)
        .then(actualTrip => this.setState(prevState => ({
            trips: [...prevState.trips, actualTrip]})));

    state = {
        trips: [{date: '2022-12-01', places: ['Boston'], day: 1, _id: '1'}
            , {date: '2022-12-02', places: ['Cambridge'], day: 2, _id: '2'}]
    }

    render() {
        return <div className="mt-4">
            <div className="wbdv-td-table-body-container">
                <ol className="wbdv-td-list">
                    {this.state.trips.map(
                        trip => <TripPlanTripTableItemComponent key={trip._id} trip={trip}
                                                                updateTrip={this.updateTrip}
                                                                deleteTrip={this.deleteTrip}
                        />)
                    }
                </ol>
            </div>
            <h2 className="h2 text-center m-2 pb-0 border-bot-3 wbdv-td-headline font-weight-bold text-uppercase">Add Trip</h2>
            <TripPlanCreateFormComponent createTrip={this.createTrip}/>
        </div>
    }
}

export default TripPlanTripTableComponent;
