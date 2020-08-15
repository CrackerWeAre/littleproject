import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tag from './Tag'

export const SurveyLive = () => {
    let cateitems = []

    const addClick = (data) => {
        cateitems.push(data)
        console.log(cateitems)
    }

    const subClick = (data) => {
        cateitems.pop(data)
        console.log(cateitems)
    }

    const submitClick = () => {
        console.log(cateitems)
    }
    const items = (Data) => {

        return Data.map(item => {

                return <Tag data={item} addClick={addClick} subClick={subClick}></Tag>
            }
            
        )
    }

    return (
        <div className="survey_container">
            라이브 선택
            <div className="survey_category">
                태그 선택
            </div>
            <div className="survey_live_items">
                {items(['hello','world'])}
            <div onClick={submitClick}>제출</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyLive)
