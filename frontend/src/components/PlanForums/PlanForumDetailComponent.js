import React from "react";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import {FaArrowLeft} from "react-icons/all";
import PlanService from "../../services/PlanService";
import MapComponent from "../Homepage/Maps/MapComponent";
import PlanForumTableComponent from "./PlanForumTableComponent";

class PlanForumDetailComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {plan:{}}
        PlanService.findPlanById(this.props.match.params.planId)
            .then(fetchedPlan => this.setState({plan: fetchedPlan}))
    }
    componentDidMount() {
        // if (this.state.plan.user) {
        //     findPublicProfileById(this.state.plan.user)
        //         .then(user => this.setState({user: user}))
        // }
    }

    render() {
        return <div className="row container-fluid">
            <div className="col-md-6 col-lg-5 border-right min-vh-100">
                <span className="p-2">
                    <span>
                    <Link className="btn wbdv-td-peachy border-0 m-1 wbdv-fixed-btn wbdv-high-index"
                          to={"/plan-forum"}><FaArrowLeft size={28}/></Link>
                    <h2 className="h2 text-center m-2 pb-0 wbdv-td-headline font-weight-bold text-uppercase">{this.state.plan.name}</h2>
                        <h4 className="h4 text-center m-2 pb-0 border-bot-3 wbdv-td-headline font-weight-bold text-uppercase">
                            By: <Link
                            to={`/public-profile/${this.state.plan.user}`}>{this.state.plan.user}</Link></h4>
                        </span>
                    <PlanForumTableComponent planId={this.props.match.params.planId}/>
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

export default PlanForumDetailComponent;
