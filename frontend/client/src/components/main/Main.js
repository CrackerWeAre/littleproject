import React, { Component, Fragment } from 'react';
import AirList from "../air/AirList"
import '../../style/Body.css'
import Drawer from '../drawer/Drawer';
import {connect} from 'react-redux'
import { fetchFollowingAirs , fetchAirs} from '../../actions'


class Main extends Component {

    
    componentDidMount(){
        
        
        this.props.fetchAirs();
        if(this.props.user.userEmail!==null){
            this.props.fetchFollowingAirs(this.props.user.userEmail);
            
        }
        const userAgent = navigator.userAgent.toLowerCase();
        const isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
        console.log(isTablet)
        
    }

    check(){
        if(true){

        }
    }
    onPhone() {

    }

    onWeb() {

        return(
            <Fragment>
                <Drawer></Drawer>
                <div className="mainBody_drawer_on">
                    <AirList></AirList>
                </div>
            </Fragment>
        )
    }

    render() {
    
        return (
            <Fragment>
                <Drawer></Drawer>
                <div className="mainBody_drawer_on">
                    <AirList></AirList>
                </div>
            </Fragment>
        );
    }


}


const mapStateToProps = state =>{
    return {
        myairs: Object.values(state.myairs),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchFollowingAirs })(Main);