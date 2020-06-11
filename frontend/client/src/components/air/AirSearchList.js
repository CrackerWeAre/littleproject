import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import AirView from './AirView'
import '../../style/css/AirList.css'


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