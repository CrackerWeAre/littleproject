import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

function AdminMain(props) {

    const [formValues, setformValues] = useState({email:'',birthday:'',gender:'',platform:'',password:''})
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

    const buttonAlert = () => {
        alert('중복된 스트리머가 있습니다.')
    }
    const onemailChange = (e) => {
        setformValues({...formValues, channelID: `${e.target.value}`})
    }

    const onnameChange = (e) => {
        setformValues({...formValues, platform: `${e.target.value}`})
    }

    const onbirthdayChange = (e) => {
        setformValues({...formValues, channel: `${e.target.value}`})
    }

    const onpasswordChange = (e) => {
        setformValues({...formValues, category: `${e.target.value}`})
    }

    const trueButton = () => {
        if(validation){
            return <button className="submit">수정하기</button>
        }else{
            return <button className="submit_disable" onClick={buttonAlert} disabled>Submit</button>
        }
    }
    
    const ProfileSubmit = (e) => {
        e.defaultprevented();
    }

    return (
        <div className="myPage_profile">
            <form className="form-create" onSubmit={ProfileSubmit}>
                <div>
                    <label>내 이메일</label>
                    <input name="channelID" autoComplete="off" value={formValues.channelID}  label="channelID" required onChange={onemailChange}></input>
                </div>
                <div>
                    <label>닉네임</label>
                    <input name="channel" autoComplete="off" value={formValues.channel} label="channel" required  onChange={onnameChange}></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input name="channel" autoComplete="off" value={formValues.channel} label="channel" required  onChange={onbirthdayChange}></input>
                </div>
                <div>
                    <label>생년월일</label>
                    <input name="channelID" autoComplete="off" value={formValues.channelID}  label="channelID" required onChange={onpasswordChange}></input>
                </div>
                <div>
                    <label>Category</label>
            
                </div>
                {trueButton()}
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
        user: state.auth
        }
}

export default connect(mapStateToProps,)(AdminMain);
