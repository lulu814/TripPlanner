import React, { Component } from "react";
import {Link} from "react-router-dom";
import {createUser} from "../services/UserService";
import {message} from 'antd';

export default class SignUp extends Component {
    state = {
        fName: '',
        lName: '',
        email: '',
        password: ''
    }

    handleClick = (e) => {
        e.preventDefault();
        const newUser = {
            firstName: this.state.fName,
            lastName: this.state.lName,
            email: this.state.email,
            password: this.state.password
        }
        createUser(newUser).then(response => {
            console.log(response);
            if (response.ok) {
                return response.text();
            }
            throw new Error(response.statusText);
        }).then((data) => {
            console.log(data);
            message.success('Registration succeed!');
            this.props.history.push('/sign-in');
        })
            .catch((err) => {
                console.error(err);
                message.error('Registration failed.');
            });
    }


    render() {
        return (
            <div className="outer">
            <div className="inner">
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text"
                           className="form-control"
                           placeholder="First name"
                           onChange={e => this.setState({fName: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Last name"
                           onChange={e => this.setState({lName: e.target.value})}
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

                <button className="btn btn-dark btn-lg btn-block"
                        onClick={e => this.handleClick(e)}
                >Register</button>
                <p className="forgot-password text-right">
                    Already registered, go back to <Link to={"/sign-in"} > log in </Link>
                </p>
            </form>
    </div>
    </div>
        );
    }
}
