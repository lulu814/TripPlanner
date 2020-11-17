import React from "react";
import TripPlanHomeCardComponent from "./TripPlanHomeCardComponent";

class TripPlanHomeComponent extends React.Component {
    plansHardcode = [{
        name: '1',
        id: '1',
        user: {name: 'user1'},
        trips: [{date: '2022-12-1', places: ['Boston'], order: 1}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2}]
    }, {
        name: '2',
        id: '2',
        user: {name: 'user1'},
        trips: [{date: '2022-12-1', places: ['Boston'], order: 1}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2}]
    }]

    state = {
        plans: this.plansHardcode,
    }

    createNewTrip = () => {
        this.setState(prevState => ({
            plans: [...prevState.plans, {
                name: 'new plan',
                id: '3',
                user: {
                    name: 'user1'
                }
            }]
        }))
    }

    render() {
        return <div className="container-fluid">
            <h1 className="text-center m-2">Trip Plans</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card p-0 m-2 mx-3 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Create a new trip</h5>
                            <div className="mt-auto">
                            <button onClick={() => this.createNewTrip()} className="btn btn-primary mt-1">
                                Create
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.plans &&
                 this.state.plans.map(plan => <TripPlanHomeCardComponent key={plan.id} plan={plan}/>)}
            </div>
        </div>
    }
}

export default TripPlanHomeComponent;
