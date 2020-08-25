import React from 'react'
import { useState } from 'react';

function Tag (data) {
    const [checkOnOff, setcheckOnOff] = useState(false);
    const addClick = (e) => {
        setcheckOnOff(!checkOnOff)
        data.addClick(data.data)
    }


    const subClcik = (e) => {
        setcheckOnOff(!checkOnOff)
        data.subClick(data.data)
        
    }
    
    const onItem = () => {
        return <div className="survey_category_item_on" key={data.data+"on"} onClick={subClcik}>
            <div className="no">{data.data}  x</div>
        </div>
    }

    const offItem = () => {
        return <div className="survey_category_item_off" key={data.data+"off"} onClick={addClick}>
            <div className="yes">{data.data}  o</div>
        </div>
    }

    return (
        <div>
        {checkOnOff&&onItem()}
        {!checkOnOff&&offItem()}
        </div>
    )
}

export default Tag
