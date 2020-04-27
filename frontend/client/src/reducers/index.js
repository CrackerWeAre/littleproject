import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import airReducer from './airReducer'

export default combineReducers ({
    form: formReducer,
    airs: airReducer
});