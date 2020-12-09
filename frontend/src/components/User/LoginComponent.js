import React, {Component} from "react";
import {Link} from "react-router-dom";
import {message} from 'antd';
import axios from "axios";
import { withRouter } from 'react-router-dom';


class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post(`/signin`, {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                if (response.data.accessToken) {
                    console.log(response.data);
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
                }
                return response.data;
            }).then((data) => {
            console.log(data);
            message.success('Login succeed!');
            this.props.history.push('/');
            this.props.changeLoginStatus(true);
        })
            .catch((err) => {
                console.error(err);
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
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email"
                                       onChange={e => this.setState({email: e.target.value})}
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
