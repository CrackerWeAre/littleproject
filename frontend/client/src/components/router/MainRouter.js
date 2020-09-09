import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Header from "../Header"
import history from "../../history"
import AirView from '../air/AirView';
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


function MainRouter(props) {



  const [classDrawerName, setDrawerclassName] = useState('initialState')
  const [classModeName, setModeclassName] = useState('initialState')
  
  useEffect(() => {
    !isMobile&&!props.drawerVal ? setDrawerclassName('mainBody_drawer_off') : setDrawerclassName('mainBody_drawer_on')
    console.log(props)
  }, [props.drawerVal])

  useEffect(() => {
    props.darkmode ? setModeclassName(" darkbody") : setModeclassName("")
    
  }, [props.darkmode])


  const setLocationLog = () => {
    if(props.logs.pathname!==document.location.pathname){
      if(props.user.userEmail){
        if(props.logs.residencetime!==0){
          props.postPlaceLog(props.user.userEmail, props.logs.pathname, document.location.pathname, props.logs.residencetime)
        }else {
          props.setPlaceLog(props.user.userEmail, document.location.pathname)
        }
      }else {
        const getCookie = (name) => {
            var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
            return value ? value[2] : null;
        };
        var uid = getCookie('mkoaUID');
        if(props.logs.residencetime!==0){
          props.postPlaceLog(uid, props.logs.pathname, document.location.pathname, props.logs.residencetime)
        }else {
          props.setPlaceLog(uid, document.location.pathname)
        }
      }
    }
  }
  return (
    <Fragment>
          <Header></Header>
          {!isMobile&&props.drawerVal&&<Drawer></Drawer>}
          {!isMobile&&!props.drawerVal&&<DrawerShort></DrawerShort>}
          {setLocationLog()}
          <div className={classDrawerName+classModeName}>
              <Switch>
                    <Route path="/" exact component = {Main}></Route>
                    <Route path="/main" exact component = {Main}></Route>
                    <Route path={`${props.match.path}/following`}  component = {FollowingMain}></Route>
                    <Route path={`${props.match.path}/directory/:_id`} component = {CategoryMain}></Route>
                    <Route path={`${props.match.path}/search/:_id`} component = {SearchMain}></Route>
                    <Route path={`${props.match.path}/result/:_id`} exact component={ResultPage}></Route>
                    <Route path={`${props.match.path}/air/show/:_id`} exact component={AirView}></Route>
                    <Route path={`${props.match.path}/schedule`}  component={SchedulePage}></Route>
              </Switch>
              </div>
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

export default connect(mapStateToProps,{setPlaceLog,postPlaceLog})(MainRouter);

