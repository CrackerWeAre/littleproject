import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import history from '../../../history'

const StreamForm = (props) => {

    const [formValues, setformValues] = useState({channelID:'',platform:'',channel:'',category:''})
    const [validation, setvalidation] = useState(false)

    useEffect(() => {
        if(props.initialValues){
            setformValues({...formValues, 
                channelID: props.initialValues.channelID, 
                platform: props.initialValues.platform,
                channel: props.initialValues.channel,
                category: props.initialValues.category
            })
        }
    }, [])
    
    

    const onSubmit = () => {
        props.onSubmit(formValues)
        history.push('/admin')
    }

    const onchanIdChange = (e) => {
        setformValues({...formValues, channelID: `${e.target.value}`})
    }

    const onplatChange = (e) => {
        setformValues({...formValues, platform: `${e.target.value}`})
    }

    const onchanChange = (e) => {
        setformValues({...formValues, channel: `${e.target.value}`})
    }

    const oncateChange = (e) => {
        setformValues({...formValues, category: `${e.target.value}`})
    }


    const onCheck = () => {
        if(formValues.platform!==undefined&&formValues.channelID!==undefined){
            props.onCheck(formValues)
        }
    }

    useEffect(() => {
        if(props.validation.data===true){
            setvalidation(true)
        }
    }, [props.validation.data])

    const checkVal = () => {
        if(props.validation.data===true){
            return <div>중복된 스트리머가 없습니다.</div>
        } else if((props.validation.data===false)){
            return <div>중복된 스트리머가 있습니다.</div>
        } else {
            return <div></div>
        }
    }

    const buttonAlert = () => {
        alert('중복된 스트리머가 있습니다.')
    }

    const trueButton = () => {
        if(validation){
            return <button className="submit">Submit</button>
        }else{
            return <button className="submit_disable" onClick={buttonAlert} disabled>Submit</button>
        }
    }

        return (
            <form className="form-create" onSubmit={onSubmit}>
                <div>
                    <label>platform</label>
                    <select name="platform" label="platform" value={formValues.platform} autoComplete="off" required onBlur={onCheck} onChange={onplatChange}>
                        <option></option>
                        <option value="youtube">Youtube</option>
                        <option value="twitch" >Twitch</option>
                        <option value="afreecatv">Afreecatv</option>
                        <option value="vlive">Vlive</option>
                    </select>
                </div>
                <div>
                    <label>channel</label>
                    <input name="channel" autoComplete="off" value={formValues.channel} label="channel" required  onChange={onchanChange}></input>
                </div>
                <div>
                    <label>channelID</label>
                    <input name="channelID" autoComplete="off" value={formValues.channelID}  label="channelID" required onBlur={onCheck} onChange={onchanIdChange}></input>
                </div>
                {checkVal()}
                <div>
                    <label>Category</label>
                    <select name="category" value={formValues.category} label="category" autoComplete="off" required  onChange={oncateChange}>
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
                </div>
                {trueButton()}
            </form>
        )
    
}

const mapStateToProps = (state) => {
    return {
        validation: state.streamers.validation
    }
}

export default connect( mapStateToProps )(StreamForm)