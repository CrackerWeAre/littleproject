import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { fetchAirs } from '../../actions'
import '../../css/main.css'

function AirList() {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
    }
}
export default connect(mapStateToProps, { fetchAirs })(AirList);