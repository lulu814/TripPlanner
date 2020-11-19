import React from "react";
import TripPlanTripTableComponent from "./TripPlanTripTableComponent";
import TripPlanCreateFormComponent from "./TripPlanCreateFormComponent";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import MapComponent from "../Homepage/Maps/MapComponent";
import MapForPlanComponent from "../Homepage/Maps/MapForPlanComponent";

class TripPlanDetailComponent extends React.Component {
    planHardcode = {
        name: '1',
        id: '1',
        user: {name: 'user1'},
        trips: [{date: '2022-12-01', places: ['Boston', 'NEU', 'Boston University'], order: 1, id: "1"}
            , {date: '2022-12-02', places: ['Cambridge'], order: 2, id: "2"}]
    }
    state = {
        plan: this.planHardcode
    }

    render() {
        return <div className="row">
            <div className="col-md-7 border-right min-vh-100">
                <Link className="btn btn-secondary m-1" to={"/plans"}>X</Link>
                <div className="p-2">
                    <h2 className="text-center">Plan: {this.state.plan.name}</h2>
                    {this.state.plan.trips && <TripPlanTripTableComponent
                        trips={this.state.plan.trips}/>}
                    <Link className="btn btn-success btn-block my-2 text-center"
                          to={`/posts`}>Share your plan?</Link>
                    <h2 className="text-center">Add Trip</h2>
                    <TripPlanCreateFormComponent/>
                </div>
            </div>
            <div className="col-md-5">
                {/*map */}
                <Container fluid style={{height: '100vh'}}>
                    {/* <SearchBarComponent/> */}

                    <MapForPlanComponent/>


                </Container>
                {/*map */}
            </div>

        </div>
    }
}

export default TripPlanDetailComponent;
