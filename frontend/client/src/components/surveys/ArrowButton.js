import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 1.5vw;
    left: 50%;
    z-index: 9999;
    transform: translate(-50%, 0);
`;

const Button = styled.button`
    display: inline-block;
    width: 5vw;
    height: 5vw;
    background: none;
    border: none;
    cursor: pointer;
    color: ${props => props.btnColor ? '#fff' : '#000'};
    
    &:focus {
        outline: none;
    }

    svg {
        font-size: 2.25rem;
        color: ${props => props.btnColor ? '#fff' : '#000'};
    }

    &:hover {
        transform: scale(1.1);

        svg {
            color: #fbb30f;
        }
    }
`;

const ArrowButton = ({ lastSection }) => {
    const buttonRef = useRef();
    const [color, setColor] = useState(false);

    const handleScroll = () => {
        if (lastSection) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: buttonRef.current.offsetParent.offsetTop + window.innerHeight, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        if (buttonRef.current.offsetParent.offsetTop === 0) setColor(true);
    }, [setColor]);

    return (
        <ButtonWrapper className="arrow-btn" ref={buttonRef} onClick={handleScroll}>
            <Button btnColor={color}>
                <FontAwesomeIcon icon={lastSection ? faArrowUp : faArrowDown} />
            </Button>
        </ButtonWrapper>
    );
}

export default ArrowButton;