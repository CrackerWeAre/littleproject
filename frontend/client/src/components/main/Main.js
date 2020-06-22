import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs, } from '../../actions'
import { resignIn } from '../../actions/user'


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


    return(
        
        <Fragment>  

            <AirList data={props.match.params._id} ></AirList>
        
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