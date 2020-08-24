import axios from 'axios'
import history from '../history'

import {        
    SIGN_IN, 
    SIGN_OUT,
    RE_SIGN_IN,
    ID_CHECK,
    SIGN_UP
} from './types'

export const signUp = (response) => async dispatch => {
    console.log(response)
    const params = new URLSearchParams();
    const tags=response.tagitems.join()
    const ctags = response.cateitems.join()
    const serialNo = response.serialNo.toString()
    params.append('birthday',response.birthday);
    params.append('nickname',response.nickname);
    params.append('id',response.id);
    params.append('password',response.password);
    params.append('tags',tags);
    params.append('ctags',ctags);
    params.append('serialNo',serialNo);
            
    const newResponse = await axios.post("https://mkoa.sparker.kr:1323/signUp", params)
    console.log(newResponse)
    dispatch({ type: SIGN_UP, payload: newResponse.data})
    
}

export const idCheck = (id) => async dispatch => {
    console.log(id)
    const params = new URLSearchParams();
    var idcheck = false
    params.append('userID',id);        
    const newResponse = await axios.post("https://mkoa.sparker.kr:1323/signUp/checkID", params)
    console.log(newResponse)
    if(newResponse.data.Status){
        if(newResponse.data.Status==="true"){
            idcheck=true
        }else {
            idcheck=false
        }
    }
    return idcheck
    
}

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
