import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, } from '../../actions'
import { resignIn } from '../../actions/user'


const FollowingMain = (props) => {
    
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

            <AirList data={props.match} ></AirList>
        
        </Fragment>
    )
}



const mapStateToProps = (state) => {
    return {
      
        user: state.auth,
       
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs, resignIn })(FollowingMain);