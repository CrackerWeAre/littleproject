
import { FETCH_CATE_AIRS } from '../actions/types'

export default (state = {data : []}, action) => {
    switch(action.type) {
        case FETCH_CATE_AIRS :
        var hello = []
           
        if(action.payload!==null){
          
            action.payload.map((innerdata) => {
                hello[innerdata._id]=innerdata
            })
        }
        return {...state.data, ...hello}
        default :
            return state;
    }
}