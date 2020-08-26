import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import Tag from './Tag'

export const SurveyLive = () => {
    const [cateitems, setcateitems] = useState([])
    const [tagitems, settagitems] = useState([])
    
    const addClick = (data) => {
        setcateitems([...cateitems, data])
        console.log(cateitems)
    }

    const subClick = (data) => {
        setcateitems(cateitems.filter(item => item !== data))
        console.log(cateitems)
    }

    const addItemClick = (data) => {
        settagitems([...cateitems, data])
        console.log(cateitems)
    }

    const subItemClick = (data) => {
        settagitems(tagitems.filter(item => item !== data))
        console.log(tagitems)
    }

    const submitClick = () => {
        console.log(cateitems)
        console.log(tagitems)
    }

    const onSubmit = () => {
        console.log(cateitems)
        console.log(tagitems)
    }
    
    const items = (Data) => {

        return Data.map(item => {

                return <Tag data={item} addClick={addClick} subClick={subClick}></Tag>
            }
            
        )
    }

    const dataset = {"game":["리그오브레전드","하스스톤","스타크래프트"],"channel":["풍월량", "얍얍", "대도서관"],"공중파":["예능","드라마","실시간뉴스"]}
    
    const itemlist = (cateitems) => {
        return cateitems.map(category => {
            if(dataset[category]){
                
                return dataset[category].map(item => {
                    console.log(item)
                    return <Tag key={item} data={item} addClick={addItemClick} subClick={subItemClick}></Tag>
                })
            }
        })
    }


    
    return (
        
        <div className="survey_container">
            라이브 선택
            <div className="account">
                <div className="account__form">
                    <form onSubmit={onSubmit}>
                        <div className="box">
                            <div className="account__head">
                            <h2>라이브 선택</h2>
                            </div>
                            <div className="account__field">
                                <label htmlFor="username" className="hidden">카테고리 선택</label>
                            </div>
                            <div className="account__tagfield">
                                <div className="category__field">
                                
                                {items(["game","channel","공중파"])}
                                </div>
                                <div className="tags__field">
                                {itemlist(cateitems)}
                                </div>
                            </div>
                            <div className="account__button">
                                    <button
                                    type="submit"
                                    className="btn btn__block btn__gradient--primary"
                                    >
                                    <strong>제출하기</strong>
                                    </button>
                                </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyLive)
