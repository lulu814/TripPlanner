import React from "react";

class TripPlanCreateFormComponent extends React.Component {
    state = {
        trip: {
            day: this.props.size,
            date: '',
            places: [''],
            _plan: this.props.planId
        }
    }

    createNewTrip = (event) => {
        event.preventDefault();
        this.props.createTrip(this.props.planId, this.state.trip)
            .then(this.setState({
                                    trip: {
                                        day: this.props.size,
                                        date: '',
                                        places: [],
                                        _plan: this.props.planId
                                    }
                                }))
    }

    render() {
        return <form className="mt-4" onSubmit={(e) => this.createNewTrip(e)}>
            <div className="wbdv-from_field-container mb-4">
                <div className="form__group field">
                    <input type="number" className="form__field" id="InputDay" min={1} readOnly
                           value={this.state.trip.day}
                           placeholder="Enter Day" onChange={(e) => this.setState(prevState => ({
                        trip: {
                            ...prevState.trip,
                            day: e.target.value,
                        }
                    }))}/>
                    <label className="form__label" htmlFor="InputDay">Day</label>
                </div>
                <div className="form__group field">
                    <input type="text" className="form__field" id="InputDate" required value={this.state.trip.date} placeholder="2021-02-02"
                           onChange={(e) => this.setState(prevState => ({
                               trip: {
                                   ...prevState.trip,
                                   date: e.target.value,
                               }
                           }))}/>
                    <label className="form__label" htmlFor="InputDate">Date(e.g. 2021-02-25)</label>
                </div>
                <div className="form__group field">
                    <input type="text" className="form__field" id="InputPlace" required value={this.state.trip.places}
                           placeholder="Please split by ',' Example: Boston, Harvard"
                           onChange={(e) => this.setState(prevState => ({
                               trip: {
                                   ...prevState.trip,
                                   places: e.target.value.split(",")
                               }
                           }))}/>
                    <label className="form__label" htmlFor="InputPlace">Places(e.g. Boston, Cambridge)</label>
                </div>
            </div>
            <button type="submit" className="btn wbdv-td-table-btn btn-block">Submit
            </button>
        </form>
    }
}

export default TripPlanCreateFormComponent;
