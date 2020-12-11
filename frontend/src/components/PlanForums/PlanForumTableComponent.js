import React from "react";
import PlanForumTableItemComponent from "./PlanForumTableItemComponent";
import TripService from "../../services/TripService";

class PlanForumTableComponent extends React.Component {

    state = {
        trips: [],
        isLoaded: false
    }

    componentDidMount() {
        TripService.findTripsForPlan(this.props.planId)
            .then(fetchedTrips => this.setState({trips: fetchedTrips}))
            .then(r => this.setState({isLoaded: false}))
            .then(r => this.setState({isLoaded: true}))
    }

    render() {
        return <div className="mt-4">
            <div className="wbdv-td-table-body-container">
                <ol className="wbdv-td-list">
                    {this.state.isLoaded &&
                     this.state.trips.map(
                        trip => <PlanForumTableItemComponent key={trip._id} trip={trip}/>)
                    }
                </ol>
            </div>
        </div>
    }
}

export default PlanForumTableComponent;
