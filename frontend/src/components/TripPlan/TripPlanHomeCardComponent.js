import React, {Component} from "react";
import {Link} from "react-router-dom";
import post2 from "../../assets/post2.jpg";
import {FaCheck} from "react-icons/all";

class TripPlanHomeCardComponent extends Component {
    state = {
        planBeingEdited: false,
        plan: this.props.plan
    }

    render() {
        return <div className="col-sm-4">
            <div className={"card text-center p-0 m-2 mx-3"}>
                <div className="card-body">
                    {this.state.planBeingEdited &&
                     <input
                         className="form-control"
                         value={this.state.plan.name} onChange={(e) => {
                         const newTitle = e.target.value;
                         this.setState(prevState => ({
                             plan: {
                                 ...prevState.plan,
                                 name: newTitle,
                             }
                         }))
                     }
                     }/>
                    }
                    {!this.state.planBeingEdited &&
                     <h5 className="card-title">{this.state.plan.name}</h5>
                    }
                    <img width="100%"
                         src={post2}
                         alt=""/>
                    <div className="row mt-2">
                        {!this.state.planBeingEdited &&
                         <Link
                             to={`plans/${this.state.plan._id}`}
                             className="btn btn-light col-lg-4 mx-1 my-1">
                             Detail
                         </Link>
                        }
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.setState({planBeingEdited: true})}
                             className="btn btn-light col-lg-3 m-1 my-1">
                             Edit
                         </button>
                        }
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.deletePlan(this.state.plan._id)}
                             className="btn btn-light col-lg-4 ml-1 my-1">
                             Delete
                         </button>
                        }
                        {this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.updatePlan(this.state.plan._id,
                                                                  this.state.plan)
                                 .then(this.setState({
                                                         planBeingEdited: false
                                                     }))}
                             className="btn btn-light btn-block m-2">
                             <FaCheck size={28}/>
                         </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default TripPlanHomeCardComponent;

