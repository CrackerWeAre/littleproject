import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

export const DailyInfo = () => {
    return (
        <Fragment>
            <div className="result_container">
            <div className="result_contents">
            <div className="result_content">
                        <div className="result_key">
                            일 방송 시간
                        </div>
                        <div className="result_value">
                            4시간
                        </div>
                        <div className="result_icon">
                           >>>>>>
                        </div>
                    </div>
                    <div className="result_content">
                        
                        <div className="result_key">
                            일 평균 시청자 수
                        </div>
                        <div className="result_value">
                            4200명
                        </div>
                        <div className="result_icon">
                            >>>>>>
                        </div>
                    </div>
                    <div className="result_content">
                        <div className="result_key">
                            일 최고 시청자 수
                        </div>
                        <div className="result_value">
                            29360명
                        </div>
                        <div className="result_icon">
                            >>>>>>
                        </div>
                    </div>
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
