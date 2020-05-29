import { GET_FOL, MAKE_FOL_LIST, FETCH_FOL_AIRS } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case GET_FOL :
            return {...state, ...action.payload };
        case FETCH_FOL_AIRS :
            const hello = []
            const data = Object.values(action.payload).map((innerdata) => {
                hello.push(innerdata['_uniq'])
            })
            return [...hello]
        default :
            return state;
    }
}