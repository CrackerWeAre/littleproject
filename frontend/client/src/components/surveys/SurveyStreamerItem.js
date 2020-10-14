import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";


const StreamerItem = ({ streamer }) => {
    return (
        <>
            <li>
              <label>
                <input type="checkbox" name="youtube" id="youtube" />
                <img
                  className="md-icon"
                  title={streamer.platform}
                  alt={streamer.platform}
                  src={youtube}
                />
                <span className="checkmark">{streamer.platform}</span>
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
                  src={streamer.creatorDataLogo}
                  alt=""
                />
              </div>
              <div className="streamer__title">{streamer.creatorDataName}</div>
            </li>
        </>
    );
}

export default StreamerItem;