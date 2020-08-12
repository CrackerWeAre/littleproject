import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Header from "../Header"
import GlobalStyles from "../GlobalStyles";
import '../../style/css/Body.css'
import {isMobile} from 'react-device-detect';
import {connect} from 'react-redux'
import FollowingMain from '../admins/Following/FollowingMain';

import {setPlaceLog, postPlaceLog} from "../../actions/log";
import AdminMain from '../admins/AdminMain';
import BlockingMain from '../admins/Blocking/BlockingMain';
import SettingMain from '../admins/Setting/SettingMain';
import AdminDrawer from '../admins/Drawer/AdminDrawer';
import '../../style/css/MyPage.css'
import TagMain from '../admins/Tag/TagMain';

function MypageRouter(props) {



  const [classDrawerName, setDrawerclassName] = useState('initialState')
  const [classModeName, setModeclassName] = useState('initialState')
  
  useEffect(() => {
    !isMobile&&!props.drawerVal ? setDrawerclassName('mainBody_drawer_off') : setDrawerclassName('myPageBody_drawer_on')
    console.log(props)
  }, [props.drawerVal])

  useEffect(() => {
    props.darkmode ? setModeclassName(" darkbody") : setModeclassName("")
    
  }, [props.darkmode])


  return (
    <Fragment>
          <Header></Header>
          <AdminDrawer></AdminDrawer>
          <div className={classDrawerName+classModeName}>
            <div className="mainPage">
            
              <Switch>
                    <Route path="/mypage" exact component = {AdminMain}></Route>
                    <Route path={`${props.match.path}/following`}  component = {FollowingMain}></Route>
                    <Route path={`${props.match.path}/blocking`}  component = {BlockingMain}></Route>
                    <Route path={`${props.match.path}/settings`} component = {SettingMain}></Route>
                    <Route path={`${props.match.path}/tags`} component = {TagMain}></Route>
                    
                    
              </Switch>
              </div>
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

export default connect(mapStateToProps,{setPlaceLog,postPlaceLog})(MypageRouter);

