import React from "react";

class TripPlanCreateFormComponent extends React.Component {
    state = {
        trip: {
            day: '',
            date: '',
            places: []
        }
    }

    render() {
        return <div>
            <form>
                <div className="form-group">
                    <label htmlFor="InputDay">Day</label>
                    <input type="number" className="form-control" id="InputDay" min={1}
                           placeholder="Enter Day" onChange={(e) => this.setState(prevState => ({
                        trip: {
                            ...prevState.trip,
                            day: e.target.value,
                        }
                    }))}/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputDate">Date</label>
                    <input type="date" className="form-control" id="InputDate"
                           onChange={(e) => this.setState(prevState => ({
                               trip: {
                                   ...prevState.trip,
                                   date: e.target.value,
                               }
                           }))}/>
                </div>
                <div className="form-group">
                    <label htmlFor="InputPlace">Place</label>
                    <input type="text" className="form-control" id="InputPlace"
                           placeholder="Please split by ',' Example: Boston, Harvard"
                           onChange={(e) => this.setState(prevState => ({
                               trip: {
                                   ...prevState.trip,
                                   place: e.target.value.split(','),
                               }
                           }))}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block"
                        onClick={() => this.props.createTrip(this.state.trip)
                            .then(this.setState({
                                                    trip: {
                                                        day: '',
                                                        date: '',
                                                        places: []
                                                    }
                                                }))}>Submit
                </button>
            </form>
        </div>
    }
}

export default TripPlanCreateFormComponent;
