import axios from 'axios'
import history from '../history'

import {        
    SIGN_IN, 
    SIGN_OUT,
    RE_SIGN_IN
} from './types'



export const signIn = (response) => async dispatch => {
    const params = new URLSearchParams();
    params.append('googleId',response.profileObj.googleId);
    params.append('imageUrl',response.profileObj.imageUrl);
    params.append('email',response.profileObj.email);
    params.append('name',response.profileObj.name);

            
    const newResponse = await axios.post("https://mkoa.sparker.kr:1323/login", params)
    dispatch({ type: SIGN_IN, payload: newResponse.data, userEmail: response.profileObj.email})
    history.push('/')
}

export const resignIn = (response) => async dispatch => {
    const params = new URLSearchParams();
    params.append('googleId',response.googleId);
    params.append('imageUrl',response.imageUrl);
    params.append('email',response.email);
    params.append('name',response.name);

            
    const newResponse = await axios.post("https://mkoa.sparker.kr:1323/login", params)
    dispatch({ type: RE_SIGN_IN, payload: newResponse.data})
}

export const signOut = () => {
    history.push('/')
    window.location.reload(false)
    return {
        type: SIGN_OUT
    };
};
