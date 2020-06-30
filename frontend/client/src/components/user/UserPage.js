import React, {Fragment, useEffect, useState} from 'react'
import {connect} from 'react-redux'
import AirView from '../air/AirView'
import {darkModeSet} from '../../actions/index'
import SubList from './SubList'

function UserPage(props) {

    useEffect(() => {
        
    }, [])
   

    const [dark, setdarkmode] = useState(null)
    const darkmodeClick = () => {
        props.darkModeSet(props.darkmode)
    }

    useEffect(() => {
        setdarkmode(props.darkmod)
        darkmodeButton()
    }, [])


    const darkmodeButton = () => {
        if(props.darkmode){
            return (
                <label className="switch" >
                    <input type="checkbox" checked={true} onChange={darkmodeClick} >          
                    </input>
                    <span className="slider round" ></span>
                </label>
            )
        }else {
            return (
                <label className="switch" >
                    <input type="checkbox" checked={false} onChange={darkmodeClick} >          
                    </input>
                    <span className="slider round" ></span>
                </label>
            )
        }

    }

    const myBlockList = () => {
        if(props.mybloairs.length!==0){
            return props.mybloairs.map(data => {
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
            <div>
                    <div>darkmode</div>
                    
                    
                    {dark!==null&&darkmodeButton()}
                    
                </div>
            {subs()}
            {block()}
        </Fragment>
    )
}

const mapStateToProps = state =>{
    return {
        darkmode : state.maintheme.darkmode,
        mybloairs: Object.values(state.mybloairs),
        myfollowings: Object.values(state.myairs),
        user: state.auth
    }
}




export default connect(mapStateToProps, {darkModeSet })(UserPage);


