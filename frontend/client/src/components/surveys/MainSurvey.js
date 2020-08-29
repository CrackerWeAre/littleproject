import React from 'react'
import { connect } from 'react-redux'
import '../../style/css/MainSurvey.css';

import SurveyHeader from './SurveyHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import DotNavigation from './DotNavigation';


export const MainSurvey = () => {
    return (
        <>
            <SurveyHeader />

            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />

            <DotNavigation />
        </> 
    );
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(MainSurvey)
