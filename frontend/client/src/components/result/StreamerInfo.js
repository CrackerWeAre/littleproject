import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

export const StreamerInfo = () => {
    return (
        <Fragment>
            <div className="result_container">
                <div className="result_contents">
                    <div className="result_logo">
                        Logo
                    </div>
                    <div className="result_content">
                        <div className="result_item">
                            이름
                        </div>
                        <div className="result_item">
                            팔로워수(구독자수)
                        </div>
                    </div>
                    <div className="result_content_sub">
                        <div>평균 시청자수</div>
                        <div>주 언어</div>
                    </div>
                </div>
                <div className="result_contents"> 
                    <div className="result_content">
                        <div className="channel_header">
                            채널 소개
                        </div>
                        <div className="channel_description">
                            채널 내용
                        </div>
                        <div className="channel_description">
                            채널 언어
                        </div>
                        <div className="result_content">
                            채널 생성일
                        </div>
                    </div>
                </div>
                <div className="result_contents">
                    <div className="result_content">
                        <div className="result_key">
                            주 방송 시간
                        </div>
                        <div className="result_value">
                            56시간
                        </div>
                        <div className="result_icon">
                           >>>>>>
                        </div>
                    </div>
                    <div className="result_content">
                        
                        <div className="result_key">
                            주 평균 시청자 수
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
                            주 최고 시청자 수
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

export default connect(mapStateToProps, mapDispatchToProps)(StreamerInfo)
