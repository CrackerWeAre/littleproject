import React, { } from 'react'
import { connect } from 'react-redux'
// import '../../style/css/Survey.css'
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Slider from './Slider';

const MainSurveyContainer = styled.div`
    position: relative;
    width: 100%;
    margin-top: 50px;

    h2 {
        display: flex;
        justify-content: center;
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.75;
    }

    p {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.75;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }

    button {
        background: #fbb30f;
        border-radius: 3px;
        width: 190px;
        height: 47px;
        text-align: center;
         
        &:active {
            outline: none;
        }
    }

    button + button {
        margin-left: 20px;
    }
`;

const MainSurveyHeader = styled.header`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    z-index: 9999;

    h1 {
        position: absolute;
        top: 0;
        left: 10%;
        transform: translate(-50%, 70%);
        margin-left: 30px;
        font-size: 24px;
        font-weight: 600;
        line-height: 28px;
    }

    nav ul {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        right: 10%;
        transform: translate(50%, 50%);
    }

    nav ul li {
        background: #fbb30f;
        padding: 10px;
        border-radius: 3px;
    }

    nav ul li a {
        color: #000;
    }

`;

export const MainSurvey = () => {
    return (
        <>
            <MainSurveyHeader>
                <h1>MeerkatOnAir</h1>

                {/* <nav>
                    <ul>
                        <li>
                            <a href="/">Get Started</a>
                        </li>
                    </ul>
                </nav> */}
            </MainSurveyHeader>

            <Slider />

            <MainSurveyContainer>
                <h2>MeerkatOnAir에서 세상의 모든 온라인 라이브 방송을 찾아보세요.</h2>
                <p>인기 라이브 방송부터 나에게 맞는 라이브 방송까지 모든 플랫폼의 라이브 방송을 한 곳에서 모아서 보세요.</p>
                
                <div>
                    <button>설문조사 참여</button>
                    <button>미어캣온에어 바로가기</button>
                </div>

            </MainSurveyContainer>
        </> 
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSurvey)
