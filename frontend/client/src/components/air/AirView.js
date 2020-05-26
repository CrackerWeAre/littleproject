import React, {Component} from 'react'
import '../../style/AirView.css'
import { connect } from 'react-redux'
import { signOut } from '../../actions/user'
import afreecatv from "../../style/afreeca.png"
import twitch from "../../style/twitch.png"
import youtube from "../../style/youtube.png"
import vlive from "../../style/vlive.png"
import setting from "../../style/setting.png"
import heartoff from "../../style/Simple Heart-1.png"

class AirView extends Component {


    showAlert = (e) => {
        e.preventDefault();
        console.log(this.props.data.platform)
    }

    showFavorite = () => {
        if(this.props.isSignedIn){
            return <div className="top-right" onClick={this.showAlert}><img src={heartoff} alt="heartoff"></img></div>
        }
        
    }

    showPlatform = (platform) => {
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
    render(){
        console.log()
        return (
            <div className="card">
                <div className="container">
                    {this.showFavorite()}
                    <div className="top-left">{this.props.data.liveAttdc}명 시청중</div>
                    <a href={this.props.data.liveDataHref} target='_blank' rel="noopener noreferrer">
                        <img src={this.props.data.imgDataSrc} alt="LiveImg"></img>
                    </a>
                </div>
                <div className="title"><a href={this.props.data.liveDataHref}>{this.props.data.liveDataTitle}</a></div>
                <div className="contents">
                    <div className="creatorlogo">
                        <a href={this.props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">
                            <img src={this.props.data.creatorDataLogo} alt="CreatorImg"></img>
                        </a>
                    </div>
                    <div><a href={this.props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">{this.props.data.creatorDataName}</a></div>
                    {this.showPlatform(this.props.data.platform)}
                    <div className="setting"><img src={setting} alt="setting"></img></div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn,
        user: state.user
        };
}

export default connect(mapStateToProps, { signOut })(AirView);
