import React from "react";
import PlanForumHomeCardComponent from "./PlanForumHomeCardComponent";
import PlanService from "../../services/PlanService";
import bg from "../../assets/peach-watercolor-texture-background.jpg"

class PlanForumHomeComponent extends React.Component {

    loadPlans = () => {
        PlanService.findAllPlans()
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    state = {
        plans: []
    }

    componentDidMount() {
        this.loadPlans()
    }

    render() {
        return <div className="wbdv-card-body-2" style={{backgroundImage: `url(${bg})`}}>
            <h4 className="h4 text-center py-5 font-weight-bold wbdv-one-point-6-rem articles__title text-white"><em>Plan Forum</em></h4>
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
    }
}

export default PlanForumHomeComponent;
