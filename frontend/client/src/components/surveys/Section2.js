import React, { useState, useCallback } from "react";
import ArrowButton from "./ArrowButton";
import "../../style/css/section2.css";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = useCallback(
    (e) => {
      if (e.target.checked === true) {
        setIsChecked(e.target.checked);
        e.target.parentElement.style.boxShadow =
          "inset -3px -3px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1)";
        e.target.parentElement.style.transfrom = "scale(0.95)";
        e.target.nextElementSibling.style.color = "#fbb30f";
      } else {
        setIsChecked(!isChecked);
        e.target.parentElement.style.boxShadow = "";
        e.target.parentElement.style.transfrom = "";
        e.target.nextElementSibling.style.color = "";
      }
    },
    [isChecked]
  );

  return (
    <section id="section-2">

<h1>
          <span>관심 플랫폼</span> 선택
        </h1>
        <p>관심 플랫폼을 선택해주세요!</p>

        <ul>
          <li>
            <label>
              <input
                type="checkbox"
                name="youtube"
                id="youtube"
                checked={isChecked}
                onChange={onChange}
              />
                <img
                  className="md-icon"
                  title="YouTube"
                  alt="YouTube"
                  src={youtube}
                />              <span className="checkmark">Youtube</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="twitch"
                id="twitch"
                checked={isChecked}
                onChange={onChange}
              />
                <img
                  className="md-icon"
                  title="Twitch"
                  alt="Twitch"
                  src={twitch}
                />              <span className="checkmark">Twitch</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="afreeca"
                id="afreeca"
                checked={isChecked}
                onChange={onChange}
              />
                <img
                  className="md-icon"
                  title="Afreeca"
                  alt="Afreeca"
                  src={afreecatv}
                />              <span className="checkmark">Afreeca TV</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="vlive"
                id="vlive"
                checked={isChecked}
                onChange={onChange}
              />
                <img
                  className="md-icon"
                  title="Vlive"
                  alt="Vlive"
                  src={vlive}
                />              
                <span className="checkmark">Vlive</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="naver selective"
                id="naver selective"
                checked={isChecked}
                onChange={onChange}
              />
                <div
                  className="md-icon"
                  title="Naver Selective"
                  alt="Naver Selective"
                />               <span className="checkmark">Naver Selective</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="naver now"
                id="naver now"
                checked={isChecked}
                onChange={onChange}
              />
             
                                <div className="md-icon" title="Naver Now" alt="Naver Now" />

                <span className="checkmark">Naver Now</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="checkbox"
                name="kakao tv"
                id="kakao tv"
                checked={isChecked}
                onChange={onChange}
              />
                <div className="md-icon" title="Kakao TV" alt="Kakao TV" />
              <span className="checkmark">Kakao TV</span>
            </label>
          </li>
        </ul>
      <ArrowButton />
    </section>
  );
};

export default Section2;
