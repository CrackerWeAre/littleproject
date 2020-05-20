import React, { Fragment } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage"
import AirList from "./air/AirList"
import Header from "./Header"
import history from "../history"
import AirView from './air/AirView';
import Admin from './admins/Admin'
import AdminEdit from './admins/AdminEdit';
import AdminCreate from './admins/AdminCreate';
import AdminDelete from './admins/AdminDelete';
import Login from './login/Login'

import GlobalStyles from "./GlobalStyles";
import '../style/Body.css'

function App() {
  return (
    <Fragment>
        <Router history={history} >
          <Header></Header>
            <div className="mainBody">
              <Switch>
                  <Route path="/" exact component = {AirList}></Route>
                  <Route path="/air" exact component={AirList}></Route>
                  <Route path="/login" exact component={Login}></Route>
                  <Route path="/air/show/:_id" exact component={AirView}></Route>
                  <Route path="/admin" exact component={Admin}></Route>
                  <Route path="/admin/new" exact component={AdminCreate}></Route>
                  <Route path="/admin/edit/:_id" exact component={AdminEdit}></Route>
                  <Route path="/admin/delete/:_id" exact component={AdminDelete}></Route>
              </Switch>
            </div>
      </Router>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

export default App;
