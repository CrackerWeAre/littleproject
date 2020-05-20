import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions/admin'
import AdminForm from './AdminForm'

class AdminCreate extends React.Component{


    
    onSubmit = (formValues) => {
        this.props.createStream(formValues, this.props.token)
    }

    render(){
        return (
            <div>
                <h3> Create a Stream</h3>
                <AdminForm onSubmit={this.onSubmit}></AdminForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, {createStream})(AdminCreate)