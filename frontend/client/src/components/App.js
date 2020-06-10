import React, { Fragment, useEffect } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import Header from "./Header"
import history from "../history"
import AirView from './air/AirView';
import Admin from './admins/Admin'
import AdminEdit from './admins/AdminEdit';
import AdminCreate from './admins/AdminCreate';
import AdminDelete from './admins/AdminDelete';
import Login from './login/Login'
import Navigation from './navigation/Navigation'
import GlobalStyles from "./GlobalStyles";
import SearchMain from './main/SearchMain'
import '../style/Body.css'
import Main from './main/Main';
import FollowingMain from './main/FollowingMain';

const trackingId = "UA-168638309-1"
ReactGA.initialize(trackingId, { debug: true });



history.listen((location) => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
)

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    
  }, [])

  return (
    <Fragment>
        <Router history={history} >
          <Header></Header>
              <Switch>
                  <Route path="/" exact component = {Main}></Route>
                  <Route path="/following" exact component = {FollowingMain}></Route>
                  <Route path="/directory/:_id" component = {Main}></Route>
                  <Route path="/search/:_id" component = {SearchMain}></Route>
                  <Route path="/login" exact component={Login}></Route>
                  <Route path="/air/show/:_id" exact component={AirView}></Route>
                  <Route path="/admin" exact component={Admin}></Route>
                  <Route path="/admin/new" exact component={AdminCreate}></Route>
                  <Route path="/admin/edit/:_id" exact component={AdminEdit}></Route>
                  <Route path="/admin/delete/:_id" exact component={AdminDelete}></Route>
              </Switch>
      </Router>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

export default App;
