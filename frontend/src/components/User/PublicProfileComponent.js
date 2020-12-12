import React, {Component} from "react";
import image from '../../assets/avatar.jpg';
import {findPublicProfileById} from "../../services/UserService";
import PlanService from "../../services/PlanService";
import PlanForumHomeCardComponent from "../PlanForums/PlanForumHomeCardComponent";

export default class PublicProfile extends Component {

    state = {
        userId: this.props.match.params.uid,
        user: {},
        plans: []
    }

    componentDidMount() {
        this.loadPlans(this.state.userId)
        this.findUserById(this.state.userId)
    }

    loadPlans = (userId) => {
        PlanService.findPlansForUser(userId)
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    findUserById = (userId) => {
        findPublicProfileById(userId)
            .then(user => this.setState({user: user}));
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header mb-2"
                    >My Space
                    </div>
                    <div className="card-body">
                        <div className="e-profile">
                            <div className="row">
                                <div className="col-12 col-sm-auto mb-3">
                                    <div className="mx-auto">
                                        <div className="d-flex justify-content-center align-items-center rounded"
                                        >
                                            <img className="rounded-circle"
                                                 src={image} alt="name"
                                                 height="110"
                                                 width="110"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                    <div className="text-center text-sm-left mb-2 mb-sm-0">
                                        <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">@{this.state.user.username}</h4>
                                        <p className="mb-0">{this.state.user.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <div className="active nav-link">Plans</div>
                            </li>
                        </ul>
                        <div className="tab-content pt-3">
                            <div className="tab-pane active">
                                <ol className="articles">
                                    {this.state.plans &&
                                    this.state.plans.map(
                                        plan => {
                                            return <PlanForumHomeCardComponent key={plan._id} plan={plan}/>
                                        }
                                    )
                                    }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


