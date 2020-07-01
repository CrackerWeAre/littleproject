import { FETCH_BLO_AIRS, UPDATE_BLO, DELETE_BLO } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {

        case FETCH_BLO_AIRS :
            const hello = []
            Object.values(action.payload).map((innerdata) => {
                return hello.push(innerdata['_uniq'])
            })
            return [...hello]
        case UPDATE_BLO :
            
            return [...state, action.payload['_uniq']];
        case DELETE_BLO :
        
            return [...state.filter(item => item !== action.payload['_uniq']) ]
        
        default :
            return state;
    }
}