import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { white } from 'color-name';

class StreamForm extends React.Component{

    renderError({touched, error}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="ui error meesage" style={{background : "white"}}>{error}
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

    renderSelect = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <select {...input} autoComplete="off">
                    <option></option>
                    <option value="youtube">Youtube</option>
                    <option value="twitch">Twitch</option>
                    <option value="afreecatv">Afreecatv</option>
                    <option value="vlive">Vlive</option>
                </select>
                {this.renderError(meta)}
            </div>
            
        )
    }
    
    onSubmit = (formValues, token) => {
        this.props.onSubmit(formValues)
    }

    render(){
        console.log()
        const token = "1"
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            
                <Field name="platform" component={this.renderSelect} label="Enter platform">
                
                </Field>
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
        errors.platform = "you must enter a platform"
    } 
    if (!formValues.channel){
        errors.channel = "you must enter a channel"
    }
    if (!formValues.channelID){
        errors.channelID = "you must enter a channelID"
    }
    return errors
}


export default reduxForm({
    form: 'streamerForm',
    validate
})(StreamForm);
