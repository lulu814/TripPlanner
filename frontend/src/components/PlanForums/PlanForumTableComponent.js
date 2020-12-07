import React from "react";
import PlanForumTableItemComponent from "./PlanForumTableItemComponent";
import TripService from "../../services/TripService";

class PlanForumTableComponent extends React.Component {

    state = {
        trips: []
    }

    componentDidMount() {
        TripService.findTripsForPlan(this.props.planId)
            .then(fetchedTrips => this.setState({trips: fetchedTrips}))
    }

    render() {
        return <div className="mt-4">
            <div className="wbdv-td-table-body-container">
                <ol className="wbdv-td-list">
                    {this.state.trips &&
                     this.state.trips.map(
                        trip => <PlanForumTableItemComponent key={trip._id} trip={trip}/>)
                    }
                </ol>
            </div>
        </div>
    }
}

export default PlanForumTableComponent;
