import React, {Component} from 'react'
import '../../style/AirView.css'
import { connect } from 'react-redux'
import { signOut } from '../../actions/user'

class AirView extends Component {


    showAlert = (e) => {
        e.preventDefault();
        console.log(this.props.data.creatorDataName)
    }

    showFavorite = () => {
        if(this.props.isSignedIn){
            return <div className="top-right" onClick={this.showAlert}>좋아요</div>
        }
        
    }

    render(){
        return (
            <div className="card">
                <div className="container">
                    {this.showFavorite()}
                    <a href={this.props.data.liveDataHref}>
                        <img src={this.props.data.imgDataSrc} alt="LiveImg"></img>
                    </a>
                </div>
                <div className="container">
                    <h4><b><a href={this.props.data.liveDataHref}>{this.props.data.liveDataTitle}</a></b></h4> 
                    <p>{this.props.data.plaform}</p>
                    <p><a href={this.props.data.creatorDataHref}>{this.props.data.creatorDataName}</a></p> 
                    <p>{this.props.data.liveAttdc}명 시청중</p>
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
