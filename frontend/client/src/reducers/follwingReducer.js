import { GET_FOL, FETCH_FOL_AIRS, UPDATE_FOL, DELETE_FOL} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case GET_FOL :
            return {...state, ...action.payload };
        case FETCH_FOL_AIRS :
            const hello = []
            if(action.payload!==null){
                Object.values(action.payload).map((innerdata) => {
                    return hello.push(innerdata['_uniq'])
                })
            }
            return [...hello];
        case UPDATE_FOL :

            return [...state, action.payload['_uniq']];
        case DELETE_FOL :

            return [...state.filter(item => item !== action.payload['_uniq']) ]
        default :
            return state;
    }
}