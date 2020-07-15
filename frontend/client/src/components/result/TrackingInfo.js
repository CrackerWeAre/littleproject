import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import MyResponsiveLine from './MyResponsiveLine'
import { MyCalander } from './MyCalander';
import { MyBar } from './MyBar';
export const TrackingInfo = () => {
    return (
        <Fragment>
            <div className="result_container">
                
                <div className="result_contents">
                    시청자수 변화 추이
                    시간, 일, 주, 월
                    <div className="data">
                        <MyResponsiveLine/>
                    </div>
                </div>
                <div className="result_contents"> 
                    시청 기록
                    <div className="data">

                        <MyCalander/>
                    </div>
                    
                </div>
                <div className="result_contents"> 
                    <div className="bardata">
                        평균 방송 일수
                        <MyBar/>
                    </div>
                    <div className="bardata">
                        평균 방송 시간
                        <MyBar/>
                    </div>
                    <div className="bardata">
                        평균 시청자 수
                        <MyBar/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TrackingInfo)
