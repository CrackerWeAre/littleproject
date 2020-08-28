import React, { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// Temporary Images
const images = [
    'https://images.unsplash.com/photo-1503707663-64584849606b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    'https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
];

const SliderContainer = styled.div`
    position: relative;
    width: 85vw;
    height: 65vh;
    margin: 0 auto;
    overflow: hidden;
`;

const SliderContent = styled.div`
    transform: translateX(-${props => props.translate}px);
    transition: all ${props => props.transition}s ease-in-out;
    height: 100%;
    width: ${props => props.width}px;
    display: flex;
`;

const Slide = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('${props => props.image}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const Arrow = styled.div`
    display: flex;
    position: absolute;
    top: 35%;
    ${props => props.direction === 'right' ? 'right: 8%' : 'left: 8%'};
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    transition: transform ease-in 0.1s;
    cursor: pointer;
    
    svg {
        font-size: 2.5rem;
        color: rgba(80, 80, 80, 1);
    }

    &:hover {
        transform: scale(1.1);

        svg {
            color: #fbb30f;
        }
    }
`;

const Dots = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

const Dot = styled.span`
    width: 13px;
    height: 13px;
    margin-right: 8px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${props => props.active ? '#fbb30f' : 'rgba(80, 80, 80, 1)'};
`;

const Slider = () => {
    const TOTAL_SLIDES = 4;
    const getWidth = () => window.innerWidth;

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    });

    const { activeIndex, translate, transition } = state;

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (TOTAL_SLIDES - 1) * getWidth(),
                activeIndex: TOTAL_SLIDES - 1
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        });
    }

    const nextSlide = () => {
        if (activeIndex === (TOTAL_SLIDES - 1)) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        });
    }

    return (
        <>
            <SliderContainer>
                <SliderContent translate={translate} transition={transition} width={getWidth() * TOTAL_SLIDES}>
                    {images.map((image, index) => (
                        <Slide key={image + index} image={image} />
                    ))}
                </SliderContent>
            </SliderContainer>

            <Arrow onClick={prevSlide}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Arrow>
            <Arrow direction="right" onClick={nextSlide}>
                <FontAwesomeIcon icon={faAngleRight} />
            </Arrow>

            <Dots>
                {images.map((image, index) => (
                    <Dot key={image} active={activeIndex === index} /> 
                ))}
            </Dots>
        </>
    );
}

export default Slider;