import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchAirs, fetchAir } from '../../actions'
import AirView from './AirView'
import '../../style/AirList.css'
class AirList extends React.Component{

    componentDidMount(){
        
        
        this.props.fetchAirs();
        if(this.props.user.userEmail!==null){
            this.props.fetchAir(this.props.user.userEmail);
        }
        
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

    AirShow() {
        return (
            <Fragment>
                <div className="container_title">
                     방송중인 채널
                </div>
                <div className="airlist_container">
                    {this.AirList()}
                </div>
            </Fragment>
        )
    }

    AirList() {
        
         if(this.props.airs){
            return this.props.airs.map(data => {
                return (
                    <div className='item' key={data._id}>
                        <AirView data={data}></AirView>
                    </div>
                )
            })
        }
        
        
    }

    render(){
        return (
            <Fragment>
                {this.myAirShow()}
                {this.AirShow()}
            </Fragment>
        )
        
    }
}


const mapStateToProps = state =>{
    console.log(state)
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, fetchAir })(AirList);