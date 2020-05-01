import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { fetchAirs } from '../../actions'


class AirList extends React.Component{


    componentDidMount(){
        this.props.fetchAirs();
        
    }

    AirList() {
        return this.props.airs[0].map(data => {
            console.log(this.props)
            return (
                <div>
                    {data.channelId}
                </div>
            )
        })
        
    }

    render(){
        return (
            <div>
            
            {this.AirList()}
            </div>
        )
        
    }
}


const mapStateToProps = state =>{
    return {
        airs: Object.values(state.airs), 
    }
}

export default connect(mapStateToProps, { fetchAirs })(AirList);