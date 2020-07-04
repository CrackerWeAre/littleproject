import { GET_FOL, FETCH_FOL_AIRS, UPDATE_FOL, DELETE_FOL} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case GET_FOL :
            return {...state, ...action.payload };
        case FETCH_FOL_AIRS :
            const hello = []
            Object.values(action.payload).map((innerdata) => {
                return hello.push(innerdata['Uniq'])
            })
            return [...hello];
        case UPDATE_FOL :

            return [...state, action.payload['Uniq']];
        case DELETE_FOL :

            return [...state.filter(item => item !== action.payload['Uniq']) ]
        default :
            return state;
    }
}