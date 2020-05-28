
import {SIGN_IN, SIGN_OUT} from '../actions/types'

const INITIAL_STATE = {
    isSignedIn: null,
    token: null,
    userEmail: null,

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN :
            console.log(action.payload)
            return {...state, isSignedIn: true, token : action.payload.token, userEmail : action.userEmail, userInfo: action.payload};
        case SIGN_OUT :
            return {...state, ...INITIAL_STATE};
        default :
            return state;
    }
}