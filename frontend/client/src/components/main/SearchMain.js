import React, { Fragment } from 'react';

import AirSearchList from "../air/AirSearchList"
import '../../style/css/Body.css'
import Drawer from '../drawer/Drawer';
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchAirs} from '../../actions'
import {isMobile} from 'react-device-detect';


const Main = (props) => {

    
    const onWeb = () => {
        if(isMobile){
            return (
                <Fragment>
                    <div className="mainBody_drawer_off">
                        <AirSearchList id={props.match.params._id}></AirSearchList>
                    </div>
                    
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Drawer></Drawer>
                    <div className="mainBody_drawer_on">
                        <AirSearchList id={props.match.params._id}></AirSearchList>
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

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs })(Main);