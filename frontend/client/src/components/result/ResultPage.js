import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { StreamerInfo } from './StreamerInfo';
import { DailyInfo } from './DailyInfo';
import { TrackingInfo } from './TrackingInfo'
import "../../style/css/result.css"

export const ResultPage = () => {

    
    return (
        <Fragment>
            <StreamerInfo></StreamerInfo>
            <DailyInfo></DailyInfo>
            <TrackingInfo></TrackingInfo>
        </Fragment>
        
        
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage)
