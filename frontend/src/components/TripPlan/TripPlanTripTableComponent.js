import React from "react";
import TripPlanTripTableItemComponent from "./TripPlanTripTableItemComponent";
import TripService from "../../services/TripService";
import {Link} from "react-router-dom";
import TripPlanCreateFormComponent from "./TripPlanCreateFormComponent";

class TripPlanTripTableComponent extends React.Component {
    componentDidMount() {
        this.loadTrips(this.props.planId)
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
        trips: [{date: '2022-12-1', places: ['Boston'], order: 1, _id: '1'}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2, _id: '2'}]
    }

    render() {
        return <div>
            <table className="table table-hover border-bottom">
                <thead>
                <tr>
                    <th scope="col">Day</th>
                    <th scope="col">Date</th>
                    <th scope="col">Places</th>
                    <th scope="col">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                {this.state.trips.map(
                    trip => <TripPlanTripTableItemComponent key={trip._id} trip={trip}
                                                            updateTrip={this.updateTrip}
                                                            deleteTrip={this.deleteTrip}
                    />)
                }
                </tbody>
            </table>
            <Link className="btn btn-success btn-block my-2 text-center"
                  to={`/posts`}>Share your plan?</Link>
            <h2 className="text-center">Add Trip</h2>
            <TripPlanCreateFormComponent createTrip={this.createTrip}/>
        </div>
    }
}

export default TripPlanTripTableComponent;
