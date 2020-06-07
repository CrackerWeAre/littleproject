import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import '../../style/Drawer.css'
import { connect } from 'react-redux'
import Footer from '../navigation/Footer';
import DrawerView from './DrawerView'
import {isMobile} from 'react-device-detect';

const Drawer = (props) => {

    const following = () => {
        
        if(props.myairs.length!==0){
            return (<div className="drawer_followerlist">
                    팔로잉
                </div>)
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
    
    const test = () => {
        if(isMobile){
            return <div>phone에서 실행중</div>
        }else{
            return <div>web에서 실행중</div>
        }
        
    }

    const categories = () => {
        return (
                <Fragment>
                    
                    <div className="category_item" >
                        <Link to={'/directory/game'} >게임</Link>
                    </div>
                    <div className="category_item">
                        <Link to={'/directory/music'} >음악</Link>
                    </div>
                    <div className="category_item">
                        <Link to={'/directory/chatting'}>소통</Link>
                    </div>
                    <div className="category_item">
                        <Link to={'/directory/shopping'} >쇼핑</Link>
                    </div>
                    <div className="category_item">
                        <Link to={'/directory/news & info'}>뉴스/정보</Link>
                    </div>
                    <div className="category_item">
                        <Link to={'/directory/air & radio'} >공중파</Link>
                    </div>
                    <div className="category_item">
                        <Link to={'/directory/sports & exercise'} >스포츠/운동</Link>
                    </div>
                    <div className="category_item">
                    <   Link to={'/directory/cooking'} >요리</Link>
                    </div>
                    
                </Fragment>
        )
    }
    return (
       
            <div className="drawer">
                {following()}
                {followingList()}
                <div className="category_list">
                    카테고리
                </div>
                {categories()}
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
