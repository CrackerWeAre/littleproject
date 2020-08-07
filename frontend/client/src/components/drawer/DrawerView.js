import React from 'react'
import { connect } from 'react-redux'
import "../../style/css/Drawer.css"

const DrawerView = (props) => {
    return (
        <div className="drawer_view">
            <div className="contents">
                <div className="creatorlogo">
                    <a href={props.data.creatorDataHref} title={props.data.liveDataTitle} target='_blank' rel="noopener noreferrer">
                        <img className="creator_img" src={props.data.creatorDataLogo} alt="CreatorImg"></img>
                    </a>
                </div>
                <div className="title">
                    <a href={props.data.liveDataHref} title={props.data.liveDataTitle} target='_blank' rel="noopener noreferrer">
                        <div className="text">{props.data.liveDataTitle}</div>
                    </a>
                    <a href={props.data.creatorDataHref} title={props.data.creatorDataName} target='_blank' rel="noopener noreferrer">{props.data.creatorDataName}</a>
                </div>  
            </div>
        </div>
    )
}


export default connect(null)(DrawerView);
