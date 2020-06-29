import React, { Fragment } from 'react'
import { connect } from 'react-redux'

export const SubList = (props) => {
    return (
        <Fragment>
            <div className="container_mylist">
                <div className="mylist_title">
                    스트리머 이름
                </div>
                <div className="mylist_platform">
                    플랫폼
                </div>
                <div className="mylist_subsoff">
                    상세히보기
                </div>
                <div className="mylist_subsoff">
                    구독해제
                </div>
                <div className="mylist_blockoff">
                    차단해제
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SubList)
