import React, { } from 'react'
import { connect } from 'react-redux'
import '../../style/css/Survey.css'
import { Link } from "react-router-dom";

export const MainSurvey = () => {
    return (
        <div className="survey_container">
            <div className="survey_title">
                <div className="survey_title_item">
                    <p>MeerkatOnAir</p>
                    <p>MeerkatOnAir에서 세상의 모든 온라인 라이브 방송을 찾아보세요. </p>
                    <p>인기 라이브 방송부터 나에게 맞는 라이브 방송까지 모든 플랫폼의 라이브 방송을 한 곳에서 모아서 보세요. </p>
                </div>
            </div>
            <div className="survey_contents">
                <div className="survey_content">
                    <Link to={"/survey/category"}>
                        <div className="survey_item">
                            카테고리 선택
                        </div>
                    </Link>
                </div>
                <div className="survey_content">
                    <Link to={"/survey/live"}>
                        <div className="survey_item">
                            라이브방송 선택
                        </div>
                    </Link>
                </div>
                <div className="survey_content">
                    <Link to={"/"}>
                        <div className="survey_item">
                            미어캣 둘러보기
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSurvey)
