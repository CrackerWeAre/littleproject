import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/css/Drawer.css";
import { connect } from "react-redux";
import Footer from "../navigation/Footer";
import DrawerView from "./DrawerView";

import logo from "../../style/img/category/game.png";
import Logo_MUSIC from "../../style/img/category/music.png";
import Logo_AIR from "../../style/img/category/air.png";
import Logo_CHATTING from "../../style/img/category/chatting.png";
import Logo_NEWS from "../../style/img/category/news.png";
import Logo_SHOPPING from "../../style/img/category/shopping.png";
import Logo_SPORTS from "../../style/img/category/sports.png";
import Logo_COOKING from "../../style/img/category/cooking.png";
import Logo_HOME from "../../style/img/category/home.png";
import Logo_THUMBSUP from "../../style/img/category/thumbs-up.png";
import Logo_CALENDAR from "../../style/img/category/calendar.png";

const Drawer = (props) => {
  const [classModeName, setModeclassName] = useState("initialState");

  useEffect(() => {
    props.darkmode
      ? setModeclassName("drawer dark")
      : setModeclassName("drawer");
  }, [props.darkmode]);

  const following = () => {
    if (props.myairs.length !== 0) {
      return (
        <Fragment>
          <div className="drawer_followerlist">팔로잉</div>
          {followingList()}
          <div className="border_bottom">&nbsp;</div>
        </Fragment>
      );
    }
    return;
  };

  const followingList = () => {
    return props.myairs.map((data) => {
      return <DrawerView data={data} key={data._id}></DrawerView>;
    });
  };

  const mains = () => {
    return (
      <Fragment>
        <Link to={"/"}>
          <div className="category_item">
            <div className="contents">
              <i class="fas fa-home logo" alt="home" title="홈"></i>
              <span className="category_name">홈</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/following"}>
          <div className="category_item">
            <div className="contents">
              <i
                className="far fa-thumbs-up logo"
                alt="following"
                title="팔로잉"
              ></i>
              <span className="category_name">팔로잉</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/schedule"}>
          <div className="category_item">
            <div className="contents">
              <i
                class="far fa-calendar-alt logo"
                alt="calender"
                title="편성표"
              ></i>
              <span className="category_name">편성표</span>
            </div>
          </div>
        </Link>
        <div className="border_bottom">&nbsp;</div>
      </Fragment>
    );
  };

  const categories = () => {
    return (
      <Fragment>
        <Link to={"/main/directory/game"}>
          <div className="category_item">
            <div className="contents">
              <i class="fas fa-gamepad logo" alt="game" title="게임"></i>
              <span className="category_name">게임</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/music"}>
          <div className="category_item">
            <div className="contents">
              <i
                class="fas fa-headphones-alt logo"
                alt="music"
                title="음악"
              ></i>
              <span className="category_name">음악</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/chatting"}>
          <div className="category_item">
            <div className="contents">
              <i class="fas fa-comments logo" alt="chatting" title="소통"></i>
              <span className="category_name">소통</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/shopping"}>
          <div className="category_item">
            <div className="contents">
              <i
                class="fas fa-shopping-cart logo"
                alt="shopping"
                title="쇼핑"
              ></i>
              <span className="category_name">쇼핑</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/news & info"}>
          <div className="category_item">
            <div className="contents">
              <i class="fas fa-newspaper logo" alt="news" title="뉴스/정보"></i>
              <span className="category_name">뉴스/정보</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/air & radio"}>
          <div className="category_item">
            <div className="contents">
              <i class="fas fa-tv logo" alt="air" title="공중파"></i>
              <span className="category_name">공중파</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/sports & exercise"}>
          <div className="category_item">
            <div className="contents">
              <i
                class="fas fa-running logo"
                alt="sports"
                title="스포츠/운동"
              ></i>
              <span className="category_name">스포츠/운동</span>
            </div>
          </div>
        </Link>
        <Link to={"/main/directory/cooking"}>
          <div className="category_item">
            <div className="contents">
              <i class="fas fa-utensils logo" alt="cooking" title="요리"></i>
              <span className="category_name">요리</span>
            </div>
          </div>
        </Link>
        <div className="border_bottom">&nbsp;</div>
      </Fragment>
    );
  };

  return (
    <div className={classModeName}>
      {mains()}
      {following()}
      <div className="category_list">카테고리</div>
      {categories()}
      <Footer></Footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    airs: Object.values(state.airs),
    myairs: Object.values(state.myairs),
    followings: state.followings,
    user: state.auth,
    darkmode: state.maintheme.darkmode,
  };
};

export default connect(mapStateToProps)(Drawer);
