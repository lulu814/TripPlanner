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
        return <div className="mt-4">
            <div className="wbdv-from_field-container mb-4">
                <div className="form__group field">
                    <input type="number" className="form__field" id="InputDay" min={1}
                           placeholder="Enter Day" onChange={(e) => this.setState(prevState => ({
                        trip: {
                            ...prevState.trip,
                            day: e.target.value,
                        }
                    }))}/>
                    <label className="form__label" htmlFor="InputDay">Day</label>
                </div>
                <div className="form__group field">
                    <input type="text" className="form__field" id="InputDate" placeholder="2021-02-02"
                           onChange={(e) => this.setState(prevState => ({
                               trip: {
                                   ...prevState.trip,
                                   date: e.target.value,
                               }
                           }))}/>
                    <label className="form__label" htmlFor="InputDate">Date(e.g. 2021-02-02)</label>
                </div>
                <div className="form__group field">
                    <input type="text" className="form__field" id="InputPlace"
                           placeholder="Please split by ',' Example: Boston, Harvard"
                           onChange={(e) => this.setState(prevState => ({
                               trip: {
                                   ...prevState.trip,
                                   place: e.target.value.split(','),
                               }
                           }))}/>
                    <label className="form__label" htmlFor="InputPlace">Places(e.g. Boston, Cambridge)</label>
                </div>
            </div>
            <button type="submit" className="btn wbdv-td-table-btn btn-block"
                    onClick={() => this.props.createTrip(this.state.trip)
                        .then(this.setState({
                                                trip: {
                                                    day: '',
                                                    date: '',
                                                    places: []
                                                }
                                            }))}>Submit
            </button>
        </div>
    }
}

export default TripPlanCreateFormComponent;
