import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { signIn } from "../../actions/user";
import { connect } from "react-redux";
import "../../style/css/Login.css";

class Login extends Component {
  render() {
    const responseGoogle = (response) => {
      this.props.signIn(response);
    };

    const failure = (response) => {
      alert(response);
    };

    return (
      <div>
        <div className="account">
          <div className="account__form">
            <div className="box">
              <div className="account__head">
                <h2>로그인</h2>
              </div>
              <div className="account__field">
                <label htmlFor="username" className="hidden"></label>
                <div className="form__input">
                  <input
                    type="email"
                    id="username"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
              </div>
              <div className="account__button">
                <button
                  type="button"
                  className="btn btn__block btn__gradient--primary"
                >
                  <strong>다음</strong>
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth,
  };
};

export default connect(mapStateToProps, { signIn })(Login);
