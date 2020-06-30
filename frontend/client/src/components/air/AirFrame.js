import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { isUndefined } from 'util';

export const AirFrame = (props) => {

    const [src, setsrc] = useState('initialState')
    useEffect(() => {
        if(props.liveItem){
  
            if(props.liveItem.platform==="twitch"){

                setsrc(props.liveItem.liveDataHref.split('/')[props.liveItem.liveDataHref.split('/').length-1])
            } else if(props.liveItem.platform==="youtube"){
                setsrc(props.liveItem.liveDataHref.split('=')[props.liveItem.liveDataHref.split('=').length-1])
            }
        }
    }, [props.liveItem])

    const twitchIframe = () => {
        const urlBase = "https://player.twitch.tv/?channel="
        const urlParams = "&parent=sparker.kr&autoplay=1?"

        return (
            <iframe 
                className="live_iframe"
                title="live"
                src={urlBase+src+urlParams}  
                frameBorder="0" 
                allowFullScreen={true} 
                scrolling="no" 
                height="378" 
                width="620">
            </iframe>
        )
    }

    const youtubeIframe = () => {
        const urlBase = "https://www.youtube.com/embed/"
        const urlParams = "?autoplay=1"
     
        return (
            <iframe 
                className="live_iframe"
                title="live"
                width="620" 
                height="378" 
                src={urlBase+src+urlParams} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen={true}
                >
            </iframe>
        )
    }

    const liveView = () => {
        if(props.liveItem){
            if(props.liveItem.platform==="twitch"){
                return twitchIframe()
            }else if(props.liveItem.platform==="youtube"){
                return youtubeIframe()
            }
        }
    }
    return (
        <Fragment>
            <div className="container_live">
                {liveView()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const items =  Object.values(state.airs)
    let liveItemtemp = items[Math.floor(Math.random() * items.length)]
    if(liveItemtemp){
        if(liveItemtemp.platform){
            while(true){
                if(liveItemtemp.platform==="afreecatv"){
                    liveItemtemp = items[Math.floor(Math.random() * items.length)]
                } else if(liveItemtemp.platform==="vlive"){
                    liveItemtemp = items[Math.floor(Math.random() * items.length)]
                } else {
                    return {
                        liveItem : liveItemtemp
                    }
                }
            }
        }
    }else {
        return {}
    }
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AirFrame)
