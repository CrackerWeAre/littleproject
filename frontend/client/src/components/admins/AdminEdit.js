import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import { fetchStreamer, editStreamer} from '../../actions/admin'
import AdminForm from './AdminForm'

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStreamer(this.props.match.params._id);
    }
    
    componentDidUpdate(prevProps){
        if(this.props !== prevProps){
            console.log(this.props)
        }
    }

    onSubmit = (formValues) => {
        console.log(this.props.match.params._id)
        this.props.editStreamer(this.props.match.params._id, formValues)
    }
    render(){
        if (!this.props.streamer){
            return "...loading"
        } 
        return (
            <div>
                <div>
                    <h3>Edit A Stream</h3>
                    <AdminForm 
                        initialValues={_.pick(this.props.streamer, 'platform', 'channel', 'channelID')}
                        onSubmit={this.onSubmit}></AdminForm>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        streamer: state.streamers[ownProps.match.params._id]
    }
}

export default connect(mapStateToProps, {fetchStreamer, editStreamer})(StreamEdit);