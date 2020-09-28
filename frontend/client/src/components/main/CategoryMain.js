import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, fetchCateAirs } from '../../actions'
import { resignIn } from '../../actions/user'


const CategoryMain = (props) => {
    
    useEffect(() => {
        props.fetchAirs();
        if(props.user.userInfo !== undefined || props.user.userInfo !== null){
            // props.fetchFollowingAirs(props.user.userInfo.email);
            // props.fetchBlockedAirs(props.user.userInfo.email);
            // props.resignIn(props.user.userInfo)
            
        }
        if(props.match.params._id){
            const data = props.match.params._id
            props.fetchCateAirs(data.toUpperCase())
        }
    }, [])


    useEffect(() => {
        window.scrollTo(0, 0)
        if(props.match.params._id){
            const data = props.match.params._id
            props.fetchCateAirs(data.toUpperCase())
        }
    }, [props.match])

    return(
        
        <Fragment>  

            <AirList data={props.match}></AirList>
        
        </Fragment>
    )
}



const mapStateToProps = (state) => {
    return {
        categoryairs: Object.values(state.cateairs).filter(item =>  !state.followings.includes(item._uniq)).filter(item =>  !state.blockairs.includes(item._uniq)),
        user: state.auth,
       
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs, resignIn, fetchCateAirs})(CategoryMain);