import React from 'react'
import { connect } from 'react-redux'

const DrawerView = (props) => {
    console.log(props)
    return (
        <div>
            {props.data.channel}
        </div>
    )
}


export default connect(null)(DrawerView);

