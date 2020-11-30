import React, {Component} from "react";
import {FaCheck} from "react-icons/all";
import {FaTimes} from "react-icons/all";

class TripPlanTripTableItemComponent extends Component {
    state = {
        beingEdited: false,
        trip: this.props.trip
    }

    render() {
        return <tr>
            {!this.state.beingEdited && <th scope="row">{this.state.trip.order}</th>}
            {this.state.beingEdited && <th scope="row"><input
                className="form-control wbdv-min-w-table-day"
                value={this.state.trip.order}
                onChange={(e) => {
                    const newValue = e.target.value;
                    this.setState(prevState => ({
                        trip: {
                            ...prevState.trip,
                            order: newValue,
                        }
                    }))
                }
                }/></th>}

            {!this.state.beingEdited &&
             <th>{this.state.trip.date}</th>}
            {this.state.beingEdited &&
             <th><input className="form-control wbdv-mx-w-table"
                        value={this.state.trip.date}
                        type="date"
                        onChange={(e) => {
                            const newValue = e.target.value;
                            this.setState(prevState => ({
                                trip: {
                                    ...prevState.trip,
                                    date: newValue,
                                }
                            }))
                        }
                        }/></th>}

            {!this.state.beingEdited &&
             <th>{this.state.trip.places.map(
                 place => <span>{place}{'\n'}</span>)}</th>}

            {this.state.beingEdited &&
             <th><textarea className="form-control wbdv-min-w-table-text"
                           value={this.state.trip.places}
                           onChange={(e) => {
                               const newValue = e.target.value;
                               const newPlaces = newValue.split(',');
                               this.setState(prevState => ({
                                   trip: {
                                       ...prevState.trip,
                                       places: newPlaces,
                                   }
                               }))
                           }
                           }/></th>
            }

            <th>
                {!this.state.beingEdited &&
                 <button className="btn btn-primary"
                         onClick={() => this.setState({beingEdited: true})}>Edit
                 </button>
                }
                {this.state.beingEdited &&
                 <div>
                     <button className="btn btn-primary"
                             onClick={() => this.props.updateTrip(this.state.trip._id,
                                                                  this.state.trip)
                                 .then(this.setState({
                                                         beingEdited: false
                                                     }))}><FaCheck size={20}/>
                     </button>
                     <button className="btn btn-primary"
                             onClick={() => this.props.deleteTrip(this.state.trip._id)}><FaTimes
                         size={20}/>
                     </button>
                 </div>
                }
            </th>
        </tr>

    }
}

export default TripPlanTripTableItemComponent;

