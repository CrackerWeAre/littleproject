import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import airReducer from './airReducer'
import myAirReducer from './myAirReducer'
import streamerReducer from './streamerReducers'
import authReducer from './authReducer';
import follwingReducer from './follwingReducer'
import cateReducer from './cateReducer'
import searchReducer from './searchReducer'

export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    airs: airReducer,
    myairs: myAirReducer,
    streamers: streamerReducer,
    followings: follwingReducer,
    cateairs: cateReducer,
    searches: searchReducer,
});