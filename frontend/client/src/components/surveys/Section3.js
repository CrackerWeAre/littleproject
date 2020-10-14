import React from "react";
import ArrowButton from "./ArrowButton";
import "../../style/css/section3.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";

import SurveyStreamerList from './SurveyStreamer';

const Section3 = () => {
  return (

    <section id="section-3">
      <div id="title">
        <h1>
          <span>관심 스트리머</span> 선택
        </h1>
        <p>관심 스트리머를 선택해주세요!</p>
      </div>
      <SurveyStreamerList></SurveyStreamerList>

      {/* <div className="container__byplatform">
        <ul className="container__streamer youtube">
          <div>
            <li>
              <label>
                <input type="checkbox" name="youtube" id="youtube" />
                <img
                  className="md-icon"
                  title="YouTube"
                  alt="YouTube"
                  src={youtube}
                />
                <span className="checkmark">YouTube</span>
              </label>
            </li>
            <li>
              <label id="mini-search">
                <form className="nav__searchbox">
                  <input
                    type="search"
                    className="search_input"
                    placeholder="검색"
                  />
                  <button type="submit" className="search_button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>{" "}
              </label>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">LCK_Korea</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">LCK_Korea</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg"
                  alt=""
                />
              </div>
              <div className="streamer__title">풍월량</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">따효니</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">따효니</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">따효니</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">따효니</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">우왁굳</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">따효니</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">우왁굳</div>
            </li>
          </div>
        </ul>

        <ul className="container__streamer twitch">
          <div>
            <li>
              <label>
                <input type="checkbox" name="twitch" id="twitch" />
                <img
                  className="md-icon"
                  title="Twitch"
                  alt="Twitch"
                  src={twitch}
                />
                <span className="checkmark">Twitch</span>
              </label>
            </li>
            <li>
              <label id="mini-search">
                <form className="nav__searchbox">
                  <input
                    type="search"
                    className="search_input"
                    placeholder="검색"
                  />
                  <button type="submit" className="search_button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </label>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">LCK_Korea</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg"
                  alt=""
                />
              </div>
              <div className="streamer__title">풍월량</div>
            </li>
          </div>
        </ul>

        <ul className="container__streamer afreeca">
          <div>
          <li>
              <label>
                <input type="checkbox" name="twitch" id="twitch" />
                <img
                  className="md-icon"
                  title="Afreeca"
                  alt="Afreeca"
                  src={afreecatv}
                />
                <span className="checkmark">Afreeca</span>
              </label>
            </li>
            <li>
              <label id="mini-search">
                <form className="nav__searchbox">
                  <input
                    type="search"
                    className="search_input"
                    placeholder="검색"
                  />
                  <button type="submit" className="search_button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </form>
              </label>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">LCK_Korea</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg"
                  alt=""
                />
              </div>
              <div className="streamer__title">풍월량</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">따효니</div>
            </li>
            <li>
              <div className="streamer__logo">
                <img
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png"
                  alt=""
                />
              </div>
              <div className="streamer__title">우왁굳</div>
            </li>
          </div>
        </ul>
      </div> */}
      <button type="submit" className="submit-btn">전체보기</button>

      <ArrowButton />
    </section>
  );
};

export default Section3;
