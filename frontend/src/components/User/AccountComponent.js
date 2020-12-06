import React, {Component} from "react";
import image from '../../assets/avatar.jpg';
import {updateProfile} from "../../services/UserService";
import PlanService from "../../services/PlanService";
import TripPlanHomeCardComponent from "../TripPlan/TripPlanHomeCardComponent";

export default class UserProfile extends Component {
    state = {
        isLogin: localStorage.getItem('accessToken') !== null,
        currUser: JSON.parse(localStorage.getItem('user')),
        fName: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).fName : '',
        lName: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).lName : '',
        password: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).password : '',
        text: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')).text : '',
        plans: []
    }

    componentDidMount() {
        // const planId = this.props.match.params.planId
        this.loadPlans(this.state.currUser._id)
        console.log(this.state.plans)
    }

    loadPlans = (userId) => {
        PlanService.findPlansForUser(userId)
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    updatePlan = (planId, plan) => PlanService.updatePlan(planId, plan)
        .then(plans => this.loadPlans());

    deletePlan = (planId) =>
        PlanService.deletePlan(planId)
            .then(() => this.setState(prevState => ({
                plans: prevState.plans.filter(p => p._id !== planId)
            })));

    handleClick = (e) => {
        e.preventDefault();
        const updateUser = {
            ...this.state.currUser,
            fName: this.state.fName,
            lName: this.state.lName,
            password: this.state.password,
            text: this.state.text
        }
        console.log("update user -> ", updateUser)
        updateProfile(updateUser)
        localStorage.setItem("user", JSON.stringify(updateUser))
        console.log(JSON.parse(localStorage.getItem('user')))
    }

    render() {
        return (
            <div className="container">
                {this.state.isLogin &&
                <div>
                    <div className="card">
                        <div className="card-header mb-2">Edit Profile</div>
                        <div className="card-body">
                            <div className="e-profile">
                                <div className="row">
                                    <div className="col-12 col-sm-auto mb-3">
                                        <div className="mx-auto">
                                            <div className="d-flex justify-content-center align-items-center rounded"
                                            >
                                                <img className="rounded-circle"
                                                     src={image} alt="name"
                                                     width="110"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">{this.state.fName} {this.state.lName}</h4>
                                            <div className="mt-2">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fa fa-fw fa-camera"/>
                                                    <span>Change Photo</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="text-center text-sm-right">
                                            <span className="badge badge-secondary">{this.state.currUser.role}</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <div className="active nav-link">Settings</div>
                                    </li>
                                </ul>
                                <div className="tab-content pt-3">
                                    <div className="tab-pane active">
                                        <form className="form">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label>First Name</label>
                                                                <input className="form-control"
                                                                       type="text"
                                                                       onChange={e =>
                                                                           this.setState({fName: e.target.value})}
                                                                       value={this.state.fName}/>
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label>Last Name</label>
                                                                <input className="form-control" type="text"
                                                                       onChange={e =>
                                                                           this.setState({lName: e.target.value})}
                                                                       value={this.state.lName}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <label>Email</label>
                                                                <input className="form-control" type="text"
                                                                       value={this.state.currUser.email}
                                                                       readOnly
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col mb-3">
                                                            <div className="form-group">
                                                                <label>About</label>
                                                                <textarea className="form-control" rows="5"
                                                                          placeholder="My Bio"
                                                                          onChange={e =>
                                                                              this.setState({text: e.target.value})}
                                                                          value={this.state.text}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="mb-2"><b>Change Password</b></div>
                                                    <div className="row">
                                                        {/*<div className="col-12 col-md-6">*/}
                                                        {/*    <div className="form-group">*/}
                                                        {/*        <label>Current Password</label>*/}
                                                        {/*        <input className="form-control" type="password"*/}
                                                        {/*               placeholder="••••••"/>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                        <div className="col-12 col-md-6">
                                                            <div className="form-group">
                                                                <label>New Password</label>
                                                                <input className="form-control" type="password"
                                                                       onChange={e =>
                                                                           this.setState({password: e.target.value})}
                                                                       placeholder="••••••"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col d-flex justify-content-end">
                                                    <button className="btn btn-primary"
                                                            onClick={e => this.handleClick(e)}
                                                    >Save
                                                        Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header mb-2">My Plans</div>
                        <div className="card-body">
                            <ol className="articles">
                                {this.state.plans &&
                                this.state.plans.map(plan =>
                                    <TripPlanHomeCardComponent key={plan._id} plan={plan}
                                                               deletePlan={this.deletePlan}
                                                               updatePlan={this.updatePlan}/>)}
                            </ol>

                            {/*<ul className="list-group">*/}

                            {/*<ol className="wbdv-td-list">*/}
                            {/*    {this.state.plans.map(*/}
                            {/*        plan => <PlanForumTableItemComponent key={plan._id} plan={plan}/>)*/}
                            {/*    }*/}
                            {/*</ol>*/}
                        </div>
                    </div>
                </div>}
                {!this.state.isLogin && <div>Please log in! {this.props.history.push("/signin")}</div>}
            </div>
        );
    }
}


