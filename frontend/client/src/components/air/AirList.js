import React, { Fragment ,useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAirs, getFollower, fetchFollowingAirs, fetchCateAirs } from '../../actions'
import AirView from './AirView'
import AirFrame from './AirFrame'
import AirSearchView from './AirSearchView'
import '../../style/css/AirList.css'
import spinner from '../../style/img/spinner.png'

const AirList = (props) => {

    const [airs, setAirs] = useState([])
    const [loading, setloading] = useState(false)
    const [numAirs, setNumAirs] = useState(10)
    const [isFetching, setIsFetching] = useState(false)


    const [cateOn, setcateOn] = useState(false)
    const [airOn, setairOn] = useState(false)
    const [searchOn, setsearchOn] = useState(false)
    const [followOn, setfollowOn] = useState(false)
    const [liveOn, setliveOn] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    useEffect(() => {
        console.log(window.location.pathname)
        if(window.location.pathname.includes('/following')){
            
            setcateOn(false)
            setliveOn(false)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(true)
            setAirs(Array.from(props.myairs.slice(0,10)))
            setNumAirs(10)
            setIsFetching(false)
        }else if(window.location.pathname.includes('/directory/')){
            setcateOn(true)
            setliveOn(false)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(false)
            setAirs(Array.from(props.cateairs.slice(0,10)))
            setNumAirs(10)
            setIsFetching(false)
        }else if(window.location.pathname==='/'){
            setfollowOn(false)
            setliveOn(true)
            setcateOn(false)
            setairOn(true)
            setsearchOn(false)
            setAirs(Array.from(props.airs.slice(0,10)))
            setNumAirs(10)
            setIsFetching(false)
        }else if(window.location.pathname.includes('/search/')){
            setliveOn(false)
            setcateOn(false)
            setairOn(false)
            setsearchOn(true)
            setfollowOn(false)
            setAirs(Array.from(props.searches.slice(0,10)))
            setNumAirs(10)
            setIsFetching(false)
        }
    },[window.location.pathname])

    useEffect(()=>{
        if (!isFetching) return;
        setloading(true)

        if(cateOn) {
            fetchMoreListItems(props.cateairs);
        } else if(airOn) {
            fetchMoreListItems(props.airs);
        } else if(searchOn) {
            fetchMoreListItems(props.searches);
        }
    },[isFetching])

    const fetchMoreListItems = (data) => {
        if(data.slice(numAirs,numAirs+10).length!==0){
            setTimeout(()=>{
                setAirs(prevState => ( [...prevState, ...Array.from(data.slice(numAirs,numAirs+10))]));
                setNumAirs(numAirs+10)
                setIsFetching(false);
                setloading(false)
            }, 1500)
        }else{
            setIsFetching(true);
            setloading(false)
        }
    }



    useEffect(() => {
        if(props.data){
            const data = props.data
            props.fetchCateAirs(data.toUpperCase())
        }
    }, [props.data])
    
    const CateAirShow = () => {
        return (
            <Fragment>
                <div className="container_title">
                     {props.data} 채널
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

    const myAirShow1 = () => {
        if(props.myairs.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        팔로우 중인 채널
                    </div>
                    <div className="airlist_container">
                        {AirList()}
                    </div>
                </Fragment>
            )
        }
    }

    const myAirShow2 = () => {
        if(props.myairs.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        팔로우 중인 채널
                    </div>
                    <div className="airlist_container">
                        {myAirList()}
                    </div>
                </Fragment>
            )
        }
    }
    
    const myAirList = () => {
        return props.myairs.map(data => {
            return (
                    <div className='item' key={data._id}>
                        <AirView data={data}></AirView>
                    </div>

            )
        })
        
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


    const AirList = () => {
        if(airs){
           return airs.map(data => {
               if(props.followings.includes(data._uniq)){
                   return null;
               } else if(props.blocking.includes(data._uniq)){
                   return null;
               } else
                   return (
                       <div className='item' key={data._id}>
                           <AirView data={data}></AirView>
                       </div>
                   )
               })
               
           }
        }
    
    const SearchAirShow = () => {
        return (
            <Fragment>
                <div className="container_title">
                        {props.data}에 대한 검색결과
                </div>
                <div className="airlist_container">
                    {AirList()}
                </div>
            </Fragment>
        )
    }


    return (
        <Fragment>
            {liveOn&&<AirFrame/>}
            {props.user.isSignedIn&&followOn&&myAirShow1()}
            {props.user.isSignedIn&&!followOn&&myAirShow2()}
            {airOn&&AirShow()}
            {cateOn&&CateAirShow()}
            {searchOn&&SearchAirShow()}
            {loading&&<div className="div_spinner_air"><img className="spinner_air" src = {spinner} alt="spinner"></img></div>}
        </Fragment>
    )
}


const mapStateToProps = (state) =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        cateairs: Object.values(state.cateairs),
        followings: state.followings,
        blocking: state.blockairs,
        searches: Object.values(state.searches),
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, getFollower, fetchCateAirs, fetchFollowingAirs })(AirList);