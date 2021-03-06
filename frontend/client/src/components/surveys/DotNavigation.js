import React, { useState } from 'react';
import styled from 'styled-components';

const Dots = styled.div`
  position: fixed;
  top: 50%;
  right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  transform: translateY(-50%);
`;

const Dot = styled.span`
  width: 14px;
  height: 14px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${props =>  props.active ? '#fbb30f' : 'rgba(80, 80, 80, 0.3)'};
`;

const DotNavigation = React.forwardRef((props, ref) => {
  const TOTAL_SECTIONS = props.sections.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const onClick = () => {
    if (activeIndex === 0) {
      window.scrollTo({ top: activeIndex, behavior: 'smooth' });
    }
  }

  return (
    <Dots ref={ref}>
      {props.sections.map((section, index) => (
        <Dot key={index} active={activeIndex === index} onClick={onClick} />   
      ))}
    </Dots>
  );
});

export default DotNavigation;