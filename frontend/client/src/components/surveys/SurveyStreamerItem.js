import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";
import { directive } from "@babel/types";

const StreamerItem = ({ platform, streamers, onChange }) => {

  const platform_logo = {
    'afreecatv': afreecatv,
    'twitch': twitch,
    'youtube': youtube,
    'vlive': vlive,
  }
  
  return (
    <>
      <li>
        <label>
          <input type="checkbox" name={platform} id={platform} />
          <img
            className="md-icon"
            title={platform}
            alt={platform}
            src={platform_logo[platform]}
          />
          <span className="checkmark">{platform}</span>
        </label>
      </li>

      {/* <li>
        <label id="mini-search">
          <form className="nav__searchbox">
            <input type="search" className="search_input" placeholder="검색" />
            <button type="submit" className="search_button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>{" "}
        </label>
      </li> */}

      {streamers.map((streamer) => (
        <li key={streamer._id}>
        <label>
          <input  type="checkbox" title="streamer" name={streamer._uniq} checked={false} onClick={onChange}/>
            <div className="streamer__logo" >
              <img src={streamer.creatorDataLogo} alt="" />
              <div className="streamer__title">{streamer.creatorDataName}</div>
            </div>
          </label>
        </li>
      ))}
    </>
  );
};

export default StreamerItem;
