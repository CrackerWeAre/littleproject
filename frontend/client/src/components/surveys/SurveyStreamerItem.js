import React from 'react';

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