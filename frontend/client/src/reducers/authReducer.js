
import {SIGN_IN_NORMAL, SIGN_IN_GOOGLE, SIGN_OUT, RE_SIGN_IN, ID_CHECK, SIGN_UP} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: false,
    token: null,
    userEmail: null,
    userInfo: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN_GOOGLE :
            return {...state, isSignedIn: true, token : action.payload.token, userEmail : action.payload.email, userInfo: action.payload};
        case SIGN_IN_NORMAL :
            return {...state, isSignedIn: true, token : action.payload.token, userEmail : action.payload.email, userInfo: action.payload};
        case SIGN_OUT :
            return {...INITIAL_STATE};
        case RE_SIGN_IN :
            return {...state, token : action.payload.token};
        case SIGN_UP:
            return {...state, isSignedIn: true, token : action.payload.token, userEmail : action.payload.id, userInfo: action.payload};
        case ID_CHECK:
            return state;
        default :
            return state;
    }
}