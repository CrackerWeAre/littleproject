import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, } from '../../actions'
import { resignIn } from '../../actions/user'
import RecoAir from '../air/recommend/RecoAir';


const RecommendMain = (props) => {
    
    useEffect(() => {
        props.fetchAirs();
        
        if(props.user.userInfo !== undefined || props.user.userInfo !== null ){
            console.log(props.user.userInfo !== null)
            // props.fetchFollowingAirs(props.user.userInfo.email);
            // props.fetchBlockedAirs(props.user.userInfo.email);
            // props.resignIn(props.user.userInfo)
        }
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [props.match])

    return(
        
        <Fragment>  

            <RecoAir></RecoAir>
        
        </Fragment>
    )
}



const mapStateToProps = (state) => {
    return {
      
        user: state.auth,
       
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs, resignIn })(RecommendMain);