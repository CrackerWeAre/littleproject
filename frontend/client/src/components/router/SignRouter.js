import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Header from "../Header"
import history from "../../history"
import AirView from '../air/AirView';
import Login from '../login/Login'
import SignUp from '../login/SignUp'
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


function SignRouter(props) {



  const [classDrawerName, setDrawerclassName] = useState('initialState')
  const [classModeName, setModeclassName] = useState('initialState')
  
  useEffect(() => {
    !isMobile&&!props.drawerVal ? setDrawerclassName('mainBody_drawer_off') : setDrawerclassName('mainBody_drawer_on')
    console.log(props)
  }, [props.drawerVal])

  useEffect(() => {
    props.darkmode ? setModeclassName(" darkbody") : setModeclassName("")
    
  }, [props.darkmode])


  return (
    <Fragment>
          <Header></Header>
          {!isMobile&&props.drawerVal&&<Drawer></Drawer>}
          {!isMobile&&!props.drawerVal&&<DrawerShort></DrawerShort>}
          <div className={classDrawerName+classModeName}>
              <Switch>
                    <Route path="/sign" exact component = {Main}></Route>
                    <Route path={`${props.match.path}/login`}  component = {Login}></Route>
                    <Route path={`${props.match.path}/signup`} component = {SignUp}></Route>
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

export default connect(mapStateToProps,{setPlaceLog,postPlaceLog})(SignRouter);

