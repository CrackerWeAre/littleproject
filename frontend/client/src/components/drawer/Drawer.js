import React from 'react'
import '../../style/Drawer.css'
import { connect } from 'react-redux'
import Footer from '../navigation/Footer';
import DrawerView from './DrawerView'
import {isMobile} from 'react-device-detect';

const Drawer = (props) => {

    const followingList = () => {
        
        return props.myairs.map(data => {
            return (

                <DrawerView data={data} key={data._id}></DrawerView>

            ) 
        })
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
            <div className="category_list">
                카테고리
                <ul>
                    <li>
                        영화
                    </li>
                    <li>
                        게임
                    </li>
                    <li>
                        음악
                    </li>
                    <li>
                        라디오
                    </li>
                    <li>
                        방송
                    </li>
                </ul>
            </div>
        )
    }
    return (
       
            <div className="drawer">
                <div className="drawer_followerlist">
                    팔로잉
                </div>
                <div>{followingList()}</div>
                <div>{categories()}</div>
                <Footer></Footer>
                <div>{test()}</div>
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
