import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../style/css/Drawer.css";
import { connect } from "react-redux";
import DrawerShortView from "./DrawerShortView";

const DrawerShort = (props) => {
  const [classModeName, setModeclassName] = useState("initialState");

  useEffect(() => {
    props.darkmode
      ? setModeclassName("drawershort dark")
      : setModeclassName("drawershort");
  }, [props.darkmode]);

  const following = () => {
    if (props.myairs.length !== 0) {
      return (
        <Fragment>
          <div className="st_drawer_followerlist">팔로잉</div>
          {followingList()}
          <div className="border_bottom">&nbsp;</div>
        </Fragment>
      );
    }
    return;
  };

  const followingList = () => {
    return props.myairs.map((data) => {
      return <DrawerShortView data={data} key={data._id}></DrawerShortView>;
    });
  };

  const categories = () => {
    return (
      <Fragment>
        <Link to={"/directory/game"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i className="fas fa-gamepad logo" alt="game" title="게임"></i>
            </div>
          </div>
        </Link>
        <Link to={"/directory/music"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i
                className="fas fa-headphones-alt logo"
                alt="music"
                title="음악"
              ></i>{" "}
            </div>
          </div>
        </Link>
        <Link to={"/directory/chatting"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i
                className="fas fa-comments logo"
                alt="chatting"
                title="소통"
              ></i>
            </div>
          </div>
        </Link>
        <Link to={"/directory/shopping"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i
                className="fas fa-shopping-cart logo"
                alt="shopping"
                title="쇼핑"
              ></i>{" "}
            </div>
          </div>
        </Link>
        <Link to={"/directory/news & info"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i
                className="fas fa-newspaper logo"
                alt="news"
                title="뉴스/정보"
              ></i>
            </div>
          </div>
        </Link>
        <Link to={"/directory/air & radio"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i className="fas fa-tv logo" alt="air" title="공중파"></i>
            </div>
          </div>
        </Link>
        <Link to={"/directory/sports & exercise"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i
                className="fas fa-running logo"
                alt="sports"
                title="스포츠/운동"
              ></i>{" "}
            </div>
          </div>
        </Link>
        <Link to={"/directory/cooking"}>
          <div className="st_category_item">
            <div className="st_contents">
              <i
                className="fas fa-utensils logo"
                alt="cooking"
                title="요리"
              ></i>
            </div>
          </div>
        </Link>
        <div className="border_bottom">&nbsp;</div>
      </Fragment>
    );
  };

  return (
    <div className={classModeName}>
      {following()}
      <div className="st_category_list">카테고리</div>
      {categories()}
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

export default connect(mapStateToProps)(DrawerShort);
