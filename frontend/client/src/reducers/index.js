import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import airReducer from './airReducer'
import myAirReducer from './myAirReducer'
import streamerReducer from './streamerReducers'
import authReducer from './authReducer';
import follwingReducer from './follwingReducer'
import cateReducer from './cateReducer'
import searchReducer from './searchReducer'
import blockReducer from './blockReducer';
import myBloReducer from './myBloReducer';
import mainReducer from './mainReducer';
import scheduleReducer from './scheduleReducer';
import surveyReducer from './surveyReducer';
import logReducer from './logReducer';
import cateCountReducer from './cateCountReducer';

export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    airs: airReducer,
    myairs: myAirReducer,
    mybloairs: myBloReducer,
    streamers: streamerReducer,
    followings: follwingReducer,
    cateairs: cateReducer,
    searches: searchReducer,
    blockairs: blockReducer,
    maintheme: mainReducer,
    schedules: scheduleReducer,
    survey: surveyReducer,
    logs: logReducer,
    catecounts: cateCountReducer,
});