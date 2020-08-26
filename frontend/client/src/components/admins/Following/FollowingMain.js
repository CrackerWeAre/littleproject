import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import SubList from '../SubList'

function FollowingMain(props) {
    const mySubList = () => {
        if (props.myfollowings.length !== 0) {
          return props.myfollowings.map((data) => {
            return (
              <div className="user_item" key={data._id}>
                <SubList data={data} cate="subs"></SubList>
              </div>
            );
          });
        }
      };
    
    const subs = () => {
        if (props.myfollowings.length !== 0) {
            return (
            <Fragment>
                <div className="container_title">팔로우중인 채널</div>
                <div className="user_airlist_contanier">{mySubList()}</div>
            </Fragment>
            );
        }
    };
    return (
        <div  className="myPage_following">
            {subs()}
        <div className="user_item"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
        myfollowings: Object.values(state.myairs),
        user: state.auth,
        }
}

export default connect(mapStateToProps,)(FollowingMain);
