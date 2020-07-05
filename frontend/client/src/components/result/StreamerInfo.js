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
                    채널정보
                    <div className="result_content">
                        <div>
                            채널 생성일
                        </div>
                        <div>
                            채널 소개
                        </div>
                        <div>
                            채널 페이지
                        </div>
                    </div>
                </div>
                <div className="result_contents">
                    방송정보
                    <div  className="result_content">
                        <div>
                            총 방송 시간
                        </div>
                        <div>
                            가장 많이 방송한 정보
                        </div>
                        <div>
                            일주일 간 방송일
                        </div>
                        <div>
                            평소 방송 시작시간
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
