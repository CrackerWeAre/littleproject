import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
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
import FollowingMain from './main/FollowingMain';
import CategoryMain from './main/CategoryMain';
import SearchMain from './main/SearchMain';
import SchedulePage from './schedule/SchedulePage';
import MainRouter from '../components/router/MainRouter'

function App(props) {



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
              <Switch>
                  <Route path="/" exact component = {MainRouter}></Route>
                  <Route path="/main" component = {MainRouter}></Route>
                  <Route path="/admin"  component={Admin}></Route>
                  <Route path="/admin/new" exact component={AdminCreate}></Route>
                  <Route path="/admin/edit/:_id" exact component={AdminEdit}></Route>
                  <Route path="/admin/delete/:_id" exact component={AdminDelete}></Route>
                  
              </Switch>
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

