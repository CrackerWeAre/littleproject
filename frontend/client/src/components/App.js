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
import SurveyRouter from './router/SurveyRouter';
import { placeholder } from '@babel/types';

function App(props) {

  const [classDrawerName, setDrawerclassName] = useState('initialState')
  const [classModeName, setModeclassName] = useState('initialState')
  
  useEffect(() => {
    !isMobile&&!props.drawerVal ? setDrawerclassName('mainBody_drawer_off') : setDrawerclassName('mainBody_drawer_on')
    
  }, [props.drawerVal])

  useEffect(() => {
    props.darkmode ? setModeclassName(" darkbody") : setModeclassName("")
    
  }, [props.darkmode])

  useEffect(() => {
    cookieProcess()
    residenceCookieProcess(history.location.pathname)
  },[props.path])

  const cookieProcess = () => {
    const setCookie = (name, value, exp) => {
        var date = new Date();
        date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/;SameSite=none;Secure=mkoa.sparker.kr';
    };
    
    const getCookie = (name) => {
        var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value ? value[2] : null;
    };
    
    const deleteCookie = (name) =>  {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    
    const uidCreate = () => {
        var _id1 = parseInt(Math.random() * 10000000000);
        var _id2 = parseInt(new Date().getTime() / 1000)
        return _id1 + '.' + _id2;
    };

    // uid 체크 (Piclick User ID)
    var uid = getCookie('mkoaUID');
    if (uid === null || uid.length !== 21) uid = uidCreate();
    
    var todayCheckCookie = getCookie('todayCookie');
    if (todayCheckCookie == null) todayCheckCookie = 'None';
    
    // 만료날짜 갱신
    setCookie('mkoaUID',uid, 365);
}

  const residenceCookieProcess = (location) => {

    //현 주소 등록 시간 설정하기
    const setCookie = (path) => {
      var date = new Date();
      var registerTime = date.getTime()
      date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      document.cookie =  'path = ' + path + ';expries' + date.toUTCString() + ';path=/;SameSite=none;Secure=mkoa.sparker.kr';
      document.cookie =  'registerTime = ' + registerTime + ';expries' + date.toUTCString() + ';path=/;SameSite=none;Secure=mkoa.sparker.kr';
    }

    //주소 등록 시간 불러오기
    const getCookie = (name) => {
      var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      console.log(value)
    }

    //주소가 다를시 시간 계산해서 보내주기
    const calcCookie = () => {
      var date = new Date()
      var nowTime = date.getTime();
      var registerTime = document.cookie.math('(^|;) ?' + "registerTime" + '=([^;]*)(;|$)');
      var calcTime = nowTime-registerTime
      return calcTime;
    }

    //주소 체크
    var place = getCookie('path');
    if( place === null || place === undefined) {
      console.log(location)
      setCookie(location);
    }else {
      console.log(place, calcCookie());
      console.log(getCookie('mkoaUID'))
      setCookie(location)
    }

  }

  return (
    <Fragment>
        <Router history={history} >
              <Switch>
                  <Route path="/" exact component = {MainRouter}></Route>
                  <Route path="/main" component = {MainRouter}></Route>
                  <Route path="/mypage"  component={MypageRouter}></Route>
                  <Route path="/admin" component = {AdminRouter}></Route>
                  <Route path="/sign" component = {SignRouter}></Route>
                  <Route path="/survey" component = {SurveyRouter}></Route>
              </Switch>
      </Router>
      <GlobalStyles></GlobalStyles>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return { 
      drawerVal : state.maintheme.drawer,
      darkmode: state.maintheme.darkmode,
      path: history.location
    }
}

export default connect(mapStateToProps)(App);

