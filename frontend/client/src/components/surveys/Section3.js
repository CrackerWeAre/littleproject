import React from "react";
import ArrowButton from "./ArrowButton";
import "../../style/css/section3.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Section3 = () => {
  return (
    <section id="section-3">
      <nav className="nav__platform">
        <div className="nav__search">
            <form className="nav__searchbox">
                <input type="search" className="search_input" placeholder="검색"/>
                    <button type="submit" className="search_button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
            </form>
        </div>
      </nav>

      <div className="container__byplatform">
        <ul className="container__streamer youtube">
          <li>
            <i className="fab fa-youtube"></i>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">LCK_Korea</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg" alt="" />
            </div>
            <div className="streamer__title">풍월량</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">따효니</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">우왁굳</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">LCK_Korea</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg" alt="" />
            </div>
            <div className="streamer__title">풍월량</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">따효니</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">우왁굳</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">LCK_Korea</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg" alt="" />
            </div>
            <div className="streamer__title">풍월량</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">따효니</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">우왁굳</div>
          </li>
        </ul>

        <ul className="container__streamer twitch">
          <li>
            <i className="fab fa-twitch"></i>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/bd6d67a8-5571-4e91-acd1-b0bc10dbff14-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">LCK_Korea</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/hanryang1125-profile_image-58261d78af47d249-300x300.jpeg" alt="" />
            </div>
            <div className="streamer__title">풍월량</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/9433d62c-2c38-44fe-9e8f-6875a23aaac4-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">따효니</div>
          </li>
          <li>
            <div className="streamer__logo">
              <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ebc60c08-721b-4572-8f51-8be7136a0c96-profile_image-300x300.png" alt="" />
            </div>
            <div className="streamer__title">우왁굳</div>
          </li>
        </ul>
      </div>
      

      
      <ArrowButton />
    </section>
  );
};

export default Section3;
