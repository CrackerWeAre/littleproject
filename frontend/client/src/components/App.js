import React, { Fragment } from 'react'
import { Router, Route, Switch } from "react-router-dom";

import AirList from "./air/AirList"
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
import '../style/Body.css'
import Drawer from './drawer/Drawer';
import Main from './main/Main';

function App() {
  return (
    <Fragment>
        <Router history={history} >
          <Header></Header>
              <Switch>
                  <Route path="/" exact component = {Main}></Route>
                  <Route path="/login" exact component={Login}></Route>
                  <Route path="/air/show/:_id" exact component={AirView}></Route>
                  <Route path="/admin" exact component={Admin}></Route>
                  <Route path="/admin/new" exact component={AdminCreate}></Route>
                  <Route path="/admin/edit/:_id" exact component={AdminEdit}></Route>
                  <Route path="/admin/delete/:_id" exact component={AdminDelete}></Route>
              </Switch>
          <Navigation></Navigation>
      </Router>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

export default App;
