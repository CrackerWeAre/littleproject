import React, { Fragment, useEffect } from 'react';

import '../../style/css/Body.css'
import Drawer from '../drawer/Drawer';
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchAirs} from '../../actions'
import {isMobile} from 'react-device-detect';
import AirFollowing from '../air/AirFollowing';


const FollowingMain = (props) => {

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return(
        
        <Fragment>  
            <AirFollowing></AirFollowing>
        </Fragment>
    )
}



const mapStateToProps = state =>{
    return {
        searches: Object.values(state.searches),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs })(FollowingMain);