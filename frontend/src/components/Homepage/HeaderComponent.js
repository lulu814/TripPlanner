import React from "react";
import {Form, Nav, Navbar} from "react-bootstrap";
import { FaForumbee, FaUserCircle } from 'react-icons/fa';
import { useHistory } from "react-router-dom";

export default function HeaderComponent({isLogin, changeLoginStatus}){
    const history = useHistory();
    return (
        <Navbar expand="lg">
            <a>
                <Navbar.Brand onClick={e => history.push('/')}>
                    <FaForumbee />
                    Trip Planner
                </Navbar.Brand>
            </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <div className="blank-header"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Nav className="mr-auto">
                        {!isLogin && <Nav.Link onClick={e => history.push('/signin')}>Login</Nav.Link>}
                        <Nav.Link onClick={e => history.push('/profile')}><FaUserCircle /></Nav.Link>
                        {isLogin && <Nav.Link onClick={() => {
                            localStorage.clear();
                            changeLoginStatus(false);
                            history.push('/');
                        }}>Logout</Nav.Link>}
                    </Nav>
                </Form>
            </Navbar.Collapse>
        </Navbar>

    )
}
