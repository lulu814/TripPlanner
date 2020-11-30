import React from "react";
import TripPlanHomeCardComponent from "./TripPlanHomeCardComponent";
import post3 from "../../assets/post3.jpg";
import PlanService from "../../services/PlanService";

class TripPlanHomeComponent extends React.Component {

    userId = '1';

    plansHardcode = [{
        name: '1',
        id: '1',
        userId: '1',
        trips: [{date: '2022-12-1', places: ['Boston'], order: 1}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2}]
    }, {
        name: '2',
        id: '2',
        userId: '1',
        trips: [{date: '2022-12-1', places: ['Boston'], order: 1}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2}]
    }]

    state = {
        plans: []
    }

    updatePlan = (planId, plan) => PlanService.updatePlan(planId, plan)
        .then(plans => this.loadPlans(this.userId));

    createNewPlan = () => {
        const newPlan = {
            name: "New Plan",
            userId : this.userId
        }
        PlanService.createPlanForUser(this.userId, newPlan).then(actualPlan => this.setState(prevState => (
            {plans: [...prevState.plans, actualPlan]}
        )))
    }

    loadPlans = (userId) => {
        PlanService.findPlansForUser(userId)
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    deletePlan = (planId) =>
        PlanService.deletePlan(planId)
            .then(() => this.setState(prevState => ({
                plans: prevState.plans.filter(p => p._id !== planId)
            })));

    componentDidMount() {
        this.loadPlans(this.userId);
    }

    render() {
        return <div className="container-fluid">
            <h1 className="text-center m-2">Trip Plans</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card p-0 m-2 mx-3 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Create a new trip</h5>
                            <img width="100%"
                                 src={post3}
                                 alt=""/>
                            <div className="mt-2">
                            <button onClick={() => this.createNewPlan()} className="btn btn-primary m-1">
                                Create
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.plans &&
                 this.state.plans.map(plan => <TripPlanHomeCardComponent key={plan._id} plan={plan}
                                                                         deletePlan={this.deletePlan}
                                                                         updatePlan={this.updatePlan}/>)}
            </div>
        </div>
    }
}

export default TripPlanHomeComponent;
