import React, { Fragment, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../../style/css/Drawer.css';
import { connect } from 'react-redux';
import Footer from '../navigation/Footer';
import DrawerShortView from './DrawerShortView';

import Logo_GAME from '../../style/img/category/game.png';
import Logo_MUSIC from '../../style/img/category/music.png';
import Logo_AIR from '../../style/img/category/air.png';
import Logo_CHATTING from '../../style/img/category/chatting.png';
import Logo_NEWS from '../../style/img/category/news.png';
import Logo_SHOPPING from '../../style/img/category/shopping.png';
import Logo_SPORTS from '../../style/img/category/sports.png';
import Logo_COOKING from '../../style/img/category/cooking.png';
import Logo_HOME from '../../style/img/category/home.png';
import Logo_THUMBSUP from '../../style/img/category/thumbs-up.png';
import Logo_CALENDAR from '../../style/img/category/calendar.png';



const DrawerShort = (props) => {

    const [classModeName, setModeclassName] = useState('initialState')
    
    useEffect(() => {
        props.darkmode ? setModeclassName("drawershort dark") : setModeclassName("drawershort")
      
    }, [props.darkmode])

    const following = () => {
        
        if(props.myairs.length!==0){
            return (
            <Fragment>
                <div className="st_drawer_followerlist">
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
                <DrawerShortView data={data} key={data._id}></DrawerShortView>
            ) 
        })
        )
    }
    

    const categories = () => {
        return (
                <Fragment>
                    <Link to={'/directory/game'} >
                        <div className="st_category_item" >
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_GAME} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/music'} >
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_MUSIC} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/chatting'}>
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_CHATTING} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/shopping'} >
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_SHOPPING} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/news & info'}>
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_NEWS} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/air & radio'} >
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_AIR} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/sports & exercise'} >
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_SPORTS} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <Link to={'/directory/cooking'} >
                        <div className="st_category_item">
                            <div className="st_contents">
                                <img className="st_logo_game" src={Logo_COOKING} alt="logo" />
                            </div>
                        </div>
                    </Link>
                    <div className="border_bottom">&nbsp;</div>
                </Fragment>
        )
    }

    return (
       
            <div className={classModeName}>
                {following()}
                <div className="st_category_list">
                    카테고리
                </div>
                {categories()}
            
            </div>
 
    )
}

const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
        myairs: Object.values(state.myairs),
        followings: state.followings,
        user: state.auth,
        darkmode: state.maintheme.darkmode
    }
}

export default connect(mapStateToProps)(DrawerShort);