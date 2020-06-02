import React, { Fragment } from 'react'
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
                <Fragment>
                    <div className="category_item">
                        게임
                    </div>
                    <div className="category_item">
                        음악
                    </div>
                    <div className="category_item">
                        소통
                    </div>
                    <div className="category_item">
                        쇼핑
                    </div>
                    <div className="category_item">
                        뉴스/정보
                    </div>
                    <div className="category_item">
                        공중파
                    </div>
                    <div className="category_item">
                        스포츠/운동
                    </div>
                    <div className="category_item">
                        요리
                    </div>
                    
                </Fragment>
        )
    }
    return (
       
            <div className="drawer">
                <div className="drawer_followerlist">
                    팔로잉
                </div>
                {followingList()}
                <div className="category_list">
                    카테고리
                </div>
                {categories()}
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
