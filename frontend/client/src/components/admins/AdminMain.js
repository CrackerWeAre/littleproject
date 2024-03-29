import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

function AdminMain(props) {

    const [formValues, setformValues] = useState({email:'',birthday:'',gender:'',platform:'',password:''})
    const [validation, setvalidation] = useState(false)

    useEffect(() => {
        if(props.initialValues){
            setformValues({...formValues, 
                myEmail: props.initialValues.myEmail, 
                myNickname: props.initialValues.myNickname,
                myBirthday: props.initialValues.myBirthday,
                category: props.initialValues.category
            })
        }
    }, [])

    const buttonAlert = () => {
        alert('중복된 스트리머가 있습니다.')
    }
    const onemailChange = (e) => {
        setformValues({...formValues, myEmail: `${e.target.value}`})
    }

    const onnameChange = (e) => {
        setformValues({...formValues, myNickname: `${e.target.value}`})
    }

    const onbirthdayChange = (e) => {
        setformValues({...formValues, myBirthday: `${e.target.value}`})
    }

    const onpasswordChange = (e) => {
        setformValues({...formValues, category: `${e.target.value}`})
    }

    const trueButton = () => {
        if(validation){
            return <button className="submit">수정하기</button>
        }else{
            return <button className="submit_disable" onClick={buttonAlert} disabled>제출하기</button>
        }
    }
    
    const ProfileSubmit = (e) => {
        e.defaultprevented();
    }

    return (
        <div className="myPage_profile">
         <div className="container_title">프로필 관리</div>
         <form className="form-create" onSubmit={ProfileSubmit}>
            <div className="user_item">
              <div className="user_list_container">
                  <div className="user_setting_title">
                    내 이메일
                  </div>
                  <div className="user_setting_button">
                    <input name="myEmail" autoComplete="off" value={formValues.myEmail}  label="myEmail" required onChange={onemailChange}></input>
                  </div>
                </div>
            </div>
            <div className="user_item">
              <div className="user_list_container">
                  <div className="user_setting_title">
                  닉네임
                  </div>
                  <div className="user_setting_button">
                  <input name="myNickname" autoComplete="off" value={formValues.myNickname} label="myNickname" required  onChange={onnameChange}></input>
                  </div>
                </div>
            </div>
            <div className="user_item">
              <div className="user_list_container">
                  <div className="user_setting_title">
                  생년월일
                  </div>
                  <div className="user_setting_button">
                  <input name="myBirthday" autoComplete="off" value={formValues.myBirthday} label="myBirthday" required  onChange={onbirthdayChange}></input>
                  </div>
                </div>
            </div>
            <div className="user_item">
              <div className="user_list_container">
                  <div className="user_setting_title">
                  비밀번호
                  </div>
                  <div className="user_setting_button">
                  <input name="myPassword" autoComplete="off" value={formValues.myPassword}  label="myPassword" required onChange={onpasswordChange}></input>
                  </div>
                </div>
            </div>
            <div className="user_item"></div>
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
