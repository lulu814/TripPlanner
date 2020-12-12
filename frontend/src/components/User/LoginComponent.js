import React, {Component} from "react";
import {Link} from "react-router-dom";
import {message} from 'antd';
import axios from "axios";
import { withRouter } from 'react-router-dom';


class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post(`/signin`, {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                }
                return response.data;
            }).then((data) => {
            message.success('Login succeed!');
            this.props.history.push('/');
            this.props.changeLoginStatus(true);
        })
            .catch((err) => {
                message.error('Login failed.');
            });
    }

    render() {
        return (
            <div className="container">
                <div className="outer">
                    <div className="inner">
                        <form>
                            <h3>Log in</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder="Enter username"
                                       onChange={e => this.setState({username: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password"
                                       onChange={e => this.setState({password: e.target.value})}
                                />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button className="btn btn-dark btn-lg btn-block"
                                    onClick={(e) => this.handleSubmit(e)}
                            >Sign in
                            </button>
                            <div className="row">
                                <Link to={"/signup"} className="col-6 register"> Register </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
