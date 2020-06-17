import React, { Fragment } from 'react';

import AirSearchList from "../air/AirSearchList"
import '../../style/css/Body.css'
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchAirs} from '../../actions'


const Main = (props) => {


    return(
        
        <Fragment>  
            <AirSearchList id={props.match.params._id}></AirSearchList>
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