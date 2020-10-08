import React, { useState, useCallback } from "react";
import ArrowButton from "./ArrowButton";
import "../../style/css/section2.css";
import afreecatv from "../../style/img/platform/afreeca.png";
import twitch from "../../style/img/platform/twitch.png";
import youtube from "../../style/img/platform/youtube.png";
import vlive from "../../style/img/platform/vlive.png";

const Section2 = () => {
    const [platforms, setPlatforms] = useState([
        {
            id: "youtube",
            text: "Youtube",
            checked: false,
            src: youtube
        },
        {
            id: "twitch",
            text: "Twitch",
            checked: false,
            src: twitch
        },
        {
            id: "afreeca",
            text: "Afreeca TV",
            checked: false,
            src: afreecatv
        },
        {
            id: "vlive",
            text: "Vlive",
            checked: false,
            src: vlive
        },
        {
            id: "naver selective",
            text: "Naver Selective",
            checked: false,
        },
        {
            id: "nnaver now",
            text: "Naver Now",
            checked: false,
        },
        {
            id: "kakao tv",
            text: "Kakao TV",
            checked: false,
        }
    ]);

    const onChange = useCallback(
    (e) => {
        const { checked, name } = e.target;

        setPlatforms(platforms.map(platform => 
            platform.id === name ? { ...platform, checked: !platform.checked } : platform
        ));

        if (checked) {
            e.target.parentElement.style.boxShadow =
                "inset -3px -3px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1)";
            e.target.parentElement.style.transfrom = "scale(0.95)";
            e.target.nextElementSibling.style.color = "#fbb30f";
        } else {
            e.target.parentElement.style.boxShadow = "";
            e.target.parentElement.style.transfrom = "";
            e.target.nextElementSibling.style.color = "";
        }
    }, [platforms]);

  return (
    <section id="section-2">
        <h1>
        <span>관심 플랫폼</span> 선택
        </h1>
        <p>관심 플랫폼을 선택해주세요!</p>

        <ul>
            {platforms.map(platform => (
                <li key={platform.id}>
                    <label>
                    <input
                        type="checkbox"
                        name={platform.id}
                        id={platform.id}
                        checked={platform.checked}
                        onChange={onChange}
                    />
                    {platform.src ? (
                        <img
                            className="md-icon"
                            title={platform.text}
                            alt={platform.text}
                            src={platform.src}
                        />
                    ) : (
                        <div className="md-icon" title={platform.text} alt={platform.text} />
                    )}
                    
                    <span className="checkmark">{platform.text}</span>
                    </label>
                </li>
            ))}
        </ul>
        <ArrowButton />
    </section>
    );
};

export default Section2;