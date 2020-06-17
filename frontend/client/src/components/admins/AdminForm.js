import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component{

    renderError({touched, error}){
        if(touched && error){
            return (
                <div className="error message">
                    <div className="error meesage" style={{background : "white"}}>{error}
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

    renderCateSelect = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <select {...input} autoComplete="off">
                    <option></option>
                    <option value="GAME">GAME</option>
                    <option value="MUSIC">MUSIC</option>
                    <option value="CHATTING">CHATTING</option>
                    <option value="NEWS & INFO">NEWS&INFO</option>
                    <option value="SHOPPING">SHOPPING</option>
                    <option value="AIR & RADIO">AIR & RADIO</option>
                    <option value="SPORTS & EXERCISE">SPORTS & EXERCISE</option>
                    <option value="COOKING">COOKING</option>
                </select>
                {this.renderError(meta)}
            </div>
            
        )
    }
    
    onSubmit = (formValues, token) => {
        this.props.onSubmit(formValues)
    }

    render(){
        return (
            <form className="form-create" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            
                <Field name="platform" component={this.renderSelect} label="Platform"/>
                <Field name="channel" component={this.renderInput} label="Channel"/>
                <Field name="channelID" component={this.renderInput} label="ChannelID"/>
                <Field name="category" component={this.renderCateSelect} label="Category"/>
                <button className="submit">Submit</button>
                
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
    if (!formValues.category){
        errors.category = "you must enter a category"
    }
    return errors
}


export default reduxForm({
    form: 'streamerForm',
    validate
})(StreamForm);
