import React, { useRef } from 'react';
import styled from 'styled-components';
import ArrowButton from './ArrowButton';

// Temporary Images
const images = [
    'https://images.unsplash.com/photo-1503707663-64584849606b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
];

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

const Section1 = () => {
    return (
        <>
            <MainSection id="section-1" className="section-1">
                <h1>MeerkatOnAir에서 <span>세상의 모든 온라인 라이브 방송</span>을 찾아보세요.</h1>
                <h4>인기 라이브 방송부터 나에게 맞는 라이브 방송까지 모든 플랫폼의 라이브 방송을 한 곳에서 모아서 보세요.</h4>
                
                <ArrowButton />
            </MainSection>
        </>
    );
}

export default Section1;