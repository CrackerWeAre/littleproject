import React from 'react';
import ArrowButton from './ArrowButton';

const Section5 = () => {
    return (
        <section id="section-5" className="section-5">
            <h1>감사합니다.</h1>
            <h4>선택해주신 것들을 바탕으로 당신만을 위한 멋진 라이브 플랫폼을 만들어 드릴게요!</h4>
            
            <div className="start-btn">
                <a href="/">미어캣온에어 시작</a>
            </div>
            
            <ArrowButton lastSection />
        </section>
    );
}

export default Section5;