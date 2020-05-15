import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { fetchAirs } from '../../actions'
import AirView from './AirView'
import '../../style/AirList.css'
class AirList extends React.Component{


    componentDidMount(){
        this.props.fetchAirs();
    }

    AirList() {
        return this.props.airs[0].map(data => {

            return (
                <div className='item' key={data._id}>
                    <AirView props={data}></AirView>
                </div>
            )
        })
        
    }

    render(){
        return (
            <div className="airlist_container">
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