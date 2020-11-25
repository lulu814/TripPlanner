import React from "react";

const PostTripTableComponent = ({trips}) => {
    // only for render use
    return <table className="table table-hover border-bottom">
        <thead>
        <tr>
            <th scope="col">Day</th>
            <th scope="col">Date</th>
            <th scope="col">Places</th>
        </tr>
        </thead>
        <tbody>
        {trips.map(trip => <tr>
            <th scope="row">{trip.order}</th>
            <th>{trip.date}</th>
            <th>{trip.places.map(place => <span>{place}&nbsp;&nbsp;</span>)}</th>
        </tr>)
        }
        </tbody>
    </table>
}

export default PostTripTableComponent;
