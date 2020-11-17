import React, {Component} from "react";
import {Link} from "react-router-dom";

class PostHomeCardComponent extends Component {
    state = {
        postBeingEdited: false,
        post: this.props.post
    }

    render() {
        return <div className="col-sm-4">
            <div className={"card text-center p-0 m-2 mx-3"}>
                <div className="card-body">
                    {this.state.postBeingEdited &&
                     <input
                         className="form-control"
                         value={this.state.post.name} onChange={(e) => {
                         const newTitle = e.target.value;
                         this.setState(prevState => ({
                             post: {
                                 ...prevState.post,
                                 name: newTitle,
                             }
                         }))
                     }
                     }/>
                    }
                    {!this.state.postBeingEdited &&
                     <Link to={`posts/${this.state.post.id}`}>{this.state.post.name}
                     </Link>
                    }
                    <div className="mt-auto">
                        {!this.state.postBeingEdited &&
                         <button
                             onClick={() => this.setState({postBeingEdited: true})}
                             className="btn btn-success m-2">
                             Edit
                         </button>
                        }
                        {!this.state.postBeingEdited &&
                         <button
                             onClick={() => this.props.deletePost(this.state.post)}
                             className="btn btn-primary m-2">
                             Delete
                         </button>
                        }
                        {this.state.postBeingEdited &&
                         <button
                             onClick={() => this.props.editPost(this.state.plan.id,
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

export default PostHomeCardComponent;

