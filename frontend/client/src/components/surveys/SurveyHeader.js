import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 72px;
  padding: 2% 5%;
  z-index: 9999;

  h1 {
    display: inline;
    padding: 10px 0;

    a {
      color: ${props => props.isScroll ? '#fff' : '#000'};
      font-size: 1.75rem;
    }
  }

  ul {
    display: flex;
    position: relative;
    float: right;

    li a {
      background: ${props => props.isScroll ? '#fff' : '#000'};
      color: ${props => props.isScroll ? '#000' : '#fff'};
      /* border: 1px solid ${props => props.isScroll ? '#fff' : '#000'}; */
      letter-spacing: -0.3px;
      padding: 6px 18px 6px;
      border-radius: 50px;
      font-size: 0.8125rem;
      font-weight: 700;
      text-align: center;
      line-height: 24px;
      text-transform: uppercase;
    }
  }
`;

const SurveyHeader = () => {
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.pageYOffset === 0 && window.pageYOffset < window.innerHeight) {
            setIsScroll(true);
        }
        if (window.pageYOffset >= window.innerHeight) {
            setIsScroll(false);
        }
    }, []);

    useEffect(() => {
        if (window.scrollY === 0) setIsScroll(true);
        window.addEventListener('mousewheel', handleScroll);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousewheel', handleScroll);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    return (
        <Header isScroll={isScroll}>
            <h1>
                <a href="/">MeerkatOnAir</a>
            </h1>

            <ul>
              <li>
                  <a href="/sign/login">Login</a>
              </li>
            </ul>
        </Header>
    );
}

export default SurveyHeader;