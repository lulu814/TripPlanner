import React from "react";
import TripPlanTripTableComponent from "./TripPlanTripTableComponent";
import TripPlanCreateFormComponent from "./TripPlanCreateFormComponent";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import MapForPlanComponent from "../Homepage/Maps/MapForPlanComponent";
import {FaTimes} from "react-icons/all";
import PlanService from "../../services/PlanService";

class TripPlanDetailComponent extends React.Component {
    state = {
        plan: []
    }

    componentDidMount() {
        const planId = this.props.match.params.planId;
        this.loadPlan(planId);
    }

    loadPlan = (planId) => {
        PlanService.findPlanById(planId)
            .then(fetchedPlan => this.setState({plan: fetchedPlan}))
    }

    render() {
        return <div className="row">
            <div className="col-md-7 col-lg-6 border-right min-vh-100">
                <Link className="btn btn-secondary m-1" to={"/plans"}><FaTimes/></Link>
                <div className="p-2">
                    <h2 className="text-center">Plan: {this.state.plan.name}</h2>
                    <TripPlanTripTableComponent planId={this.state.plan._id}/>
                </div>
            </div>
            <div className="col-md-5 col-lg-6">
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
