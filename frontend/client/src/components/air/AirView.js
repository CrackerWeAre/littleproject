import React from 'react'
import '../../style/AirView.css'

const AirView = ({props}) => {
    const {imgDataSrc, liveDataHref, liveDataTitle,
        liveAttdc,
        plaform,
        creatorDataHref,
        creatorDataName} = props;

    return (
        <div className="card">
            
            <a href={liveDataHref}>
                <div><img src={imgDataSrc} alt="LiveImg"></img></div>
            </a>
            <div className="container">
                <h4><b><a href={liveDataHref}>{liveDataTitle}</a></b></h4> 
                <p>{plaform}</p>
                <p><a href={creatorDataHref}>{creatorDataName}</a></p> 
                <p>{liveAttdc}명 시청중</p>
            </div>
        </div>
    )
}

export default AirView
