import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import { fetchStreamer, editStreamer} from '../../actions/admin'
import AdminForm from './AdminForm'

class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStreamer(this.props.match.params._id);
    }
    

    onSubmit = (formValues) => {
        this.props.editStreamer(this.props.match.params._id, formValues, this.props.token)
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
        streamer: state.streamers[ownProps.match.params._id],
        token: state.auth.token
    }
}

export default connect(mapStateToProps, {fetchStreamer, editStreamer})(StreamEdit);