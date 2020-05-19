import React from 'react'
import Modal from '../Modal'
import { connect } from 'react-redux'
import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import history from '../../history'
import { fetchStreamer, deleteStreamer } from '../../actions/admin'




class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStreamer(this.props.match.params._id)
    }

    renderAction(){
        const { _id } = this.props.match.params
        return (
            <Fragment>
                <button onClick={() => this.props.deleteStreamer(_id,  this.props.token)} className="ui button negative">Delete</button>
                <Link to = "/admin" className="ui button">Cancel</Link>
            </Fragment>
        )
    };

    renderContent(){
        if(!this.props.streamer){
            return "Are you sure you want to delete this streamer?"
        } else {
            return `Are you sure you want to delete this streamer with channel : ${this.props.streamer.channel}`
        }
    }

    render(){
        return (
            
            <Modal
                title="Delete Streamer"
                content = {this.renderContent()}
                actions = {this.renderAction()}
                onDismiss = {() => history.push('/')}
            ></Modal>
            
        )
    }
    
    
}

const mapStateToProps = (state, ownProps) => {

    return { streamer : state.streamers[ownProps.match.params._id],
            token: state.users.token}
}

export default connect(mapStateToProps,{fetchStreamer, deleteStreamer})(StreamDelete);