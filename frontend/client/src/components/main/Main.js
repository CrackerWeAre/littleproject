import React, { Fragment, useState, useEffect } from 'react';
import AirList from "../air/AirList"
import AirCateList from "../air/AirCateList"
import '../../style/css/Body.css'
import Drawer from '../drawer/Drawer';
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchBlockedAirs, fetchAirs} from '../../actions'
import {isMobile} from 'react-device-detect';


const Main = (props) => {

    const [cateOn, setcateOn] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        props.fetchAirs();
        if(props.user.userEmail!==null){
            props.fetchFollowingAirs(props.user.userEmail);
        }
        if(props.user.userEmail!==null){
            props.fetchBlockedAirs(props.user.userEmail);
        }
    }, [])
    
    

    useEffect(() => {

        if(props.match.params._id===undefined){
            return setcateOn(false)
        } else {
            return setcateOn(true)
        }
     
    }, [props.match.params._id])


    const onWeb = () => {
        if(isMobile){
            return (
                <Fragment>
                    <div className="mainBody_drawer_off">
                        {!cateOn&&<AirList></AirList>}
                        {cateOn&&<AirCateList data={props.match.params._id}></AirCateList>}
                    </div>
                    
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <Drawer></Drawer>
                    <div className="mainBody_drawer_on">
                        {!cateOn&&<AirList></AirList>}
                        {cateOn&&<AirCateList data={props.match.params._id} ></AirCateList>}
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
        myairs: Object.values(state.myairs),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs, fetchBlockedAirs })(Main);