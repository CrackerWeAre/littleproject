import React, { useState, useCallback, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SurveyHeader from './SurveyHeader';
import DotNavigation from './DotNavigation';
import ArrowButton from './ArrowButton';
import SurveyStreamerList from './SurveyStreamer';
import '../../style/css/MainSurvey.css';

import { images, PLATFORMS, CATEGORIES } from './_surveydata';

const url = images[Math.floor(Math.random() * images.length)];

const MainSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100%;
        height: 100%;
        opacity: 1;
        background-image: url('${url}');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: opacity 500ms ease 0s;
    }

    &::after {
        content: "";
        position: absolute;
        opacity: 0.63;
        top: 0;
        left: 0;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(0, 0, 0);
    }

    h1 {
        font-size: 2.8rem;
        letter-spacing: -0.4px;
        margin-bottom: 1.1111111111111112vw;
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        z-index: 9999;
        color: #fff;

        span {
            color: #fbb30f;
        }
    }

    h4 {
        font-size: 1.5rem;
        font-weight: 500;
        letter-spacing: -0.4px;
        white-space: pre-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        z-index: 9999;
        color: #fff;
    }
`;

export const MainSurvey = () => {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentRef = useRef();
    const [platforms, setPlatforms] = useState(PLATFORMS);
    const [categories, setCategories] = useState(CATEGORIES);

    const [checkedData, setCheckedData] = useState({});
    const [platform, setPlatform] = useState([]);
    const [category, setCategory] = useState([]);
    const [streamer, setStreamer] = useState([]);

    const onChange = useCallback(
    (e) => {
        const { checked, name, title } = e.target;
        console.log('e.target: ', e.target);
        setPlatforms(platforms.map(platform => 
            platform.id === name ? { ...platform, checked: !platform.checked } : platform
        ));

        setCategories(categories.map(category => 
            category.id === name ? { ...category, checked: !category.checked } : category
        ));

        if (streamer.includes(name)) {
            console.log(1);
            setStreamer(streamer.filter(item => item !== name));
        } else if (checked) {
            console.log(2);
            if (title === 'platform') {
                setPlatform([...platform, name]);
            } else if (title === 'category') {
                setCategory([...category, name]);
            } else {
                setStreamer([...streamer, name]);
            }
            console.log(platform, category, streamer);
            
            e.target.parentElement.style.boxShadow =
                "inset -3px -3px 5px rgba(255, 255, 255, 1), inset 3px 3px 5px rgba(0, 0, 0, 0.1)";
            e.target.parentElement.style.transfrom = "scale(0.95)";
            e.target.nextElementSibling.style.color = "#fbb30f";
        } else {
            console.log(3);
            if (title === 'platform') {
                setPlatform(platform.filter(item => item !== name));
            } else if (title === 'category') {
                setCategory(category.filter(item => item !== name));
            } else {
                setStreamer(streamer.filter(item => item !== name));
            }
            console.log(platform, category, streamer);
            e.target.parentElement.style.boxShadow = "";
            e.target.parentElement.style.transfrom = "";
            e.target.nextElementSibling.style.color = "";
        }
    }, [platforms, categories]);

    const onSubmit = e => {
        e.preventDefault();
        console.log("onSubmit: ", platform, category, streamer);
    }

    return (
        <>
            <SurveyHeader />

            {/* Section1 */}
            <MainSection id="section-1" className="section-1">
                <h1>MeerkatOnAir에서 <span>세상의 모든 온라인 라이브 방송</span>을 찾아보세요.</h1>
                <h4>인기 라이브 방송부터 나에게 맞는 라이브 방송까지 모든 플랫폼의 라이브 방송을 한 곳에서 모아서 보세요.</h4>
                <ArrowButton />
            </MainSection>

            <form onSubmit={onSubmit}>
                {/* Section2 */}
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
                                    title="platform"
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

                {/* Section3 */}
                <section id="section-3">
                    <div id="title">
                        <h1>
                        <span>관심 스트리머</span> 선택
                        </h1>
                        <p>관심 스트리머를 선택해주세요!</p>
                    </div>
                    
                    <SurveyStreamerList onChange={onChange}></SurveyStreamerList>

                    <button type="submit" className="submit-btn">전체보기</button>

                    <ArrowButton />
                </section>

                {/* Section4 */}
                <section id="section-4" className="section-4">
                    <h1><span>관심 카테고리</span> 선택</h1>
                    <p>관심있는 카테고리를 선택해주세요!</p>

                    <ul>
                        {categories.map(category => (
                            <li key={category.id}>
                                <label>
                                    <input 
                                        type="checkbox"
                                        title="category"
                                        name={category.id}
                                        id={category.id}
                                        checked={category.checked}
                                        onChange={onChange}
                                    />
                                    <FontAwesomeIcon icon={category.icon} />
                                    <span className="checkmark">{category.text}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                    
                    <button type="submit" className="submit-btn">제출하기</button>
                    
                    <ArrowButton />
                </section>
            </form>

            {/* Section5 */}
            <section id="section-5" className="section-5">
                <h1>감사합니다.</h1>
                <h4>선택해주신 것들을 바탕으로 당신만을 위한 멋진 라이브 플랫폼을 만들어 드릴게요!</h4>
                
                <div className="start-btn">
                    <a href="/">미어캣온에어 시작</a>
                </div>
                
                <ArrowButton lastSection />
            </section>
            
            <DotNavigation sections={sections} ref={currentRef} />
        </>
    );
}

export default MainSurvey;