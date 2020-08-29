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
        airs.get(`/cookie/set`)

        if(props.user.userInfo!==undefined){
            props.fetchFollowingAirs(props.user.userInfo.email);
            props.fetchBlockedAirs(props.user.userInfo.email);
            if(props.user.userInfo.token_exp-nowUniTime<86400){
                console.log("resignIn");
                props.resignIn(props.user.userInfo);
            }
        }
    }, [])

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