import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { isUndefined } from 'util';

export const AirFrame = (props) => {
    const [src, setsrc] = useState('initialState')
    const [first, setfirst] = useState(false)
    const [platform, setplatform] = useState('initialState')

    useEffect(() => {
        
        if(!first&&props.liveItem){ 
            setplatform(props.liveItem.platform)
            if(props.liveItem.platform==="twitch"){
                setsrc(props.liveItem.liveDataHref.split('/')[props.liveItem.liveDataHref.split('/').length-1])
            } else if(props.liveItem.platform==="youtube"){
                setsrc(props.liveItem.liveDataHref.split('=')[props.liveItem.liveDataHref.split('=').length-1])
            }
            setfirst(true)
        }
    }, [props])

    const twitchIframe = () => {
        const urlBase = "https://player.twitch.tv/?channel="
        const urlParams = "&parent=mkoa.sparker.kr&autoplay=1?"

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
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute;" 
                allowFullScreen={true}
                >
            </iframe>
        )
    }

    const liveView = () => {
        if(platform){
            if(platform==="twitch"){
                return twitchIframe()
            }else if(platform==="youtube"){
                return youtubeIframe()
            }
        }
    }
    useEffect(()=>{
        console.log(props.liveItem)
    },[first, platform, src])
    
    return (
        <Fragment>
            <div className="container_live">
                {liveView()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    let listnum = 5
    let livelist = []
    const items =  Object.values(state.airs)
    let liveItemtemp = items[Math.floor(Math.random() * items.length)]
    if(liveItemtemp){
        if(liveItemtemp.platform){
            while(listnum!==0){
                if(liveItemtemp.platform==="afreecatv"){
                    liveItemtemp = items[Math.floor(Math.random() * items.length)]
                } else if(liveItemtemp.platform==="vlive"){
                    liveItemtemp = items[Math.floor(Math.random() * items.length)]
                } else {
                    if(!livelist.includes(liveItemtemp)){
                        liveItemtemp = items[Math.floor(Math.random() * items.length)]
                    }else {
                        listnum--;
                        livelist.push(liveItemtemp)
                        liveItemtemp = items[Math.floor(Math.random() * items.length)]
                    }
                    
                }
            }
        }
    }else {
        return {}
    }
    
    return {
        liveItem : livelist,
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(AirFrame)
