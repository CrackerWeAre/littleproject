import React, { useState} from 'react'
import '../../style/AirView.css'
import { connect } from 'react-redux'
import { updateFollower, deleteFollower } from '../../actions/index'

import afreecatv from "../../style/afreeca.png"
import twitch from "../../style/twitch.png"
import youtube from "../../style/youtube.png"
import vlive from "../../style/vlive.png"
import setting from "../../style/setting.png"
import heartoff from "../../style/Simple Heart-1.png"

const AirView = (props) => {

    const [following, setfollowing] = useState(null);
    const showAlert = (e) => {
        e.preventDefault();
        if(props.auth.userInfo.following.indexOf(props.data._uniq)>=0){
            console.log(props.auth.userInfo.following.indexOf(props.data._uniq))
            props.deletePostFollower(props)
            console.log("delete")
        } else {
            console.log(props.auth.userInfo.following.indexOf(props.data._uniq))
            props.updatePostFollower(props)
            console.log("create")
        }
    }


    const showFavorite = () => {
        
        if(props.isSignedIn){
            return <div className="top-right" onClick={showAlert}><img src={heartoff} alt="heartoff"></img></div>
        }
        
    }

    const showPlatform = (platform) => {
        if(platform==="twitch"){
            return <div className="platform"><img src={twitch} alt="twitch"></img></div>
        }else if(platform==="youtube"){
            return  <div className="platform"><img src={youtube} alt="youtube"></img></div>
        }else if(platform==="afreecatv"){
            return <div className="platform"><img src={afreecatv} alt="afreecatv"></img></div>
        }else if(platform==="vlive"){
            return <div className="platform"><img src={vlive} alt="vlive"></img></div>
        }else {
            return <div className="platform"><img src="blank" alt="afreecatv"></img></div>
        }
        
    }
    
    return (
        <div className="card">
            <div className="container">
                {showFavorite()}
                <div className="top-left">{props.data.liveAttdc}명 시청중</div>
                <a href={props.data.liveDataHref} target='_blank' rel="noopener noreferrer">
                    <img src={props.data.imgDataSrc} alt="LiveImg"></img>
                </a>
            </div>
            <div className="title"><a href={props.data.liveDataHref}><div className="text">{props.data.liveDataTitle}</div></a></div>
            <div className="contents">
                <div className="creatorlogo">
                    <a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">
                        <img src={props.data.creatorDataLogo} alt="CreatorImg"></img>
                    </a>
                </div>
                <div><a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">{props.data.creatorDataName}</a></div>
                {showPlatform(props.data.platform)}
                <div className="setting"><img src={setting} alt="setting"></img></div>
            </div>

        </div>
    )
    
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn,
        userEmail: state.auth.userEmail,
        auth: state.auth
        };
}

const mapDispatchToProps = {
    updatePostFollower: updateFollower,
    deletePostFollower: deleteFollower
  }

export default connect(mapStateToProps, mapDispatchToProps)(AirView);
