import React, { Component } from 'react'
import { connect } from 'react-redux'

export const SurveyLive = () => {
    return (
        <div className="survey_container">
            라이브 선택
            <div className="survey_category">
                태그 선택
            </div>
            <div className="survey_category">
                여러개
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyLive)
