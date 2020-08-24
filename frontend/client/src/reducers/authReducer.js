
import {SIGN_IN, SIGN_OUT, RE_SIGN_IN, ID_CHECK, SIGN_UP} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    token: null,
    userEmail: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN :
            return {...state, isSignedIn: true, token : action.payload.token, userEmail : action.payload.serEmail, userInfo: action.payload};
        case SIGN_OUT :
            return {...INITIAL_STATE};
        case RE_SIGN_IN :
            return {...state, token : action.payload.token};
        case SIGN_UP:
            return state;
        case ID_CHECK:
            return state;
        default :
            return state;
    }
}