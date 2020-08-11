import React, { Fragment } from "react";
import { connect } from "react-redux";
import { deleteBlock, deleteFollower } from "../../actions/index";

export const SubList = (props) => {
  const { cate } = props;

  const subOnClick = (e) => {
    e.preventDefault();
    if (props.isSignedIn) {
      props.deletePostFollower(props);
      alert("팔로잉을 해지하였습니다.");
    } else {
      alert("로그인후 사용해주세요.");
    }
  };

  const blocksOnClick = (e) => {
    e.preventDefault();
    if (props.isSignedIn) {
      props.deletePostBlock(props);
      alert("차단을 해지하였습니다.");
    } else {
      alert("로그인후 사용해주세요.");
    }
  };
  const btn_Subs = (cate) => {
    if (cate === "blocks") {
      return (
        <button type="submit" className="btn_block_off" onClick={blocksOnClick}>
          해지
        </button>
      );
    } else if (cate === "subs") {
      return (
        <button type="submit" className="btn_follow_off" onClick={subOnClick}>
          팔로잉
        </button>
      );
    }
  };

  return (
    <Fragment>
      <div className="user_list_container">
        <div className="user_list_suboff">
          <a
            href={props.data.creatorDataHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="user_list_airview_img"
              src={props.data.creatorDataLogo}
              alt="CreatorImg"
            ></img>
          </a>
        </div>
        <div className="user_list_title">{props.data.creatorDataName}</div>
        <div className="user_list_platform">
          {props.data.platform.toUpperCase()}
        </div>
        {btn_Subs(cate)}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
  auth: state.auth,
});

const mapDispatchToProps = {
  deletePostFollower: deleteFollower,
  deletePostBlock: deleteBlock,
};

export default connect(mapStateToProps, mapDispatchToProps)(SubList);
