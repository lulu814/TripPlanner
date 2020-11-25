import React from "react";
import TripPlanTripTableItemComponent from "./TripPlanTripTableItemComponent";

const TripPlanTripTableComponent = ({trips}) => {
    return <table className="table table-hover border-bottom">
        <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Date</th>
            <th scope="col">Places</th>
            <th scope="col">&nbsp;</th>
        </tr>
        </thead>
        <tbody>
        {trips.map(trip => <TripPlanTripTableItemComponent key={trip.id} trip={trip}/>)
        }
        </tbody>
    </table>
}

export default TripPlanTripTableComponent;
