import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "@reach/combobox/styles.css";
import HeaderComponent from "./components/Homepage/HeaderComponent";

import { Container} from "react-bootstrap";
import Login from "./components/User/LoginComponent";
import SignUp from "./components/User/SignUpComponent";
import UserProfile from "./components/User/AccountComponent";
import PublicProfile from "./components/User/PublicProfileComponent";
import TripPlanHomeComponent from "./components/TripPlan/TripPlanHomeComponent";
import TripPlanDetailComponent from "./components/TripPlan/TripPlanDetailComponent";
import HomepageView from "./components/Homepage/HomepageViewComponent";
import DetailPageView from "./components/DetailPage/DetailPageView";
import PlanForumDetailComponent from "./components/PlanForums/PlanForumDetailComponent";
import PlanForumHomeComponent from "./components/PlanForums/PlanForumHomeComponent";
import TripPlanErrorComponent from "./components/TripPlan/TripPlanErrorComponent";


export default function App() {

  const [login, setLogin] = useState(localStorage.getItem('accessToken')?true:false);
  const changeLoginStatus = (status) => setLogin(status);

  return (
      <Router>
        <Container><HeaderComponent isLogin={login} changeLoginStatus={changeLoginStatus}/></Container>
          <Switch>
            <Route exact path={['/', '/search', '/search/:searchText']} component={HomepageView} />
            <Route path={["/results/:placeId"]} exact component={DetailPageView}/>
            <Route path="/signin" exact>
              <Login changeLoginStatus={changeLoginStatus} />
            </Route>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/public-profile" exact component={PublicProfile} />
            <Route path="/public-profile/:uid" exact component={PublicProfile} />
            <Route path={["/user/:uid/plans"]} exact component={TripPlanHomeComponent}/>
            <Route path={["/user/:uid/plans/:planId"]} exact component={TripPlanDetailComponent}/>
            <Route path={["/plan-error"]} exact component={TripPlanErrorComponent}/>
            <Route path={["/plan-forum"]} exact component={PlanForumHomeComponent}/>
            <Route path={["/plan-forum/:planId"]} exact component={PlanForumDetailComponent}/>
          </Switch>
      </Router>
  );
}

