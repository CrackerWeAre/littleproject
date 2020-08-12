import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import { fetchStreamer, editStreamer, checkStream} from '../../../actions/admin'
import AdminForm from './AdminForm'
import '../../../style/css/AdminList.css'


class StreamEdit extends React.Component{

    componentDidMount(){
        this.props.fetchStreamer(this.props.match.params._id);
    }
    

    onSubmit = (formValues) => {
        this.props.editStreamer(this.props.match.params._id, formValues, this.props.token)
    }

    onCheck = (formValues) => {
        this.props.checkStream(formValues, this.props.token)
    }


    render(){
        if (!this.props.streamer){
            return "...loading"
        } 
        return (
            <div>
                <div className="adminList">
                    <AdminForm 
                        initialValues={_.pick(this.props.streamer, 'platform', 'channel', 'channelID', 'category')}
                        onCheck={this.onCheck}
                        onSubmit={this.onSubmit}></AdminForm>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        streamer: state.streamers.data[ownProps.match.params._id],
        token: state.auth.token
    }
}

export default connect(mapStateToProps, {fetchStreamer, editStreamer, checkStream})(StreamEdit);