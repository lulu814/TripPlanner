import React from "react";
import TripService from "../../services/TripService";
import PlanForumTableItemComponent from "./PlanForumTableItemComponent";

class PlanForumTableComponent extends React.Component {
    componentDidMount() {
        this.loadTrips(this.props.planId)
    }

    loadTrips = (planId) => {
        TripService.findTripsForPlan(planId)
            .then(fetchedTrips => this.setState({trips: fetchedTrips}))
    }

    state = {
        trips: []
    }

    render() {
        return <div className="mt-4">
            <div className="wbdv-td-table-body-container">
                <ol className="wbdv-td-list">
                    {this.state.trips.map(
                        trip => <PlanForumTableItemComponent key={trip._id} trip={trip}/>)
                    }
                </ol>
            </div>
        </div>
    }
}

export default PlanForumTableComponent;
