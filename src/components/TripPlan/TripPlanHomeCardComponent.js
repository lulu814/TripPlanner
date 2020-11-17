import React, {Component} from "react";
import {Link} from "react-router-dom";

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
                     <Link to={`trips/${this.state.plan.id}`}>{this.state.plan.name}
                     </Link>
                    }
                    <div className="mt-auto">
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.setState({planBeingEdited: true})}
                             className="btn btn-success m-2">
                             Edit
                         </button>
                        }
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.deleteCourse(this.state.plan)}
                             className="btn btn-primary m-2">
                             Delete
                         </button>
                        }
                        {this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.editCourse(this.state.plan.id,
                                                                  this.state.plan)
                                 .then(this.setState({
                                                         planBeingEdited: false
                                                     }))}
                             className="btn btn-success m-2">
                             <i className="fa fa-lg fa-check"/>
                         </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    }
}

export default TripPlanHomeCardComponent;

