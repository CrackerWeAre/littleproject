import React, { Fragment, useEffect, useState } from 'react'
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
import GlobalStyles from "./GlobalStyles";
import SearchMain from './main/SearchMain'
import '../style/css/Body.css'
import Main from './main/Main';
import FollowingMain from './main/FollowingMain';
import UserPage from './user/UserPage';
import {isMobile} from 'react-device-detect';
import Drawer from './drawer/Drawer'
import {connect} from 'react-redux'

const trackingId = "UA-168638309-1"
ReactGA.initialize(trackingId, { debug: true });



history.listen((location) => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
)

function App(props) {

  const [className, setclassName] = useState('initialState')
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    !isMobile&&!props.drawerVal ? setclassName('mainBody_drawer_off') : setclassName('mainBody_drawer_on')
    
  }, [props.drawerVal])

  return (
    <Fragment>
        <Router history={history} >
          <Header></Header>
          {!isMobile&&props.drawerVal&&<Drawer></Drawer>}
          <div className={className}>
              
          
              <Switch>
                  <Route path="/" exact component = {Main}></Route>
                  <Route path="/following" exact component = {FollowingMain}></Route>
                  <Route path="/mypage" exact component = {UserPage}></Route>
                  <Route path="/directory/:_id" component = {Main}></Route>
                  <Route path="/search/:_id" component = {SearchMain}></Route>
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

const mapStateToProps = (state) => {
  return { drawerVal : state.maintheme.drawer }
}

export default connect(mapStateToProps)(App);

