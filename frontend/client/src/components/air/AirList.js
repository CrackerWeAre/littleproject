import React, { Fragment ,useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchAirs, getFollower, fetchFollowingAirs } from '../../actions'
import AirView from './AirView'
import '../../style/AirList.css'
import FlatList, {PlainList} from 'flatlist-react'

const AirList = (props) => {

    const [airs, setAirs] = useState([])
    const [numAirs, setNumAirs] = useState(10)
    const [folList, setFolList] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    useEffect(() => {
        setAirs(Array.from(props.airs.slice(0,10)))
        console.log(airs)
        setFolList(props.followings)
    }, [props.airs])


    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    useEffect(()=>{
        if (!isFetching) return;
        fetchMoreListItems();
    },[isFetching])

    const fetchMoreListItems = () => {
        setTimeout(()=>{
            setAirs(prevState => ( [...prevState, ...Array.from(props.airs.slice(numAirs,numAirs+10))]));
            setNumAirs(numAirs+10)
            setIsFetching(false);
        }, 2000)
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
               } else {
                   return (
                       <div className='item' key={data._id}>
                           <AirView data={data}></AirView>
                       </div>
                   )
               }
               
           })
       }
       
       
   }

    return (
        <Fragment>
            {myAirShow()}
            {AirShow()}
        </Fragment>
    )
}


const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        followings: state.followings,
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchAirs, getFollower, fetchFollowingAirs })(AirList);