import React, {Fragment, useEffect} from 'react'

const LiveModalShow = ({liveModalId, liveModalPlatform}) => {
    
    const twitchIframe = (address) => {
        const urlBase = "https://player.twitch.tv/?channel="
        const urlParams = "&parent=mkoa.sparker.kr&autoplay=1?"

        return (
            <div className="live_Modal">
                <iframe 
                    className="live_iframe"
                    title="live"
                    src={urlBase+address+urlParams}  
                    frameBorder="0" 
                    allowFullScreen={true} 
                    scrolling="no">
                </iframe>
            </div>
        )
    }

    const youtubeIframe = (address) => {
        const urlBase = "https://www.youtube.com/embed/"
        const urlParams = "?autoplay=1"
     
        return (
            <div className="live_Modal">
                <iframe 
                    className="live_iframe"
                    title="live"
                    src={urlBase+address+urlParams} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute;" 
                    allowFullScreen={true}
                >
                </iframe>
            </div>
            
        )
    }
   
    const liveView = (liveModalPlatform, liveModalId) => {
        
        if(liveModalId){
            if(liveModalPlatform==="twitch"){
                return twitchIframe(liveModalId.split('/')[liveModalId.split('/').length-1])
            }else if(liveModalPlatform==="youtube"){
                return youtubeIframe(liveModalId.split('=')[liveModalId.split('=').length-1])
            }
        }
    }

   
   
    return (
        <Fragment>
            {liveView(liveModalPlatform, liveModalId)}
        </Fragment>
    )
}

export default LiveModalShow
