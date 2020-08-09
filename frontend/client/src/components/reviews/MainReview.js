import React, {useState, useEffect} from 'react'
import "../../style/css/Review.css"
import { sendReview } from '../../actions'
import {connect} from 'react-redux'

function MainReview(props) {
    const [formValues, setformValues] = useState({title:'',message:'',email:'',category:''})
    const [validation, setvalidation] = useState(false)

    
    useEffect(() => {
        
    }, [])
    
    const ontitleChange = (e) => {
        setformValues({...formValues, title: `${e.target.value}`})
    }

    const onmessageChange = (e) => {
        setformValues({...formValues, message: `${e.target.value}`})
    }

    const onemailChange = (e) => {
        setformValues({...formValues, email: `${e.target.value}`})
    }

    const sendReviews = () => {
        props.sendReview(formValues)
    }

    const popupValidation = () => {
        setvalidation(!validation)
    }

    const popup = () => {
        return(
            <div className="review_popupbutton" onClick={popupValidation}>
                <div className="button_content">
                    <i className="fas fa-envelope" alt="Review" title="리뷰"></i>
                </div>    
            </div>
        )
    }
    const popdown = () => {
        return(
            <div className="review_popupbutton" onClick={popupValidation}>
                <div className="button_content">
                    <i className="fas fa-times" alt="Cancle" title="취소"></i>
                </div>
            </div>
        )
    }
    const review_container = () => {
        return(
        <div className="review_container">
            <div className="review_container_context">
                <p>무엇을 도와드릴까요?</p>
                <p>문의, 버그 제보, 건의 등 의견을 보내주세요.</p>
            </div>
            <form className="review_form" onSubmit={sendReviews}>
                <div className="review_title">
                    <div className="input_data">
                        <input name="title" autoComplete="off" maxlength="250" placeholder="제목" value={formValues.title} label="channel" required  onChange={ontitleChange}></input>
                    </div>
                </div>
                <div className="review_email">
                    <div className="input_data">
                        <input name="email" type="email" placeholder="이메일"  autoComplete="off" value={formValues.email} label="channel" required  onChange={onemailChange}></input>
                    </div>
                </div>
                <div className="review_message">
                    <div className="input_data">
                        <input name="message" autoComplete="off" maxlength="524288" placeholder="무엇을 도와드릴까요?"  value={formValues.message} label="channel" required  onChange={onmessageChange}></input>
                    </div>
                </div>
                <button className="review_submit">Submit</button>
            </form>
        </div>
        )
    }

    return (
        <>
        {!validation ? popup(): popdown() }
        {validation&&review_container()}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        validation: state.streamers.validation
    }
}

export default connect( mapStateToProps, {sendReview} )(MainReview)

