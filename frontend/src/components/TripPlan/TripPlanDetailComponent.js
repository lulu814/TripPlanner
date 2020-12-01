import React from "react";
import TripPlanTripTableComponent from "./TripPlanTripTableComponent";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {FaArrowLeft} from "react-icons/all";
import PlanService from "../../services/PlanService";
import MapComponent from "../Homepage/Maps/MapComponent";

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
        return <div className="row container-fluid">
            <div className="col-md-6 col-lg-5 border-right min-vh-100">

                <span className="p-2">
                    <span>
                    <Link className="btn wbdv-td-peachy border-0 m-1 wbdv-fixed-btn" to={"/plans"}><FaArrowLeft size={28}/></Link>
                    <h1 className="h2 text-center m-2 pb-0 border-bot-3 wbdv-td-headline font-weight-bold text-uppercase">{this.state.plan.name}</h1>
                        </span>
                    <TripPlanTripTableComponent planId={this.state.plan._id}/>
                </span>
            </div>
            <div className="col-md-6 col-lg-7">
                {/*map */}
                <Container fluid style={{height: '100vh'}}>
                    <MapComponent/>
                </Container>
                {/*map */}
            </div>

        </div>
    }
}

export default TripPlanDetailComponent;
