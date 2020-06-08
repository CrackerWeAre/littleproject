import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import '../../style/Drawer.css'
import { connect } from 'react-redux'
import Footer from '../navigation/Footer';
import DrawerView from './DrawerView'

const Drawer = (props) => {

    const following = () => {
        
        if(props.myairs.length!==0){
            return (
            <Fragment>
                <div className="drawer_followerlist">
                    팔로잉
                </div>
                {followingList()}
                <div className="border_bottom">&nbsp;</div>
            </Fragment>)
        }
        return
    }

    const followingList = () => {
        
        return (
            props.myairs.map(data => {
            return (
                <DrawerView data={data} key={data._id}></DrawerView>
            ) 
        })
        )
    }
    

    const categories = () => {
        return (
                <Fragment>
                    <Link to={'/directory/game'} >
                        <div className="category_item" >
                            게임
                        </div>
                    </Link>
                    <Link to={'/directory/music'} >
                        <div className="category_item">
                            음악
                        </div>
                    </Link>
                    <Link to={'/directory/chatting'}>
                        <div className="category_item">
                            소통
                        </div>
                    </Link>
                    <Link to={'/directory/shopping'} >
                        <div className="category_item">
                            쇼핑
                        </div>
                    </Link>
                    <Link to={'/directory/news & info'}>
                        <div className="category_item">
                            뉴스/정보
                        </div>
                    </Link>
                    <Link to={'/directory/air & radio'} >
                        <div className="category_item">
                            공중파
                        </div>
                    </Link>
                    <Link to={'/directory/sports & exercise'} >
                        <div className="category_item">
                            스포츠/운동
                        </div>
                    </Link>
                    <Link to={'/directory/cooking'} >
                        <div className="category_item">
                        요리
                        </div>
                    </Link>
                </Fragment>
        )
    }
    return (
       
            <div className="drawer">
                {following()}
                <div className="category_list">
                    카테고리
                </div>
                {categories()}
                <div className="border_bottom">&nbsp;</div>
                <Footer></Footer>
            
            </div>
 
    )
}

const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        followings: state.followings,
        user: state.auth
    }
}

export default connect(mapStateToProps)(Drawer);
