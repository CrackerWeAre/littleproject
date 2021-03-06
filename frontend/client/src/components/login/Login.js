import React, { Component, useState } from "react";
import GoogleLogin from "react-google-login";
import { signIn, idCheck, signInGoogle, signInNormal } from "../../actions/user";
import { connect } from "react-redux";
import "../../style/css/Login.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import history from '../../history'

const Login = (props) => { 
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [hashpassword, setHashPassword] = useState('')
    const [serial, setSerial] = useState('')
    const [idcheck, setidCheck] =useState(false)
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false)


    const responseNormal = (id, hashPw) => {
      props.signInNormal(id, hashPw)
    }


    const responseGoogle = (response) => {
      console.log(response)
      props.signInGoogle(response);
    };

    const failure = (response) => {
      alert(response);
    };

    const onChangeId = (e) => {
      setId(e.target.value);
    };

    const onChangePassword = (e) => {
      setPw(e.target.value);
    }

    async function getId(id) {
      const params = new URLSearchParams();
      params.append('userID',id); 
      const newResponse = await axios.post("https://mkoa.sparker.kr:1323/signUp/checkID", params)

      if(newResponse.data.Status){
          if(newResponse.data.Status==="true"){

            setidCheck(true)
            setSerial((newResponse.data.SerialNo))
            setFirst(false)
            setSecond(true)
          }else {
            alert('해당 아이디가 없습니다')
            setId('')
          }
      }
    };

    
    async function hashPw(password, serial){
      await bcrypt.hash(password, serial, (err, hash) => {
          setHashPassword(hash)
          console.log(id, hash)
          responseNormal(id, hash)
      });
    }
    

    const onSubmit = (e) => {
      e.preventDefault();

      if(first){
        getId(id) 
      }else if(second){
        hashPw(pw, serial)
      }else {
        return
      }
    }
   
    

    const loginFirst = () => {
      return(
        <div>
        <div className="account">
          <div className="account__form">
            <div className="box">
              <div className="account__head">
                <h2>로그인</h2>
              </div>
              <form onSubmit={onSubmit}> 
                <div className="account__field">
                  <label htmlFor="username" className="hidden"></label>
                  <div className="form__input">
                    <input
                      type="email"
                      id="username"
                      placeholder="이메일을 입력해주세요"
                      onChange={onChangeId}
                    />
                  </div>
                </div>
                <div className="account__button">
                  <button
                    type="submit"
                    className="btn btn__block btn__gradient--primary"
                  >
                    <strong>다음</strong>
                  </button>
                </div>
              </form>
              <hr data-text="or" className="line"></hr>
              <div className="account__button">
                <button
                  type="button"
                  className="btn btn__block btn__gradient--primary"
                  rel="noopener noreferrer"
                >
                <Link to="/sign/signup" rel="noopener noreferrer">
                
                  <strong>회원가입</strong>
                </Link>
                </button>
              </div>
              <hr data-text="or" className="line"></hr>
              <div className="link__button">
                <GoogleLogin
                  clientId="845969621905-p9iupf8qgkmucm6d4978cls28lk6b84n.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      id="google"
                      className="btn btn__block btn__border--secondary btn--google"
                      title="Google"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <i className="icon icon-login-google"></i>
                      <span>Google로 로그인</span>
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={failure}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </div>

              <div className="link__button">
                <button
                  type="button"
                  className="btn btn__block btn__border--secondary btn--facebook"
                >
                  <i className="icon icon-login-facebook"></i>
                  <span>Facebook으로 로그인</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }

    const loginSecond = () => {
      return(
        <div>
        <div className="account">
          <div className="account__form">
            <div className="box">
              <div className="account__head">
                <h2>비밀번호 입력</h2>
              </div>
              <form onSubmit={onSubmit}> 
                <div className="account__field">
                  <label htmlFor="username" className="hidden"></label>
                  <div className="form__input">
                    <input
                      type="password"
                      id="password"
                      placeholder="비밀번호를 입력하세요"
                      onChange={onChangePassword}
                    />
                  </div>
                </div>
                <div className="account__button">
                  <button
                    type="submit"
                    className="btn btn__block btn__gradient--primary"
                  >
                    <strong>로그인하기</strong>
                  </button>
                </div>
              </form>
              <hr data-text="or" className="line"></hr>
            </div>
          </div>
        </div>
      </div>
      )
    }

  return (
    <>
    {first&&loginFirst()}
    {second&&loginSecond()}

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

const mapDispatchToProps = {
  setidCheck: idCheck,
  signInGoogle: signInGoogle,
  signInNormal: signInNormal,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
