import React, { Fragment ,useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux'
import { fetchAirs, getFollower, fetchFollowingAirs, fetchCateAirs } from '../../actions'
import { postLiveLog } from '../../actions/log'
import AirView from './AirView'
import '../../style/css/AirList.css'
import spinner from '../../style/img/spinner.png'
import { timeout } from 'q';
import LiveModalShow from './LiveModalShow'

const AirList = (props) => {    

    const [airs, setAirs] = useState([])
    const [loading, setloading] = useState(false)
    const [numAirs, setNumAirs] = useState(12)
    const [isFetching, setIsFetching] = useState(false)
    const [liveModalOn, setLiveModalOn] =useState(true)
    const [liveModalId, setLiveModalId] =useState('')
    const [liveModalPlatform, setLiveModalPlatform] =useState('')
    const [liveModalkey, setLiveModalKey] = useState('')

    const [cateOn, setcateOn] = useState(false)
    const [airOn, setairOn] = useState(false)
    const [searchOn, setsearchOn] = useState(false)
    const [followOn, setfollowOn] = useState(false)
    const [liveOn, setliveOn] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)

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

    useEffect(()=>{
        var location = document.querySelector('.livemodal')
        if(location!==null){
            window.scroll({top: location.offsetTop-100, left: 0, behavior: "smooth"})
        }
    },[liveModalId])

    useEffect(()=>{

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)

    },[])

 
    useEffect(() => {
        if(window.location.pathname.includes('/following')){
            setcateOn(false)
            setliveOn(false)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(true)
            setAirs(Array.from(props.myairs.slice(0,12)))
            setNumAirs(12)
            setIsFetching(false)
        }else if(window.location.pathname.includes('/directory/')){
            setcateOn(true)
            setliveOn(false)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(false)
            setAirs(Array.from(props.cateairs.slice(0,12)))
            setNumAirs(12)
            setIsFetching(false)
        }else if(window.location.pathname.includes('/search/')){
            setliveOn(false)
            setcateOn(false)
            setairOn(false)
            setsearchOn(true)
            setfollowOn(false)
            setAirs(Array.from(props.searches.slice(0,12)))
            setNumAirs(12)
            setIsFetching(false)
        }else {
            setfollowOn(true)
            setliveOn(true)
            setcateOn(false)
            setairOn(true)
            setsearchOn(false)
            setAirs(Array.from(props.airs.slice(0,12)))
            setNumAirs(12)
            setIsFetching(false)
        }
    },[props])


    useEffect(()=>{
        if (!isFetching) return;
        setloading(true)
    
        if(cateOn) {
            fetchMoreListItems(props.cateairs);
        } else if(airOn) {
            fetchMoreListItems(props.airs);
        } else if(searchOn) {
            fetchMoreListItems(props.searches);
        } else if(followOn) {
            fetchMoreListItems(props.myairs);
        }
    },[isFetching])

    const fetchMoreListItems = (data) => {
        if(data.slice(numAirs,numAirs+12).length!==0){
            setTimeout(()=>{
                setAirs(prevState => ( [...prevState, ...Array.from(data.slice(numAirs,numAirs+12))]));
                setNumAirs(numAirs+12)
                setIsFetching(false);
                setloading(false)
            }, 500)
        }else{
            setIsFetching(true);
            setloading(false)
        }
    }

    const onBlur = (e) => {
        console.log(e)
        closeLive()
    }

    
    const CateAirShow = () => {
        var channelName = ''
        channelName = props.data.params._id
        return (
            <Fragment>
                <div className="container_title">
                    {channelName.toUpperCase()} 채널
                </div>
                <div className="airlist_container">
                    {AirList()}
                </div>
            </Fragment>
        )
    }

    
    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        setIsFetching(true);
    }

    const myAirShow = () => {
        if(props.myairs.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        팔로우 중인 채널
                    </div>
                    <div className="airlist_container">
                        {AirList(props.myairs)}
                    </div>
                </Fragment>
            )
        }
    }

    const AirShow = () => {
        return (
            <Fragment>
                <div className="container_title">
                     방송중인 채널
                </div>
                <div className="airlist_container">
                    {AirList()}
                </div>
            </Fragment>
        )
    }


    const AirList = (item) => {
        if(item){
            return item.map(data => {
                if(props.blocking.includes(data._uniq)){
                    return null;
                } else
                    return (
                        <div className='item' key={data._id}>
                            <AirView data={data} sendLive={sendLive} closeLive = {closeLive}></AirView>
                        </div>
                    )
                }
            ) 
        } else if(airs.length>1){
            return airs.map(data => {
                if(props.followings.includes(data._uniq)){
                    return null;
                } else if(props.blocking.includes(data._uniq)){
                    return null;
                } else if(liveModalkey===data._id){
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
                }else{
                    return (
                        <div className='item' key={data._id}>
                            <AirView data={data} sendLive={sendLive} closeLive = {closeLive}></AirView>
                        </div>
                    )
                }
            }
            )    
        } else if(cateOn) {
            return <div>현재 라이브 중인 방송이 없습니다</div>
        } else {
            return <div>해당 검색 결과가 없습니다.</div>
        }
    }
    
    const SearchAirShow = () => {
        return (
            <Fragment>
                <div className="container_title">
                        {props.data.params._id}에 대한 검색결과
                </div>
                <div className="airlist_container">
                    {AirList()}
                </div>
            </Fragment>
        )
    }


    return (
        <Fragment>
            
            {props.user.isSignedIn&&followOn&&myAirShow()}
            {airOn&&AirShow()}
            {cateOn&&CateAirShow()}
            {searchOn&&SearchAirShow()}
            {loading&&<div className="div_spinner_air"><img className="spinner_air" src = {spinner} alt="spinner"></img></div>}
        </Fragment>
    )
}


const mapStateToProps = (state) =>{
    return {
        airs: Object.values(state.airs).filter(item =>  !state.followings.includes(item._uniq)).filter(item =>  !state.blockairs.includes(item._uniq)).filter(item => item.language==='ko'), 
        myairs: Object.values(state.myairs),
        cateairs: Object.values(state.cateairs),
        followings: state.followings,
        blocking: state.blockairs,
        searches: Object.values(state.searches),
        user: state.auth,
        logs: state.logs
    }
}

export default connect(mapStateToProps, { fetchAirs, getFollower, fetchCateAirs, fetchFollowingAirs, postLiveLog })(AirList);