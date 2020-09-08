import React from "react";
import ArrowButton from "./ArrowButton";
import "../../style/css/section2.css";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";
import b2 from "../../style/img/b2.png";

const Section2 = () => {
  return (
    <section id="section-2">
      <div id="most-visited">
        <h1>MeerkatOnAir</h1>
        <h6>관심 플랫폼을 선택해주세요!</h6>
        <div id="mv-tiles">
          <div className="grid-tile-container" rid="1" add="false" index="0">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="1"
                data-pos="0"
                href="https://www.youtube.com/"
                title="YouTube"
              />
              <div className="md-tile-inner">
                <img className="md-icon" title="" alt="" src={ youtube } />
                <div className="md-title">
                  <span>YouTube</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="2" add="false" index="1">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="2"
                data-pos="1"
                href="https://www.twitch.tv/"
                title="Twitch"
              />
              <div className="md-tile-inner">
                <img className="md-icon" title="" alt="" src={ twitch } />
                <div className="md-title">
                  <span>Twitch</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="3" add="false" index="2">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="3"
                data-pos="2"
                href="https://www.afreecatv.com/"
                title="Afreeca"
              />
              <div className="md-tile-inner">
                <img className="md-icon" title="" alt="" src={ afreecatv } />
                <div className="md-title">
                  <span>Afreeca</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="4" add="false" index="3">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="4"
                data-pos="3"
                href="https://vlive.com"
                title="Vlive"
              />
              <div className="md-tile-inner">
                <img className="md-icon" title="" alt="" src={ vlive } />
                <div className="md-title">
                  <span>Vlive</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="5" add="false" index="4">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="5"
                data-pos="4"
                href="https://shoppinglive.naver.com"
                title="Naver Selective"
              />
              <div className="md-tile-inner">
                <img
                  className="md-icon"
                  title=""
                  alt=""
                  src=""
                />
                <div className="md-title">
                  <span>N Selective</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="6" add="false" index="5">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="6"
                data-pos="5"
                href="https://now.naver.com"
                title="Naver Now"
              />
              <div className="md-tile-inner">
                <img
                  className="md-icon"
                  title=""
                  alt=""
                  src=""
                />
                <div className="md-title">
                  <span>N Now</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="7" add="false" index="6">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="7"
                data-pos="6"
                href="https://tv.kakao.com/"
                title="Kakao TV"
              />
              <div className="md-tile-inner">
                <img
                  className="md-icon"
                  title=""
                  alt=""
                  src=""
                />
                <div className="md-title">
                  <span>KaKao TV</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-tile-container" rid="8" add="false" index="7">
            <div className="grid-tile">
              <input
                type="checkbox"
                className="md-tile"
                data-rid="8"
                data-pos="7"
                href="http://media.tmon.co.kr/schedule"
                title="TV ON"
              />
              <div className="md-tile-inner">
                <img
                  className="md-icon"
                  title=""
                  alt=""
                  src=""
                />
                <div className="md-title">
                  <span>TV ON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ArrowButton />
    </section>
  );
};

export default Section2;
