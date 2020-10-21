import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetch_streamerlist } from '../../actions/streamers';
import SurveyStreamerItem from './SurveyStreamerItem';

var shuffle = require('shuffle-array');

const SurveyStreamerList = (props) => {
    useEffect(() => {
        props.fetch_streamerlist();
    }, []);

    return (
        <>
            <div className="container__byplatform">
                <ul className={`container__streamer youtube`}>
                    <div>
                        {<SurveyStreamerItem platform='youtube' onChange={props.onChange} streamers={props.streamers_youtube}></SurveyStreamerItem>}
                    </div>
                </ul>
                <ul className={`container__streamer twitch`}>
                    <div>
                        {<SurveyStreamerItem platform='twitch' onChange={props.onChange} streamers={props.streamers_twitch}></SurveyStreamerItem>}
                    </div>
                </ul>
                <ul className={`container__streamer afreecatv`}>
                    <div>
                        {<SurveyStreamerItem platform='afreecatv' onChange={props.onChange} streamers={props.streamers_afreecatv}></SurveyStreamerItem>}
                    </div>
                </ul>
                <ul className={`container__streamer vlive`}>
                    <div>
                        {<SurveyStreamerItem platform='vlive' onChange={props.onChange} streamers={props.streamers_vlive}></SurveyStreamerItem>}
                    </div>
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        streamers_youtube: shuffle(Object.values(state.survey).filter(item => item.platform === 'youtube')).slice(0,12),
        streamers_twitch: shuffle(Object.values(state.survey).filter(item => item.platform === 'twitch')).slice(0,12),
        streamers_afreecatv: shuffle(Object.values(state.survey).filter(item => item.platform === 'afreecatv')).slice(0,12),
        streamers_vlive: shuffle(Object.values(state.survey).filter(item => item.platform === 'vlive')).slice(0,12)
    };
}

export default connect(mapStateToProps, { fetch_streamerlist })(SurveyStreamerList);