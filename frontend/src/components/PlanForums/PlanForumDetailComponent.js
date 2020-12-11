import React from "react";
import {Link} from "react-router-dom";
import {FaArrowLeft} from "react-icons/all";
import PlanService from "../../services/PlanService";
import MapComponent from "../Homepage/Maps/MapComponent";
import PlanForumTableComponent from "./PlanForumTableComponent";
import {findPublicProfileById} from "../../services/UserService";

class PlanForumDetailComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {plan: {}, user: {}}
        PlanService.findPlanById(this.props.match.params.planId)
            .then(fetchedPlan => this.setState({plan: fetchedPlan}))
            .then(r => findPublicProfileById(this.state.plan.user))
            .then(user => this.setState({user: user}))
    }

    render() {
        return <div className="row container-fluid">
            <div className="col-md-6 col-lg-5 min-vh-100">
                <span className="p-2">
                    <span>
                    <Link className="btn wbdv-td-peachy border-0 m-1 wbdv-fixed-btn wbdv-high-index"
                          to={"/plan-forum"}><FaArrowLeft size={28}/></Link>
                    <h4 className="h4 text-center m-2 pb-0 wbdv-td-headline font-weight-bold text-uppercase">{this.state.plan.name}</h4>
                        <h5 className="h5 text-center m-2 pb-0 border-bot-3 wbdv-td-headline font-weight-bold text-uppercase">
                            By: <Link
                            to={`/public-profile/${this.state.plan.user}`}>{this.state.user.username}</Link></h5>
                        </span>
                    <PlanForumTableComponent planId={this.props.match.params.planId}/>
                </span>
            </div>

            <div className="col-md-6 col-lg-7 border-left d-none d-md-block">
                <div className="map-detail container-md">
                    <MapComponent/>
                </div>
            </div>
        </div>
    }
}

export default PlanForumDetailComponent;
