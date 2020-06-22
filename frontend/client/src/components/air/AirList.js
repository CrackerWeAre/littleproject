import React, { Fragment ,useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAirs, getFollower, fetchFollowingAirs, fetchCateAirs } from '../../actions'
import AirView from './AirView'
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


    useEffect(() => {
        setAirs(Array.from(props.airs.slice(0,10)))
    }, [props.airs])


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    useEffect(()=>{
        if (!isFetching) return;
        setloading(true)
        fetchMoreListItems();
    },[isFetching])

    useEffect(() => {
        console.log(window.location.pathname)
        if(window.location.pathname==='/following'){
            setcateOn(false)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(true)
        }else if(window.location.pathname.includes('/directory/')){
            setcateOn(true)
            setairOn(false)
            setsearchOn(false)
            setfollowOn(false)
        }else if(window.location.pathname==='/'){
            setcateOn(false)
            setairOn(true)
            setsearchOn(false)
            setfollowOn(true)
        }else if(window.location.pathname.includes('/search/')){
            setcateOn(false)
            setairOn(false)
            setsearchOn(true)
            setfollowOn(false)
        }
        
     
    }, [window.location.pathname])

    useEffect(() => {
        if(props.data){
            const data = props.data
            props.fetchCateAirs(data.toUpperCase() )
        }
    }, [props.data])
    
    const CateAirShow = () => {
        return (
            <Fragment>
                <div className="container_title">
                     {props.data} 채널
                </div>
                <div className="airlist_container">
                    {CateAirList()}
                </div>
            </Fragment>
        )
    }

    const CateAirList = () => {
         if(props.cateairs.length!==0){
            return props.cateairs.map(data => {
                if(props.followings.includes(data._uniq)){
                    return null;
                } else if(props.blocking.includes(data._uniq)){
                    return null;
                } else {
                    return (
                        <div className='item' key={data._id}>
                            <AirView data={data}></AirView>
                        </div>
                    )
                }
                
            })
        } else return <div>현재 방송중인 채널이 없습니다.</div>
    }

    const fetchMoreListItems = () => {
        if(props.airs.slice(numAirs,numAirs+10).length!==0){
            setTimeout(()=>{
                setAirs(prevState => ( [...prevState, ...Array.from(props.airs.slice(numAirs,numAirs+10))]));
                setNumAirs(numAirs+10)
                setIsFetching(false);
                setloading(false)
            }, 1500)
        }else{
            setIsFetching(true);
            setloading(false)
        }
        
        
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
                    {SearchAirList()}
                </div>
            </Fragment>
        )
    }

    const SearchAirList = () => {
        if(props.searches.length!==0){
            return props.searches.map(data => {
                    return (
                        <div className='item' key={data._id}>
                            <AirSearchView data={data}></AirSearchView>
                        </div>
                    )
                }
            )
        } else return <div>검색결과가 없습니다.</div>
        
        
    }

    return (
        <Fragment>
            {followOn&&myAirShow()}
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