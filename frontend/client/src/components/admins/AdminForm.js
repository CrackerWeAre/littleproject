import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component{

    renderError({touched, error}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}
                    </div>
                </div>
            )
        }
    }
    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"></input>
                {this.renderError(meta)}
            </div>
            
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render(){
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="platform" component={this.renderInput} label="Enter platform"/>
                <Field name="channel" component={this.renderInput} label="Enter Channel"/>
                <Field name="channelID" component={this.renderInput} label="Enter channelID"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.platform){
        errors.title = "you must enter a paltform"
    } 
    if (!formValues.channel){
        errors.description = "you must enter a description"
    }
    if (!formValues.channelID){
        errors.description = "you must enter a description"
    }

    return errors
}


export default reduxForm({
    form: 'streamerForm',
    validate
})(StreamForm);
