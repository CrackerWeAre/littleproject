import React, { Fragment } from 'react'
import '../../style/Drawer.css'
import { connect } from 'react-redux'
import Footer from '../navigation/Footer';
import DrawerView from './DrawerView'

const Drawer = (props) => {

    const followingList = (props) => {
        
        props.myairs.map(data => {
            console.log(data.liveDataTitle)
            return (
                DrawerView(data.liveDataTitle)
            ) 
        })
        
    }
    
    return (
       <Fragment>
            <div className="drawer">
                {followingList(props)}
                
            </div>
            
        </Fragment>
 
    )
}

const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        followings: state.followings,
        user: state.auth
    }
}

export default connect(mapStateToProps)(Drawer);
