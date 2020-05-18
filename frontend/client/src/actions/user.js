import axios from 'axios'
import history from '../history'

import {        
    USERS, 
} from './types'



export const fetchUser = (response) => async dispatch => {
    const params = new URLSearchParams();
    params.append('googleId',response.profileObj.googleId);
    params.append('imageUrl',response.profileObj.imageUrl);
    params.append('email',response.profileObj.email);
    params.append('name',response.profileObj.name);

            
    const newResponse = await axios.post("http://49.247.134.77:1323/userInfo", params)
    console.log(newResponse)
    dispatch({ type: USERS, payload: newResponse.data})
}
