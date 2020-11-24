import React from "react";
import PostTripTableComponent from "./PostTripTableComponent";
import WidgetListComponent from "./PostWidgetListComponent";
import {FaCheck} from "react-icons/all";

class PostDetailComponent extends React.Component {
    planHardcode = {
        name: '1',
        id: '1',
        user: {name: 'user1'},
        trips: [{date: '2022-12-1', places: ['Boston', 'NEU', 'Boston University'], order: 1}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2}]
    }

    planHardcode1 = {
        name: '1',
        id: '1',
        user: {name: 'user1'},
        trips: [{date: '2022-12-1', places: ['SF'], order: 1}
            , {date: '2022-12-2', places: ['Yellow Stone'], order: 2}]
    }

    postHardcode = {
        id: '1',
        name: '1',
        user: {name: 'user1'},
        plan: this.planHardcode,
        widgets: []
    }

    state = {
        post: this.postHardcode,
        editing: false
    }

    render() {
        return <div>
            <div className="container">
                {!this.state.editing &&
                 <div>
                     <button className="btn btn-secondary m-1"
                             onClick={() => this.setState({editing: true})}>Edit
                     </button>
                     <PostTripTableComponent trips={this.state.post.plan.trips}/>
                 </div>
                }
                {this.state.editing &&
                 <div>
                     <button className="btn btn-secondary m-1"
                             onClick={() => this.setState({editing: false})}>
                         <FaCheck/></button>
                     <select className="custom-select m-1"
                             onChange={() => this.setState(prevState => ({
                                 post: {
                                     ...prevState.post,
                                     plan: this.planHardcode1,
                                 }
                             }))}>
                         <option value="1">Plan 1</option>
                         <option value="2">Plan 2</option>
                         <option value="3">Plan 3</option>
                     </select>
                 </div>
                }
                <WidgetListComponent/>
            </div>

        </div>
    }
}

const stateToPropertyMapper = (state) => {

}

const propertyToDispatchMapper = (dispatch) => ({
    findWidgetsForPost: (postId) =>
        // widgetService.findWidgetsForTopic(topicId)
        widgets => dispatch({
                                type: "FIND_WIDGETS_FOR_POST",
                                widgets,
                                postId
                            })
})

export default PostDetailComponent;
