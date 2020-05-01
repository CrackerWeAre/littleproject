import React from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage"
import AirList from "./air/AirList"
import Header from "./Header"
import history from "../history"
import AirView from './air/AirView';

function App() {
  return (
    <div className="ui container">
      <Router history={history} >
          <div>
          <Header></Header>
            <Switch>
                <Route path="/" exact component = {Homepage}></Route>
                <Route path="/air" exact component={AirList}></Route>
                <Route path="/air/show/:id" exact component={AirView}></Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
