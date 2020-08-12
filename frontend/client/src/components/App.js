import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header"
import history from "../history"
import AirView from './air/AirView';
import GlobalStyles from "./GlobalStyles";
import '../style/css/Body.css'
import {isMobile} from 'react-device-detect';
import {connect} from 'react-redux'
import MainRouter from '../components/router/MainRouter'
import AdminRouter from './router/AdminRouter';
import MypageRouter from './router/MypageRouter';
import SignRouter from './router/SignRouter';

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
                  <Route path="/mypage"  component={MypageRouter}></Route>
                  <Route path="/admin" component = {AdminRouter}></Route>
                  <Route path="/sign" component = {SignRouter}></Route>
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

