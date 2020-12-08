import React, {Component} from "react";

class PlanForumTableItemComponent extends Component {
    state = {
        trip: this.props.trip,
        tripSize: this.props.size
    }

    render() {
        return <li className="wbdv-td-item text-center">
            <h4 className="wbdv-td-headline">{<span>{this.state.trip.places &&
                                                     this.state.trip.places.map(
                                                         (place, index) =>
                                                             <span key={index}> {place}{index !== this.state.tripSize && ','}</span>
                                                     )}</span>}</h4>

            <span>{this.state.trip.date}</span>
            <hr/>
        </li>
    }
}

export default PlanForumTableItemComponent;

