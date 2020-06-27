import React, { useState } from 'react'
import '../../style/css/AirView.css'
import { connect } from 'react-redux'
import { updateFollower, deleteFollower, getFollower, deleteBlock, updateBlock } from '../../actions/index'

import afreecatv from "../../style/img/platform/afreeca.png"
import twitch from "../../style/img/platform/twitch.png"
import youtube from "../../style/img/platform/youtube.png"
import vlive from "../../style/img/platform/vlive.png"
import setting from "../../style/img/setting.png"
import heartoff from "../../style/img/Simple Heart-1.png"
import hearton from "../../style/img/Simple Heart.png"

const AirSearchView = (props) => {
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
            if(!blo_btn)setblo_btn(!blo_btn)
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
            return <div className="top-right" onClick={showAlert}><img  className="airview_favor"  src={butfunctrue(fol_btn)} alt="hearton"></img></div>
        } else {
            return <div className="top-right" onClick={showAlert}><img  className="airview_favor"  src={butfuncfalse(fol_btn)} alt="heartoff"></img></div>
        }
    }

    const showPlatform = (platform) => {
        if(platform==="twitch"){
            return <div className="platform"><img  className="airview_img"  src={twitch} alt="twitch"></img></div>
        }else if(platform==="youtube"){
            return  <div className="platform"><img  className="airview_img"  src={youtube} alt="youtube"></img></div>
        }else if(platform==="afreecatv"){
            return <div className="platform"><img  className="airview_img"  src={afreecatv} alt="afreecatv"></img></div>
        }else if(platform==="vlive"){
            return <div className="platform"><img  className="airview_img"  src={vlive} alt="vlive"></img></div>
        }else {
            return <div className="platform"><img  className="airview_img"  src="blank" alt="afreecatv"></img></div>
        }
        
    }
    
    return (
        <div className="search__card">
            <div className="card__image">
            검색한 결과값에 대해서
            1. 스트리머 이미지, 스트리머 이름, 플랫폼, 온오프라인
                <div className="streamer__image">
                <a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">
                        <img className="airview_img"  src={props.data.creatorDataLogo} alt="CreatorImg"></img>
                    </a>
                </div>
                <div className="streamer__name">
                <div><a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">{props.data.creatorDataName}</a></div>
                </div>
                <div className="onandoff">{props.data.onAir&"onAir"}{props.data.onAir&&"offline"}</div>
                <div className="platform">{showPlatform(props.data.platform)}</div>
            </div>
            <div className="card__function">
                <div className="following"></div>
                <div className="block"></div>
                <div className="setting"  onClick={openSettingPopup}>
                    <img className="airview_img"  src={setting} alt="setting"></img>
                </div>
                {blo_btn && <div className="popup_inner" >
                        <div className="popup_inner_item" onClick={sendBlock}>차단하기</div>
                    </div>}
            </div>
            2. 차단 유무, 팔로잉 유무
        </div>
    )
    
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn,
        userEmail: state.auth.userEmail,
        auth: state.auth,
        followings: state.followings,
        blocks: state.blockings
        };
}

const mapDispatchToProps = {
    updatePostFollower: updateFollower,
    deletePostFollower: deleteFollower,
    getPostFollower: getFollower,
    deletePostBlock: deleteBlock,
    updatePostBlock: updateBlock
  }

export default connect(mapStateToProps, mapDispatchToProps)(AirSearchView);
