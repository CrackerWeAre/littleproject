import React from 'react';
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
      color: #fff;
      font-size: 1.75rem;
    }
  }

  ul {
    display: flex;
    position: relative;
    float: right;
    /* right: -11px; */
    /* padding: 10px 0; */

    li a {
      /* display: inline-block; */
      background: #fff;
      color: #000;
      border: 1px solid #fff;
      letter-spacing: -0.3px;
      padding: 5px 18px 6px;
      border-radius: 40px;
      font-size: 0.8125rem;
      font-weight: 700;
      text-align: center;
      line-height: 24px;
      text-transform: uppercase;
    }
  }
`;

const SurveyHeader = () => {
  const getPageYOffset = () => window.pageYOffset;
  console.log(window.pageYOffset);

  return (
    <Header>
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