import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const TrackingInfo = () => {
    return (
        <Fragment>
            <div className="result_container">
                
                <div className="result_contents">
                    구독자수 증감
                </div>
                
                <div className="result_contents"> 
                    시청 기록
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackingInfo)
