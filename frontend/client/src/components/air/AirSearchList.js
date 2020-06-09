import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCateAirs } from '../../actions'
import AirView from './AirView'
import '../../style/AirList.css'


const AirSearchList = (props) => {
    
    const AirShow = () => {
        return (
            <Fragment>
                <div className="container_title">
                     {props.id}에 대한 검색결과
                </div>
                <div className="airlist_container">
                    {AirList()}
                </div>
            </Fragment>
        )
    }

    const AirList = () => {
        console.log(props.searches.length)
        if(props.searches.length!==0){
            return props.searches.map(data => {
                    return (
                        <div className='item' key={data._id}>
                            <AirView data={data}></AirView>
                        </div>
                    )
                }
            )
        } else return <div>검색결과가 없습니다.</div>
        
        
    }
    return(
        <Fragment>
            {AirShow()}
        </Fragment>
    )
}



const mapStateToProps = state =>{
    return {
        searches: Object.values(state.searches), 
        user: state.auth
    }
}

export default connect(mapStateToProps, {  })(AirSearchList);