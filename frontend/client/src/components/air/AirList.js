import React, { Fragment ,useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAirs, getFollower, fetchFollowingAirs } from '../../actions'
import AirView from './AirView'
import '../../style/css/AirList.css'
import spinner from '../../style/img/spinner.png'

const AirList = (props) => {

    const [airs, setAirs] = useState([])
    const [loading, setloading] = useState(false)
    const [numAirs, setNumAirs] = useState(10)
    const [isFetching, setIsFetching] = useState(false)
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
    

    return (
        <Fragment>
            {myAirShow()}
            {AirShow()}
            {loading&&<div className="div_spinner_air"><img className="spinner_air" src = {spinner} alt="spinner"></img></div>}
        </Fragment>
    )
}


const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        followings: state.followings,
        blocking: state.blockairs,
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, getFollower, fetchFollowingAirs })(AirList);