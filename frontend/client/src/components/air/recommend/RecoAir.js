import React, {Fragment ,useEffect, useState} from 'react'
import AirView from '../AirView'
import LiveModalShow from '../LiveModalShow'
import { connect } from 'react-redux'

const RecoAir = (props) => {

    const [liveModalOn, setLiveModalOn] =useState(true)
    const [liveModalId, setLiveModalId] =useState('')
    const [liveModalPlatform, setLiveModalPlatform] =useState('')
    const [liveModalkey, setLiveModalKey] = useState('')
    const [scrollTop, setScrollTop] = useState(0)

    useEffect(()=>{
        var location = document.querySelector('.livemodal')
        if(location!==null){
            window.scroll({top: location.offsetTop-100, left: 0, behavior: "smooth"})
        }
    },[liveModalId])

    const sendLive = (channelId, platform, key, scroll, data) => {
        setLiveModalId(channelId)
        setLiveModalPlatform(platform)
        setLiveModalOn(true)
        setLiveModalKey(key)
        setScrollTop(scroll-100)
    }

    const closeLive = () => {
        setLiveModalId('')
        setLiveModalPlatform('')
        setLiveModalKey('')
        setLiveModalOn(false)
    }

    const onBlur = (e) => {
        console.log(e)
        closeLive()
    }

    const RecoList = () => {
        if(props.recoList){
            return props.recoList.map(data => {
                if(liveModalkey===data._id){
                    return (
                        <>
                            <div className='item' key={data._id}>
                                <AirView data={data} sendLive={sendLive} closeLive = {closeLive}></AirView>
                            </div>
                            <div className='livemodal' onClick={onBlur}>
                                {liveModalOn&&<LiveModalShow liveModalId ={liveModalId} liveModalPlatform={liveModalPlatform} scroll={scrollTop}></LiveModalShow>}
                            </div>
                        </>
                    )
                } else
                    return (
                        <div className='item' key={data._id}>
                            <AirView data={data} sendLive={sendLive} closeLive = {closeLive}></AirView>
                        </div>
                    )
                }
            ) 
        }
    }

    return (
        <Fragment>
            <div className="container_title">
                    추천 채널
            </div>
            <div className="airlist_container">
                {RecoList()}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    const items = Object.values(state.airs);
    var itemNum;
    var itemList = []
    if(items){
        if(items.length>12){
            for (itemNum = 0; itemNum<12; itemNum++){
                while(true){
                    var i = items[Math.floor(Math.random()*items.length)];
                    if(itemList.includes(i)){
                        i = items[Math.floor(Math.random()*items.length)];
                    }else {
                        break
                    }
                }
                itemList.push(i);
            }
        }
    }
    
    return {
        recoList : itemList
    }
}


const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoAir)
