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
        <div class="account">
          <div class="account__form">
            <div class="box">
              <div class="account__head">
                <h2>로그인</h2>
              </div>
              <div class="account__field">
                <label for="username" class="hidden"></label>
                <div class="form__input">
                  <input
                    type="email"
                    id="username"
                    placeholder="이메일을 입력해주세요"
                  />
                </div>
              </div>
              <div class="account__button">
                <button
                  type="button"
                  class="btn btn__block btn__gradient--primary"
                >
                  <strong>다음</strong>
                </button>
              </div>
              <hr data-text="or" class="line"></hr>
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
                      <i class="icon icon-login-google"></i>
                      <span>Google로 로그인</span>
                    </button>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={failure}
                  cookiePolicy={"single_host_origin"}
                ></GoogleLogin>
              </div>

              <div class="link__button">
                <button
                  type="button"
                  class="btn btn__block btn__border--secondary btn--facebook"
                >
                  <i class="icon icon-login-facebook"></i>
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
