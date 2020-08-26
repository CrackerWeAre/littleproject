import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Header from "../Header"
import history from "../../history"
import AirView from '../air/AirView';
import Login from '../login/Login'
import GlobalStyles from "../GlobalStyles";
import '../../style/css/Body.css'
import Main from '../main/Main';
import UserPage from '../user/UserPage';
import {isMobile} from 'react-device-detect';
import Drawer from '../drawer/Drawer'
import DrawerShort from '../drawer/DrawerShort'
import {connect} from 'react-redux'
import ResultPage from '../result/ResultPage'
import FollowingMain from '../main/FollowingMain';
import CategoryMain from '../main/CategoryMain';
import SearchMain from '../main/SearchMain';
import SchedulePage from '../schedule/SchedulePage';
import {setPlaceLog, postPlaceLog} from "../../actions/log";
import MainSurvey from '../surveys/MainSurvey';
import { SurveyCategory } from '../surveys/SurveyCategory';
import { SurveyLive } from '../surveys/SurveyLive';


function SignRouter(props) {



  return (
    <Fragment>
        
         
              <Switch>
                    <Route path="/survey" exact component = {MainSurvey}></Route>
                    <Route path={`${props.match.path}/category`}  component = {SurveyCategory}></Route>
                    <Route path={`${props.match.path}/live`} component = {SurveyLive}></Route>
              </Switch>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return { 
      user: state.auth,
      drawerVal : state.maintheme.drawer,
      darkmode: state.maintheme.darkmode,
      logs: state.logs
    }
}

export default connect(mapStateToProps,{setPlaceLog,postPlaceLog})(SignRouter);

