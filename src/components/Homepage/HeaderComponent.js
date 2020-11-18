import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPencilAlt,
    faCalendarPlus,
    faUser
} from '@fortawesome/free-solid-svg-icons'
import { FaForumbee } from 'react-icons/fa';

export default function HeaderComponent(){
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <FaForumbee />
                Trip Planner
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <div className="blank-header"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <Nav className="mr-auto">
                        <Nav.Link href="/signup">Register</Nav.Link>
                        <Nav.Link href="/signin">Login</Nav.Link>
                        <Nav.Link href="/profile"><FontAwesomeIcon icon={faUser}/></Nav.Link>
                    </Nav>

                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
