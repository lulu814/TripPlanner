import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "@reach/combobox/styles.css";


import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import Login from "./components/LoginComponent";
import SignUp from "./components/SignUpComponent";
import UserProfile from "./components/AccountComponent";
import PublicProfile from "./components/PublicProfileComponent";


export default function App() {


  return (
      <Router>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Trip Planner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

            <Switch>
              <Route exact path='/' component={Login} />
              <Route path="/sign-in" exact component={Login} />
              <Route path="/sign-up" exact component={SignUp} />
              <Route path="/profile" exact component={UserProfile} />
              <Route path="/public-profile" exact component={PublicProfile} />
            </Switch>

      </Container>
      </Router>
  );
}

