import _ from 'lodash'
import { USERS} from '../actions/types'

export default (state = {}, action) => {
    switch(action.type) {

        case USERS :
            console.log(action.payload)
            return {...state, ..._.assign(action.payload)};
        default :
            return state;

    }
}