import React, {Component} from "react";

class PlanForumTableItemComponent extends Component {
    state = {
        trip: this.props.trip
    }

    render() {
        return <li className="wbdv-td-item text-center">
            <h4 className="wbdv-td-headline">
                {this.state.trip.places.map(
                    (place, index) =>
                        <span
                            key={index}>{place}{'\n'}</span>)}</h4>

            <span>{this.state.trip.date}</span>
            <hr/>
        </li>
    }
}

export default PlanForumTableItemComponent;

