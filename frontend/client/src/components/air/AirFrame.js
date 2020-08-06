import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'

export const AirFrame = (props) => {
    const [first, setfirst] = useState(false)
    const [items, setitems] = useState([])


    useEffect(() => {
        if(!first&&props.liveItem){ 
            setitems(props.liveItem)
            setfirst(true)
        }
    }, [props.liveItem])

    const twitchIframe = (address) => {
        const urlBase = "https://player.twitch.tv/?channel="
        const urlParams = "&parent=mkoa.sparker.kr&autoplay=1?"

        return (
            <iframe 
                className="live_iframe"
                title="live"
                src={urlBase+address+urlParams}  
                frameBorder="0" 
                allowFullScreen={true} 
                scrolling="no" 
                height="378" 
                width="620">
            </iframe>
        )
    }

    const youtubeIframe = (address) => {
        const urlBase = "https://www.youtube.com/embed/"
        const urlParams = "?autoplay=1"
     
        return (
            <iframe 
                className="live_iframe"
                title="live"
                width="620" 
                height="378" 
                src={urlBase+address+urlParams} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute;" 
                allowFullScreen={true}
                >
            </iframe>
        )
    }
    
    
    const frameView = (item) => {

        let first = item[0]
        let second = item[1]
        let third = item[2]

        const changeDataEvent = (data) => {
            if(data===second){
                let temp = item
                setitems([temp[1],temp[0],temp[2]])
            }else{
                let temp = item
                setitems([temp[2],temp[1],temp[0]])
            }

        }
    
        const liveView = (data) => {
            if(data){
                
                if(data.platform==="twitch"){
                    return twitchIframe(data.liveDataHref.split('/')[data.liveDataHref.split('/').length-1])
                }else if(data.platform==="youtube"){
                    return youtubeIframe(data.liveDataHref.split('/')[data.liveDataHref.split('/').length-1])
                }
            }
        }

        const smallView = (data) => {
            if(data){
                return (
                    <div className="live_smallView" data={data} onClick={()=>changeDataEvent(data)}>
                        <img className="smallView_image" src={data.imgDataSrc} alt="streaming thumbnail"></img>
                    </div>
                )
            }
        }
       
        return (
            <Fragment>
                {liveView(first)}
                <div className="container_live_small">
                    {smallView(second)}{smallView(third)}
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className="container_live">
                {items&&frameView(items)}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    let listnum = 3
    let limnum = 0
    let livelist = []
    const items =  Object.values(state.airs)
    let liveItemtemp = items[Math.floor(Math.random() * items.length)]
    if(liveItemtemp){
        if(liveItemtemp.platform){
            while(listnum!==0&&limnum<1000){
                if(liveItemtemp.platform==="afreecatv"){
                    liveItemtemp = items[Math.floor(Math.random() * items.length)]
                } else if(liveItemtemp.platform==="vlive"){
                    liveItemtemp = items[Math.floor(Math.random() * items.length)]
                } else {
                    if(livelist.includes(liveItemtemp)){
                        limnum++;
                        liveItemtemp = items[Math.floor(Math.random() * items.length)]
                    }else {
                        limnum++;
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
