import React from 'react'
import { connect } from 'react-redux'
import "../../style/css/Drawer.css"

const DrawerShortView = (props) => {
    return (
        <div className="st_drawer_view">
            <div className="st_contents">
                <div className="st_creatorlogo">
                    <a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">
                        <img className="st_creator_img" src={props.data.creatorDataLogo} alt={props.data.liveDataTitle}></img>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default connect(null)(DrawerShortView);
