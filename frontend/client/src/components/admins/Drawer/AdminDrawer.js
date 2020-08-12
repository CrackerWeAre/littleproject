import React, {Fragment} from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {signOut} from '../../../actions/user'

function AdminDrawer(props) {
    return (
        <div className="drawer">
            <Link to={"/"}>
                <div className="category_item">
                    <div className="contents">
                    <i className="fas fa-home logo" alt="home" title="홈"></i>
                    <span className="category_name">홈</span>
                    </div>
                </div>
            </Link>
            <Link to={"/mypage"}>
                <div className="category_item">
                    <div className="contents">
                    <i className="fas fa-home logo" alt="home" title="홈"></i>
                    <span className="category_name">마이 프로필</span>
                    </div>
                </div>
            </Link>
            <Link to={"/mypage/following"}>
                <div className="category_item">
                    <div className="contents">
                    <i
                        className="far fa-thumbs-up logo"
                        alt="following"
                        title="팔로잉"
                    ></i>
                    <span className="category_name">내 팔로워</span>
                    </div>
                </div>
            </Link>
            <Link to={"/mypage/blocking"}>
                <div className="category_item">
                    <div className="contents">
                    <i
                        className="far fa-calendar-alt logo"
                        alt="calender"
                        title="편성표"
                    ></i>
                    <span className="category_name">내 차단</span>
                    </div>
                </div>
            </Link>
            <Link to={"/mypage/tags"}>
                <div className="category_item">
                    <div className="contents">
                    <i
                        className="far fa-calendar-alt logo"
                        alt="calender"
                        title="편성표"
                    ></i>
                    <span className="category_name">내 태그</span>
                    </div>
                </div>
            </Link>
            <Link to={"/mypage/settings"}>
                <div className="category_item">
                    <div className="contents">
                    <i
                        className="far fa-calendar-alt logo"
                        alt="calender"
                        title="편성표"
                    ></i>
                    <span className="category_name">내 설정</span>
                    </div>
                </div>
            </Link>
            
        
            <div className="category_item" onClick={props.signOut}>
                <div className="contents">
                <i
                    className="far fa-calendar-alt logo"
                    alt="calender"
                    title="편성표"
                ></i>
                <span className="category_name">로그아웃</span>
                </div>
            </div>
          
        <div className="border_bottom">&nbsp;</div>
      </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
        
        }
}

export default connect(mapStateToProps,{ signOut })(AdminDrawer);
