import React, {Component} from "react";

class PlanForumTableItemComponent extends Component {
    state = {
        trip: this.props.trip,
    }

    render() {
        return <li className="wbdv-td-item text-center">
            <ul className="wbdv-td-headline">{this.state.trip.places &&
                                              this.state.trip.places.map(
                                                  (place, index) =>
                                                      <li className="d-block my-1" key={index}>{place}</li>
                                              )}</ul>

            <span>{this.state.trip.date}</span>
            <hr/>
        </li>
    }
}

export default PlanForumTableItemComponent;

