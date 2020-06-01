import React from 'react'
import '../../style/Drawer.css'
import { connect } from 'react-redux'
import Footer from '../navigation/Footer';
import DrawerView from './DrawerView'
const Drawer = (props) => {

    const followingList = () => {
        
        return props.myairs.map(data => {
            return (

                <DrawerView data={data} key={data._id}></DrawerView>

            ) 
        })
    }
    
    const categories = () => {
        return (
            <div>
                카테고리
                <li>
                    <ul>
                        영화
                    </ul>
                    <ul>
                        게임
                    </ul>
                    <ul>
                        음악
                    </ul>
                    <ul>
                        라디오
                    </ul>
                    <ul>
                        방송
                    </ul>
                </li>
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
