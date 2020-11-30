import React from "react";
import TripPlanHomeCardComponent from "./TripPlanHomeCardComponent";
import illustration from "../../assets/illustration.jpg";
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
            userId: this.userId
        }
        PlanService.createPlanForUser(this.userId, newPlan)
            .then(actualPlan => this.setState(prevState => (
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
        return <div className="wbdv-card-body">
            <h1 className="text-center mb-4 p-2 articles__title wbdv-bg-hf-trans">“We travel, some of us forever, to
                seek other places, other lives, other souls.” – Anais Nin</h1>
            <ol className="articles">
                <li className="articles__article" >
                    <button
                        onClick={() => this.createNewPlan()} className="articles__link">
                        <div className="articles__content articles__content--lhs">
                            <h2 className="articles__title">Create a new trip</h2>
                            <img width="54%" src={illustration} alt="illus" className="wbdv-fixed-img"/>
                            <div className="articles__footer">
                                <p className="text-center wbdv-card-text"><em>Live to travel and travel to live</em></p>
                            </div>
                        </div>
                        <div className="articles__content articles__content--rhs"
                             aria-hidden="true">
                            <h2 className="articles__title">Create a new trip</h2>
                            <img width="54%" src={illustration} alt="illus" className="wbdv-fixed-img"/>
                            <div className="articles__footer">
                                <p className="text-center wbdv-card-text"><em>Live to travel and travel to live</em></p>
                            </div>
                        </div>
                    </button>
                </li>
                {this.state.plans &&
                 this.state.plans.map(plan => <TripPlanHomeCardComponent key={plan._id} plan={plan}
                                                                         deletePlan={this.deletePlan}
                                                                         updatePlan={this.updatePlan}/>)}
            </ol>

        </div>
    }
}

export default TripPlanHomeComponent;
