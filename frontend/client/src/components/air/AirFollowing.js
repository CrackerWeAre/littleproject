import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchAirs, getFollower, fetchFollowingAirs } from '../../actions'
import AirView from './AirView'
import '../../style/AirList.css'

class AirFollowing extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0)
    }

    myAirShow() {
        if(this.props.myairs.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        팔로우 중인 채널
                    </div>
                    <div className="airlist_container">
                        {this.myAirList()}
                    </div>
                </Fragment>
            )
        }
    }

    myAirList() {
        return this.props.myairs.map(data => {
            return (
                    <div className='item' key={data._id}>
                        <AirView data={data}></AirView>
                    </div>

            )
        })
        
    }

    render(){
        return (
            <Fragment>
                {this.myAirShow()}
            </Fragment>
        )
        
    }
}


const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        followings: state.followings,
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, getFollower, fetchFollowingAirs })(AirFollowing);