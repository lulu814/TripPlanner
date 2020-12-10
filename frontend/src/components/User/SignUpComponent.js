import React, { Component } from "react";
import {Link} from "react-router-dom";
import {register} from "../../services/UserService";
import {message} from 'antd';

export default class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        role: 'Traveler'
    }

    handleClick = (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role

        }
        register(newUser).then(response => {
            console.log(response);
            if (response.ok) {
                return response.text();
            }
            throw new Error(response.statusText);
        }).then((data) => {
            console.log(data);
            message.success('Registration succeed!');
            this.props.history.push('/signin');
        })
            .catch((err) => {
                console.error(err);
                message.error('Registration failed.');
            });
    }


    render() {
        return (
            <div className="container">
                <div className="outer">
                    <div className="inner">
                        <form>
                            <h3>Register</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Username"
                                       onChange={e => this.setState({username: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"
                                       className="form-control"
                                       placeholder="Enter email"
                                       onChange={e => this.setState({email: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password"
                                       className="form-control"
                                       placeholder="Enter password"
                                       onChange={e => this.setState({password: e.target.value})}
                                />
                            </div>
                            <span className="form-group">
                    <label>
                       Register as
                    </label>
                    <select className="form-control-sm user-role float-right"
                            onChange={e => this.setState({role: e.target.value})}
                            value={this.state.role}
                    >
                    <option value="Traveler">Traveler</option>
                    <option value="Admin">Admin</option>
                </select>
                </span>


                            <button className="btn btn-dark btn-lg btn-block"
                                    onClick={e => this.handleClick(e)}
                            >Register
                            </button>
                            <p className="forgot-password text-right">
                                Already registered, go back to <Link to={"/signin"}> log in </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
