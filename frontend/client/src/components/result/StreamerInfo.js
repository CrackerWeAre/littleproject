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
                            <div className="result_content">
                                채널 생성일
                            </div>
                        </div>
                    </div>
                    <div className="result_content">
                        채널 페이지
                    </div>
                </div>
                <div className="result_contents">
                    <div className="result_content">
                        총 방송 시간
                    </div>
                    <div className="result_content">
                        가장 많이 방송한 정보
                    </div>
                    <div className="result_content">
                        일주일 간 방송일
                    </div>
                    <div className="result_content">
                        평소 방송 시작시간
                    </div>
                    <div className="result_content">
                        채널 최고 시청자수
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
