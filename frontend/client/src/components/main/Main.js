import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import AirCateList from "../air/AirCateList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, } from '../../actions'
import { resignIn } from '../../actions/user'
const Main = (props) => {

    const [cateOn, setcateOn] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        props.fetchAirs();
        if(props.user.userEmail!==null){
            props.fetchFollowingAirs(props.user.userEmail);
            props.fetchBlockedAirs(props.user.userEmail);
            props.resignIn(props.user.userInfo)
        }
    }, [])
    
    

    useEffect(() => {

        if(props.match.params._id===undefined){
            return setcateOn(false)
        } else {
            return setcateOn(true)
        }
     
    }, [props.match.params._id])

    return(
        
        <Fragment>  
            {!cateOn&&<AirList></AirList>}
            {cateOn&&<AirCateList data={props.match.params._id} ></AirCateList>}
        </Fragment>
    )
}



const mapStateToProps = state =>{
    return {
        myairs: Object.values(state.myairs),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs, resignIn })(Main);