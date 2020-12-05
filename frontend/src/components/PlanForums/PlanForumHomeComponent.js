import React from "react";
import PlanForumHomeCardComponent from "./PlanForumHomeCardComponent";
import PlanService from "../../services/PlanService";
import bg from "../../assets/peach-watercolor-texture-background.jpg"

class PlanForumHomeComponent extends React.Component {

    state = {
        plans: []
    }

    loadPlans = () => {
        PlanService.findAllPlans()
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    componentDidMount() {
        this.loadPlans();
    }

    render() {
        return <div className="wbdv-card-body-2" style={{ backgroundImage:`url(${bg})` }}>
            <h1 className="h1 text-center py-5 articles__title text-white"><em>Plan Forum</em></h1>
            <ol className="articles">
                {this.state.plans &&
                 this.state.plans.map(
                     plan => <PlanForumHomeCardComponent key={plan._id} plan={plan}/>)}
            </ol>
        </div>
    }
}

export default PlanForumHomeComponent;
