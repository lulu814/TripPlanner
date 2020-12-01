import React, {Component} from "react";
import {Link} from "react-router-dom";
import {signIn} from "../../services/UserService";
import {message} from 'antd';
import {getCurrUser} from "../../services/UserService";
import axios from "axios";
const API_ROOT = "http://localhost:8000"


export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();
        axios.post(`${API_ROOT}/signin`, {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            }).then((data) => {
            console.log(data);
            message.success('Login succeed!');
            this.props.history.push("/profile");
        })
            .catch((err) => {
                console.error(err);
                message.error('Login failed.');
            });
    }

    render() {
        return (
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
                            <Link to={"/signup"} className="col-6 register"> register </Link>
                            <a href="#" className="col-6 forgot-password pull-right">Forgot password?</a>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
