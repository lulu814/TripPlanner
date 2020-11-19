import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/js/all.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "@reach/combobox/styles.css";
import 'font-awesome/css/font-awesome.min.css';
import HeaderComponent from "./components/Homepage/HeaderComponent";

import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import Login from "./components/User/LoginComponent";
import SignUp from "./components/User/SignUpComponent";
import UserProfile from "./components/User/AccountComponent";
import PublicProfile from "./components/User/PublicProfileComponent";
import TripPlanHomeComponent from "./components/TripPlan/TripPlanHomeComponent";
import TripPlanDetailComponent from "./components/TripPlan/TripPlanDetailComponent";
import PostDetailComponent from "./components/Post/PostDetailComponent";
import PostHomePage from "./components/Post/PostHomePage";
import HomepageView from "./components/Homepage/HomepageViewComponent";


export default function App() {


  return (
      <Router>
        <Container><HeaderComponent/></Container>
          <Switch>
            <Route exact path='/' component={HomepageView} />
            <Route path="/signin" exact component={Login} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/public-profile" exact component={PublicProfile} />

            <Route path={["/plans"]} exact component={TripPlanHomeComponent}/>
            <Route path={["/plans/:planId"]} exact component={TripPlanDetailComponent}/>
            <Route path={["/posts/:postId"]} exact component={PostDetailComponent}/>
            <Route path={["/posts"]} exact component={PostHomePage}/>
          </Switch>
      </Router>
  );
}

