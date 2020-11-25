import React, {Component} from "react";
import {Link} from "react-router-dom";
import post2 from "../../assets/post2.jpg";
import {FaCheck} from "react-icons/all";

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
                     <h5 className="card-title">{this.state.post.name}</h5>
                    }
                    <img width="100%"
                         src={post2}
                         alt=""/>
                    <div className="row mt-2">
                        {!this.state.postBeingEdited &&
                         <Link
                             to={`posts/${this.state.post.id}`}
                             className="btn btn-light col-lg-4 mx-1 my-1">
                             Detail
                         </Link>
                        }
                        {!this.state.postBeingEdited &&
                         <button
                             onClick={() => this.setState({postBeingEdited: true})}
                             className="btn btn-light col-lg-3 m-1 my-1">
                             Edit
                         </button>
                        }
                        {!this.state.postBeingEdited &&
                         <button
                             onClick={() => this.props.deletePost(this.state.post)}
                             className="btn btn-light col-lg-4 ml-1 my-1">
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

export default PostHomeCardComponent;

