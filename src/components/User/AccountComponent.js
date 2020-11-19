import React, {Component} from "react";
import image from '../../assets/avatar.jpg';
import {updateProfile} from "../../services/UserService";


export default class UserProfile extends Component {
    state = {
        // fName: this.props.user.fName,
        // lName: this.props.user.lName,
        // email: this.props.user.email,
        // password: this.props.user.email,
        // text: this.props.user.text,
        fName: "John",
        lName: "Smith",
        email: "123@example.com",
        password: "this.props.user.email",
        text: "this.props.user.text",
    }

    handleClick = (e) => {
        e.preventDefault();
        const updateUser = {
            // id: this.props.user.id,
            firstName: this.state.fName,
            lastName: this.state.lName,
            email: this.state.email,
            password: this.state.password,
            text: this.state.text
        }
        updateProfile(updateUser)
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header mb-2">Edit Profile</div>
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
                                        <div className="mt-2">
                                            <button className="btn btn-primary" type="button">
                                                <i className="fa fa-fw fa-camera"/>
                                                <span>Change Photo</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-center text-sm-right">
                                        <span className="badge badge-secondary">traveler</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <div className="active nav-link">Settings</div>
                                </li>
                            </ul>
                            <div className="tab-content pt-3">
                                <div className="tab-pane active">
                                    <form className="form">
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input className="form-control"
                                                                   type="text"
                                                                   onChange={e =>
                                                                       this.setState({fName: e.target.value})}
                                                                   placeholder="John"
                                                                   value="John"/>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input className="form-control" type="text"
                                                                   onChange={e =>
                                                                       this.setState({lName: e.target.value})}
                                                                   placeholder="Smith"
                                                                   value="Smith"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-group">
                                                            <label>Email</label>
                                                            <input className="form-control" type="text"
                                                                   onChange={e =>
                                                                       this.setState({email: e.target.value})}
                                                                   placeholder="user@example.com"
                                                                   value=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col mb-3">
                                                        <div className="form-group">
                                                            <label>About</label>
                                                            <textarea className="form-control" rows="5"
                                                                      placeholder="My Bio"
                                                                      onChange={e =>
                                                                          this.setState({text: e.target.value})}
                                                                      value=""
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mb-2"><b>Change Password</b></div>
                                                <div className="row">
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>Current Password</label>
                                                            <input className="form-control" type="password"
                                                                   placeholder="••••••"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <div className="form-group">
                                                            <label>New Password</label>
                                                            <input className="form-control" type="password"
                                                                   onChange={e =>
                                                                       this.setState({password: e.target.value})}
                                                                   placeholder="••••••"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col d-flex justify-content-end">
                                                <button className="btn btn-primary"
                                                        onClick={e => this.handleClick(e)}
                                                >Save
                                                    Changes
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header mb-2">My Plans</div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Yellow Stone
                            </li>
                            <li className="list-group-item">
                                Seattle
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


