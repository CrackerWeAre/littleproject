import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import AirCateList from "../air/AirCateList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, } from '../../actions'
import { resignIn } from '../../actions/user'
import AirSearchList from '../air/AirSearchList'
import AirFollowing from '../air/AirFollowing'


const Main = (props) => {

    const [cateOn, setcateOn] = useState(false)
    const [airOn, setairOn] = useState(false)
    const [searchOn, setsearchOn] = useState(false)
    const [followOn, setfollowOn] = useState(false)

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
        console.log(props.match.path)
        if(props.match.path==='/following'){
            setcateOn(false)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(true)
        }else if(props.match.path.includes('/directory/')){
            setcateOn(true)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(false)
        }else if(props.match.path==='/'){
            setcateOn(false)
            setairOn(true)
            setsearchOn(false)
            setfollowOn(true)
        }else if(props.match.path.includes('/search/')){
            setcateOn(false)
            setairOn(false)
            setsearchOn(true)
            setfollowOn(false)
        }
        
     
    }, [props.match])

    

    return(
        
        <Fragment>  
            {airOn&&<AirList></AirList>}
            {cateOn&&<AirCateList data={props.match.params._id} ></AirCateList>}
            {searchOn&&<AirSearchList id={props.match.params._id}></AirSearchList>}
            {followOn&&<AirFollowing></AirFollowing>}
        </Fragment>
    )
}



const mapStateToProps = (state) => {
    return {
        myairs: Object.values(state.myairs),
        user: state.auth,
        searches: Object.values(state.searches),
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs, resignIn })(Main);