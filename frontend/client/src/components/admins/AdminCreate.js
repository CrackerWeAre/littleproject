import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions/admin'
import AdminForm from './AdminForm'
import '../../style/css/AdminList.css'

class AdminCreate extends React.Component{


    
    onSubmit = (formValues) => {
        this.props.createStream(formValues, this.props.token)
    }

    render(){
        return (
            <div className="adminList">
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