import { FETCH_BLO_AIRS } from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {

        case FETCH_BLO_AIRS :
            const hello = []
            Object.values(action.payload).map((innerdata) => {
                return hello.push(innerdata['_uniq'])
            })
            return [...hello]
        default :
            return state;
    }
}