import React from "react";
import TripPlanTripTableComponent from "./TripPlanTripTableComponent";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/all";
import PlanService from "../../services/PlanService";
import MapComponent from "../Homepage/Maps/MapComponent";
import {findPublicProfileById} from "../../services/UserService";

class TripPlanDetailComponent extends React.Component {
    state = {
        plan: {},
        planId : this.props.match.params.planId,
        isLogin: localStorage.getItem('user') !== null,
        userId : '',
        userRole: '',
        planOwner: {}
    }

    componentDidMount() {
        if(this.state.isLogin) {
            this.loadPlan()
            this.setState({userId: JSON.parse(localStorage.getItem('user'))._id})
            this.setState({userRole: JSON.parse(localStorage.getItem('user')).role})
        }
    }

    loadPlan = () => {
        PlanService.findPlanById(this.state.planId)
            .then(fetchedPlan => this.setState({plan: fetchedPlan}))
            .then(r => findPublicProfileById(this.state.plan.user))
            .then(planOwner => this.setState({planOwner: planOwner}))
    }

    render() {
        return <div className="row container-fluid plan-align">
            {!this.state.isLogin &&
             <div>Please log in! {this.props.history.push("/signin")}</div>}
            {this.state.plan.user && this.state.userRole !== 'Admin' && this.state.userId !== this.state.plan.user  &&
                     <div>Please log in! {this.props.history.push("/plan-error")}</div>
            }
            <div className="col-md-6 col-lg-5 min-vh-100">
                <span className="p-2">
                    <span>
                    <Link className="btn wbdv-td-peachy border-0 m-1 wbdv-fixed-btn wbdv-high-index" to={`/user/${this.state.userId}/plans`}><FaArrowLeft size={28}/></Link>
                    <h4 className="h4 text-center m-2 pb-0 wbdv-td-headline font-weight-bold text-uppercase">{this.state.plan.name}</h4>
                        <h5 className="h5 text-center m-2 pb-0 border-bot-3 wbdv-td-headline font-weight-bold text-uppercase">
                            By <Link to={`/public-profile/${this.state.plan.user}`}>{this.state.planOwner.username}</Link></h5>
                        </span>
                    <TripPlanTripTableComponent planId={this.state.planId}/>
                </span>
            </div>
            <div className="col-md-6 col-lg-7 border-left d-none d-md-block">
                <Container fluid style={{height: '100vh'}}>
                    <MapComponent/>
                </Container>
            </div>
        </div>
    }
}

export default TripPlanDetailComponent;
