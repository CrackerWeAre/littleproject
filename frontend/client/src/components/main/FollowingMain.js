import React, { Fragment, useEffect } from 'react';

import '../../style/Body.css'
import Drawer from '../drawer/Drawer';
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchAirs} from '../../actions'
import {isMobile} from 'react-device-detect';
import AirFollowing from '../air/AirFollowing';


const FollowingMain = (props) => {

    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    const onWeb = () => {
        if(isMobile){
            return (
                <Fragment>
                    <div className="mainBody_drawer_off">
                        <AirFollowing></AirFollowing>
                    </div>
                    
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Drawer></Drawer>
                    <div className="mainBody_drawer_on">
                        <AirFollowing></AirFollowing>
                    </div>
                </Fragment>
            )
        }
        
    }

    return(
        
        <Fragment>  
            {onWeb()}
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