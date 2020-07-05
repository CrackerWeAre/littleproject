import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

export const DailyInfo = () => {
    return (
        <Fragment>
            <div className="result_container">
                
                <div className="result_contents">
                    일일 시청자수
                </div>
                
                <div className="result_contents">
                    일일 플레이 정보
                </div>
                
                <div className="result_contents">
                    일일 방송 시간 
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(DailyInfo)
