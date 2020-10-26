import React, {Fragment} from 'react'
import { connect } from 'react-redux'
import SubList from '../SubList'

function BlockingMain(props) {
    const myBlockList = () => {
        if (props.mybloairs.length !== 0) {
          return props.mybloairs.map((data) => {
            return (
              <div className="user_item" key={data._id}>
                <SubList data={data} cate="blocks"></SubList>
              </div>
            );
          });
        }
      };
    
    
      const block = () => {
        if (props.mybloairs.length !== 0) {
          return (
            <Fragment>
              <div className="container_title">차단중인 채널</div>
              <div className="user_airlist_contanier">{myBlockList()}</div>
            </Fragment>
          );
        } else {
          return (
            <Fragment>
              <div className="container_title">차단중인 채널이 없습니다.</div>
            </Fragment>
          )
        }
      };

    return (
        <div className="myPage_blocking">
            {block()}
        <div className="user_item"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
        mybloairs: Object.values(state.mybloairs),
        }
}

export default connect(mapStateToProps,)(BlockingMain);
