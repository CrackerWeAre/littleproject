import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../../style/Drawer.css';
import { connect } from 'react-redux';
import Footer from '../navigation/Footer';
import DrawerView from './DrawerView';

import Logo_GAME from '../../style/logo/game.png';
import Logo_MUSIC from '../../style/logo/music.png';
import Logo_AIR from '../../style/logo/air.png';
import Logo_CHATTING from '../../style/logo/chatting.png';
import Logo_NEWS from '../../style/logo/news.png';
import Logo_SHOPPING from '../../style/logo/shopping.png';
import Logo_SPORTS from '../../style/logo/sports.png';
import Logo_COOKING from '../../style/logo/cooking.png';


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
                           <img className="logo_game" src={Logo_GAME} alt="logo" /><span className="category_name">게임</span>
                        </div>
                    </Link>
                    <Link to={'/directory/music'} >
                        <div className="category_item">
                            <img className="logo_game" src={Logo_MUSIC} alt="logo" /><span className="category_name">음악</span>
                        </div>
                    </Link>
                    <Link to={'/directory/chatting'}>
                        <div className="category_item">
                            <img className="logo_game" src={Logo_CHATTING} alt="logo" /><span className="category_name">소통</span>
                        </div>
                    </Link>
                    <Link to={'/directory/shopping'} >
                        <div className="category_item">
                            <img className="logo_game" src={Logo_SHOPPING} alt="logo" /><span className="category_name">쇼핑</span>
                        </div>
                    </Link>
                    <Link to={'/directory/news & info'}>
                        <div className="category_item">
                            <img className="logo_game" src={Logo_NEWS} alt="logo" /><span className="category_name">뉴스/정보</span>
                        </div>
                    </Link>
                    <Link to={'/directory/air & radio'} >
                        <div className="category_item">
                            <img className="logo_game" src={Logo_AIR} alt="logo" /><span className="category_name">공중파</span>
                        </div>
                    </Link>
                    <Link to={'/directory/sports & exercise'} >
                        <div className="category_item">
                            <img className="logo_game" src={Logo_SPORTS} alt="logo" /><span className="category_name">스포츠/운동</span>
                        </div>
                    </Link>
                    <Link to={'/directory/cooking'} >
                        <div className="category_item">
                            <img className="logo_game" src={Logo_COOKING} alt="logo" /><span className="category_name">요리</span>
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
