import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetch_streamer_platform, fetch_streamer_platform } from '../../actions/streamers';
import SurveyStreamerItem from './SurveyStreamerItem';

const SurveyStreamerList = (props) => {
    useEffect(() => {
        props.fetch_streamer_platform();
    }, []);

    return (
        <>
            <div className="container__byplatform">
                <ul className="container__streamer {}">
                    <div>
                        {props.streamers.map(streamer => (
                            <SurveyStreamerItem key={streamer._id} streamer={streamer} />
                        ))}
                    </div>
                </ul>
            </div>
        </>
    );
};

const mapStateToProps = state => {
    return {
        streamers: Object.values(state.streamers)
    };
}

export default connect(mapStateToProps, { fetch_streamer_platform })(SurveyStreamerList);