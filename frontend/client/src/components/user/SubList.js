import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { deleteBlock, deleteFollower } from '../../actions/index'

export const SubList = (props) => {

    const { cate } = props

    const subOnClick = (e) => {
        e.preventDefault();
        if(props.isSignedIn){
            props.deletePostFollower(props)
            alert("팔로잉을 해지하였습니다.")
        }else{
            alert("로그인후 사용해주세요.");
        }
    }

    const blocksOnClick = (e) => {
        e.preventDefault();
        if(props.isSignedIn){
            props.deletePostBlock(props)
            alert("차단을 해지하였습니다.")
        }else{
            alert("로그인후 사용해주세요.");
        }
    }
    const btn_Subs = (cate) => {
        if(cate==="blocks"){
            return(
                <div className="mylist_btn" onClick={blocksOnClick}>
                    차단해지
                </div>
            )
        }else if(cate==="subs"){
            return(
                <div className="mylist_btn" onClick={subOnClick}>
                    팔로우해지
                </div>
            )
        }
    }

    
    return (
        <Fragment>
            <div className="container_mylist">
                <div className="mylist_title">
                    {props.data.creatorDataName}
                </div>
                <div className="mylist_platform">
                    {props.data.platform}
                </div>
                <div className="mylist_subsoff">
                상세히 보기
                    <a href={props.data.creatorDataHref} target='_blank' rel="noopener noreferrer">
                        <img className="airview_img"  src={props.data.creatorDataLogo} alt="CreatorImg"></img>
                    </a>
                </div>
                {btn_Subs(cate)}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn,
    auth: state.auth,
})

const mapDispatchToProps = {
    deletePostFollower: deleteFollower,
    deletePostBlock: deleteBlock,
}

export default connect(mapStateToProps, mapDispatchToProps)(SubList)
