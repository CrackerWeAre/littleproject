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
import '../style/css/Body.css'
import Main from './main/Main';
import UserPage from './user/UserPage';
import {isMobile} from 'react-device-detect';
import Drawer from './drawer/Drawer'
import DrawerShort from './drawer/DrawerShort'
import {connect} from 'react-redux'
import ResultPage from './result/ResultPage'

const trackingId = "UA-168638309-1"
ReactGA.initialize(trackingId, { debug: true });



history.listen((location) => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
)

function App(props) {


  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  const [classDrawerName, setDrawerclassName] = useState('initialState')
  const [classModeName, setModeclassName] = useState('initialState')
  
  useEffect(() => {
    !isMobile&&!props.drawerVal ? setDrawerclassName('mainBody_drawer_off') : setDrawerclassName('mainBody_drawer_on')
    
  }, [props.drawerVal])

  useEffect(() => {
    props.darkmode ? setModeclassName(" darkbody") : setModeclassName("")
    
  }, [props.darkmode])


  return (
    <Fragment>
        <Router history={history} >
          <Header></Header>
          {!isMobile&&props.drawerVal&&<Drawer></Drawer>}
          {!isMobile&&!props.drawerVal&&<DrawerShort></DrawerShort>}
          <div className={classDrawerName+classModeName}>
              
          
              <Switch>
                  <Route path="/" exact component = {Main}></Route>
                  <Route path="/following" exact component = {Main}></Route>
                  <Route path="/mypage" exact component = {UserPage}></Route>
                  <Route path="/directory/:_id" component = {Main}></Route>
                  <Route path="/search/:_id" component = {Main}></Route>
                  <Route path="/login" exact component={Login}></Route>
                  <Route path="/result/:_id" exact component={ResultPage}></Route>
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
  return { 
    drawerVal : state.maintheme.drawer,
    darkmode: state.maintheme.darkmode
    }
}

export default connect(mapStateToProps)(App);

