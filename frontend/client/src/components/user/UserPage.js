import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import AirView from '../air/AirView'
import SubList from './SubList'

function UserPage(props) {

    

    const myBlockList = () => {
        if(props.mybloairs.length!==0){
            return props.mybloairs.map(data => {
                console.log(data)
                    return (
                        <div className='item' key={data._id}>
                            <SubList data={data} cate="blocks"></SubList>
                        </div>
                    )
                
            })
        }
        
    }

    const mySubList = () => {
        if(props.myfollowings.length!==0){
            return props.myfollowings.map(data => {
                console.log(data)
                    return (
                        <div className='item' key={data._id}>
                            <SubList data={data} cate="subs"></SubList>
                        </div>
                    )
                
            })
        }
        
    }

    const block = () => {
        console.log(props.mybloairs)
        if(props.mybloairs.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        차단중인 채널
                    </div>
                    <div className="airlist_container">
                        {myBlockList()}
                    </div>
                </Fragment>
            )
        }
        
    }
    const subs = () => {
        console.log(props.mybloairs)
        if(props.myfollowings.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        팔로우중인 채널
                    </div>
                    <div className="airlist_container">
                        {mySubList()}
                    </div>
                </Fragment>
            )
        }
        
    }


    const profile = () => {
        return(
            <Fragment>
                <div className="container_profile">
                    <div className="container_profile_title">
                        프로필 설정
                    </div>
                    <div className="container_profile_data">
                        <div>email</div>
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            {profile()}
            {subs()}
            {block()}
        </Fragment>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        mybloairs: Object.values(state.mybloairs),
        myfollowings: Object.values(state.myairs),
        user: state.auth
    }
}

export default connect(mapStateToProps, { })(UserPage);


