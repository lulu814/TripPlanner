import React from "react";
import image from '../assets/avatar.jpg';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';


export default function PublicProfile(user) {
    return (
        <div className="container">
            <div className="card">
                <div className="card-header mb-2">My Space</div>
                <div className="card-body">
                    <div className="e-profile">
                        <div className="row">
                            <div className="col-12 col-sm-auto mb-3">
                                <div className="mx-auto">
                                    <div className="d-flex justify-content-center align-items-center rounded"
                                    >
                                        <img className="rounded-circle"
                                             src={image} alt="name"
                                             width="110"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                <div className="text-center text-sm-left mb-2 mb-sm-0">
                                    <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">John Smith</h4>
                                    <p className="mb-0">about me</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <div className="active nav-link">Posts</div>
                        </li>
                    </ul>
                    <div className="tab-content pt-3">
                        <div className="tab-pane active">
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="card">
                                        <div className="card-body"><h5 className="card-title">Post title</h5></div>
                                        <img width="100%" src={post1} alt=""/>
                                        <div className="card-body">
                                            <p className="card-text">Simple introduction about the post </p>
                                            <a href="#" className="card-link">See post</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="card">
                                        <div className="card-body"><h5 className="card-title">Post title</h5></div>
                                        <img width="100%" src={post2} alt=""/>
                                        <div className="card-body"><p className="card-text">Simple introduction about
                                            the post
                                        </p><a href="#" className="card-link">See post</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="card">
                                        <div className="card-body"><h5 className="card-title">Post title</h5></div>
                                        <img width="100%"
                                             src={post3}
                                             alt=""/>
                                        <div className="card-body"><p className="card-text">Simple introduction about
                                            the post
                                        </p><a href="#" className="card-link">See post</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


