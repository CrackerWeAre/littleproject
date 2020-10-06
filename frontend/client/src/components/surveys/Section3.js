import React from "react";
import ArrowButton from "./ArrowButton";
import "../../style/css/section3.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";

const Section3 = () => {
  return (
    <section id="section-3">
      <div id="title">
      <h1><span>관심 스트리머</span> 선택</h1>
        <p>관심 스트리머를 선택해주세요!</p>
      </div>

      <nav className="nav__platform">
        <div className="nav__search">
          <form className="nav__searchbox">
            <input type="search" className="search_input" placeholder="검색" />
            <button type="submit" className="search_button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
      </nav>

      <div className="container__byplatform">
        <ul className="container__streamer youtube">
          <li>
            <label>
              <input type="checkbox" name="youtube" id="youtube" />
              <img
                className="md-icon"
                title="YouTube"
                alt="YouTube"
                src={youtube}
              />
              <span class="checkmark">YouTube</span>
            </label>
          </li>
          <div>
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
          </div>
          <li>
            <label>
              <span class="checkmark">NEXT PAGE</span>
            </label>
          </li>
        </ul>

        <ul className="container__streamer twitch">
          <li>
            <label>
              <input type="checkbox" name="youtube" id="youtube" />
              <img
                className="md-icon"
                title="Twitch"
                alt="Twitch"
                src={twitch}
              />
              <span class="checkmark">Twitch</span>
            </label>
          </li>

          <div>
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
          <li>
            <label>
              <input type="checkbox" name="youtube" id="youtube" />
              <img
                className="md-icon"
                title="Afreeca"
                alt="Afreeca"
                src={afreecatv}
              />{" "}
              <span class="checkmark">
                {" "}
                <span>Afreeca</span>
              </span>
            </label>
          </li>

          <div>
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

        
      </div>

      <button type="submit" class="submit-btn">제출하기</button>

      

      <ArrowButton />
    </section>
  );
};

export default Section3;
