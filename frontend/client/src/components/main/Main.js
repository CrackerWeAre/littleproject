import React, { Fragment, useEffect } from 'react';
import AirList from "../air/AirList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, } from '../../actions'
import { resignIn } from '../../actions/user'
import AirFrame from '../air/AirFrame'
import MainReview from '../reviews/MainReview'
import { MainSurvey } from '../surveys/MainSurvey';
import airs from '../../apis/airs'

const Main = (props) => {
    const nowUniTime = new Date().getTime()/1000
    useEffect(() => {
        props.fetchAirs();
        cookieProcess()

        if(props.user.userInfo!==undefined){
            props.fetchFollowingAirs(props.user.userInfo.email);
            props.fetchBlockedAirs(props.user.userInfo.email);
            if(props.user.userInfo.token_exp-nowUniTime<86400){
                console.log("resignIn");
                props.resignIn(props.user.userInfo);
            }
        }
    }, [])

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

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props.match])


    const liveList = () => {
        return <AirList data={props.match} ></AirList>
    }
    
    return(
        
        <Fragment>  
            <MainReview></MainReview>
            <AirFrame/>
            {liveList()}
        </Fragment>
    )
}



const mapStateToProps = (state) => {
    return {
        user: state.auth,
       
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs, resignIn })(Main);