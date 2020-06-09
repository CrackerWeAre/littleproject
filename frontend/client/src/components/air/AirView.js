import React, { useState } from 'react'
import '../../style/AirView.css'
import { connect } from 'react-redux'
import { updateFollower, deleteFollower, getFollower, deleteBlock, updateBlock } from '../../actions/index'

import afreecatv from "../../style/afreeca.png"
import twitch from "../../style/twitch.png"
import youtube from "../../style/youtube.png"
import vlive from "../../style/vlive.png"
import setting from "../../style/setting.png"
import heartoff from "../../style/Simple Heart-1.png"
import hearton from "../../style/Simple Heart.png"

const AirView = (props) => {
    const [fol_btn, setfol_btn] = useState(false);
    const [blo_btn, setblo_btn] = useState(false);
    const showAlert = (e) => {

        e.preventDefault();
        if(props.followings.indexOf(props.data._uniq)>=0){
            if(props.isSignedIn){
                setfol_btn(!fol_btn)
                props.deletePostFollower(props)
            }else{
                alert("로그인후 사용해주세요.");
            }
            
        } else {
            if(props.isSignedIn){
                setfol_btn(!fol_btn)
                props.updatePostFollower(props)
            }else{
                alert("로그인후 사용해주세요.");
            }
            
        }
    }

    const sendBlock = (e) => {
        e.preventDefault();
        if(props.isSignedIn){
            setblo_btn(!blo_btn)
            props.updatePostBlock(props)
            alert("차단하였습니다.")
        }else{
            alert("로그인후 사용해주세요.");
        }

    }

    const openSettingPopup = (e) => {
        e.preventDefault();
        setblo_btn(!blo_btn)
    }




    const butfuncfalse = (fol_btn) => {
        if(fol_btn){
            return hearton
        }else{
            return heartoff
        }
    }

    const butfunctrue = (fol_btn) => {
        if(!fol_btn){
            return hearton
        }else{
            return heartoff
        }
    }

    const showFavorite = () => {
        if(props.followings.indexOf(props.data._uniq)>=0){
            return <div className="top-right" onClick={showAlert}><img src={butfunctrue(fol_btn)} alt="hearton"></img></div>
        } else {
            return <div className="top-right" onClick={showAlert}><img src={butfuncfalse(fol_btn)} alt="heartoff"></img></div>
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
            <div className="title"><a href={props.data.liveDataHref} target='_blank' rel="noopener noreferrer"><div className="text">{props.data.liveDataTitle}</div></a></div>
            <div className="contents">
                <div className="creatorlogo">
                    <a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">
                        <img src={props.data.creatorDataLogo} alt="CreatorImg"></img>
                    </a>
                </div>
                <div><a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">{props.data.creatorDataName}</a></div>
                {showPlatform(props.data.platform)}
                <div className="setting"  onClick={openSettingPopup}>
                    <img src={setting} alt="setting"></img>
                </div>
                {blo_btn && <div className="popup_inner" >
                        <div className="popup_inner_item" onClick={sendBlock}>차단하기</div>
                    </div>}
            </div>

        </div>
    )
    
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn,
        userEmail: state.auth.userEmail,
        auth: state.auth,
        followings: state.followings
        };
}

const mapDispatchToProps = {
    updatePostFollower: updateFollower,
    deletePostFollower: deleteFollower,
    getPostFollower: getFollower,
    deletePostBlock: deleteBlock,
    updatePostBlock: updateBlock
  }

export default connect(mapStateToProps, mapDispatchToProps)(AirView);
