import React, {Component} from "react";
import {FaCheck} from "react-icons/all";

class TripPlanTripTableItemComponent extends Component {
    state = {
        beingEdited: false,
        trip: this.props.trip,
        tripSize: this.props.size
    }

    render() {
        return <li className="wbdv-td-item text-center">
            {!this.state.beingEdited && <h4 className="wbdv-td-headline">{<span>{this.state.trip.places &&
                                                                                 this.state.trip.places.map(
                    (place, index) =>
                        <span key={index}> {place}{index !== this.state.tripSize && ','}</span>
            )}</span>}</h4>}
            {this.state.beingEdited &&
             <textarea className="form-control wbdv-td-headline"
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
                       }/>}
            {!this.state.beingEdited && <span>{this.state.trip.date}</span>}
            {this.state.beingEdited && <input className="form-control"
                                              value={this.state.trip.date}
                                              type="date"
                                              onChange={(e) => {
                                                  const newValue = e.target.value;
                                                  console.log(newValue)
                                                  this.setState(prevState => ({
                                                      trip: {
                                                          ...prevState.trip,
                                                          date: newValue
                                                      }
                                                  }))
                                              }
                                              }/>}
            <div>
                {!this.state.beingEdited &&
                 <div className="mt-2">
                     <button className="btn wbdv-td-table-btn mr-3"
                             onClick={() => this.setState({beingEdited: true})}>Edit
                     </button>
                     <button className="btn wbdv-td-table-btn"
                             onClick={() => this.props.deleteTrip(this.state.trip._id)}>Delete
                     </button>
                 </div>
                }
                {this.state.beingEdited &&
                 <div>
                     <button className="btn wbdv-td-table-btn mt-3 btn-block"
                             onClick={() => this.props.updateTrip(this.state.trip._id,
                                                                  this.state.trip)
                                 .then(this.setState({
                                                         beingEdited: false
                                                     }))}><FaCheck size={20}/>
                     </button>
                 </div>
                }
            </div>
            <hr/>
        </li>
    }
}

export default TripPlanTripTableItemComponent;

