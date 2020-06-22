import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCateAirs } from '../../actions'
import AirView from './AirView'
import '../../style/css/AirList.css'


const AirCateList = (props) => {
    
    useEffect(() => {
        if(props.data){
            const data = props.data
            props.fetchCateAirs(data.toUpperCase() )
        }
        
    }, [props.data])
    
    const AirShow = () => {
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

    const AirList = () => {
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
    return(
        <Fragment>
            {AirShow()}
        </Fragment>
    )
}



const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        cateairs: Object.values(state.cateairs),
        followings: state.followings,
        user: state.auth
    }
}

export default connect(mapStateToProps, { fetchCateAirs })(AirCateList);