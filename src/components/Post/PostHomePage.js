import React from "react";
import PostHomeCardComponent from "./PostHomeCardComponent";

class PostHomePage extends React.Component {
    plan1Hardcode = {
        name: '1',
        id: '1',
        user: {name: 'user1'},
        trips: [{date: '2022-12-1', places: ['Boston'], order: 1}
            , {date: '2022-12-2', places: ['Cambridge'], order: 2}]
    }

    postHardcode = [{
        name: '1',
        id: '1',
        user: {name: 'user1'},
        plan: {},
        widgets: []
    }]

    state = {
        posts: this.postHardcode,
    }

    createNewPost = () => {
        this.setState(prevState => ({
            posts: [...prevState.posts, {
                name: 'new post',
                id: '3',
                user: {
                    name: 'user1'
                }
            }]
        }))
    }

    render() {
        return <div className="container-fluid">
            <h1 className="text-center m-2">Post</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card p-0 m-2 mx-3 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Create a new post</h5>
                            <div className="mt-auto">
                                <button onClick={() => this.createNewPost()} className="btn btn-primary mt-1">
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.posts &&
                 this.state.posts.map(post => <PostHomeCardComponent key={post.id} post={post}/>)}
            </div>
        </div>
    }
}

export default PostHomePage;
