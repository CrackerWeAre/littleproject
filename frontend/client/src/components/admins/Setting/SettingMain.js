import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { darkModeSet, liveModeSet } from '../../../actions/index'

function SettingMain(props) {
  
      const [dark, setdarkmode] = useState(null);
      const [live, setlivemode] = useState(null);
      const darkmodeClick = () => {
        props.darkModeSet(props.darkmode);
      };

      const livemodeClick = () => {
        props.liveModeSet(props.livemode);
      };
    
      useEffect(() => {
        setdarkmode(props.darkmode);
        setlivemode(props.livemode)
        darkmodeButton();
        livemodeButton();
      }, []);
    
      const darkmodeButton = () => {
        if (props.darkmode) {
          return (
            <label className="switch">
              <input
                type="checkbox"
                checked={true}
                onChange={darkmodeClick}
              ></input>
              <span className="slider round"></span>
            </label>
          );
        } else {
          return (
            <label className="switch">
              <input
                type="checkbox"
                checked={false}
                onChange={darkmodeClick}
              ></input>
              <span className="slider round"></span>
            </label>
          );
        }
      };

      const livemodeButton = () => {
        if (props.livemode) {
          return (
            <label className="switch">
              <input
                type="checkbox"
                checked={true}
                onChange={livemodeClick}
              ></input>
              <span className="slider round"></span>
            </label>
          );
        } else {
          return (
            <label className="switch">
              <input
                type="checkbox"
                checked={false}
                onChange={livemodeClick}
              ></input>
              <span className="slider round"></span>
            </label>
          );
        }
      };

    return (
        <div className="myPage_setting">
            <div className="container_title">UI/UX 세팅</div>
            <div className="user_item">
              <div className="user_list_container">
                <div className="user_setting_title">
                  다크모드
                </div>
                
                <div className="user_setting_button">
                  {dark!==null&&darkmodeButton()}
                </div>
              </div>
            </div>
            <div className="user_item">
              <div className="user_list_container">
                  <div className="user_setting_title">
                    라이브뷰 모드
                  </div>
                  
                  <div className="user_setting_button">
                    {live!==null&&livemodeButton()}
                  </div>
                </div>
            </div>
            <div className="user_item"></div>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
      darkmode: state.maintheme.darkmode,
      livemode: state.maintheme.liveview
        }
}

export default connect(mapStateToProps,{darkModeSet, liveModeSet})(SettingMain);
