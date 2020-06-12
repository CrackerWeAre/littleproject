import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import AirView from '../air/AirView'

function UserPage(props) {

    const myBlockList = () => {
        if(props.mybloairs.length!==0){
            return props.mybloairs.map(data => {
                    return (
                        <div className='item' key={data._id}>
                            <AirView data={data}></AirView>
                        </div>
                    )
                
            })
        } else return <div>현재 방송중인 채널이 없습니다.</div>
        
    }

    const block = () => {
        console.log(props.mybloairs)
        if(props.mybloairs.length!==0){
            return (
                <Fragment>
                    <div className="container_title">
                        블락중인 채널
                    </div>
                    <div className="airlist_container">
                        {myBlockList()}
                    </div>
                </Fragment>
            )
        }
        
    }
    return (
        <div>
            {block()}
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        mybloairs: Object.values(state.mybloairs),
        user: state.auth
    }
}

export default connect(mapStateToProps, { })(UserPage);


