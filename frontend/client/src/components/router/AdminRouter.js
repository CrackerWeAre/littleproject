import React, { Fragment, useEffect, useState } from 'react'
import { Router, Route, Switch } from "react-router-dom";
import Header from "../Header"
import GlobalStyles from "../GlobalStyles";
import '../../style/css/Body.css'
import {isMobile} from 'react-device-detect';
import Drawer from '../drawer/Drawer'
import DrawerShort from '../drawer/DrawerShort'
import {connect} from 'react-redux'
import {setPlaceLog, postPlaceLog} from "../../actions/log";
import AdminMain from '../admins/Channel/Admin';
import AdminCreate from '../admins/Channel/AdminCreate'
import AdminEdit from '../admins/Channel/AdminEdit'
import AdminDelete from '../admins/Channel/AdminDelete'

function AdminRouter(props) {



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
    
                    <Route path="/admin" exact component={AdminMain}></Route>
                    <Route path={`${props.match.path}/new`}  component = {AdminCreate}></Route>
                    <Route path={`${props.match.path}/edit/:_id`}  component = {AdminEdit}></Route>
                    <Route path={`${props.match.path}/delete/:_id`} component = {AdminDelete}></Route>
                    
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

export default connect(mapStateToProps,{setPlaceLog,postPlaceLog})(AdminRouter);

