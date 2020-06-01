import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { signIn } from '../../actions/user';
import { connect } from 'react-redux'
import '../../style/Login.css'

class Login extends Component {
    
    render() {
        
        const responseGoogle = (response) => {
            this.props.signIn(response)
        }

        const failure = (response) => {
            alert(response)
        }

        return (
            <div className="signin-form">
                <form>
                <h2>Sign In</h2>
                <p className="hint-text">Sign in with your social media account</p>
                <div className="social-btn">
                    <div className="login">
                        <GoogleLogin 
                            clientId="845969621905-p9iupf8qgkmucm6d4978cls28lk6b84n.apps.googleusercontent.com"
                            render={renderProps => (
                                <button id="google" className="login100-social-item" title="Google" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <img src="icon-google.png" alt="GOOGLE"></img>
                                </button>
                            )}
                            buttonText="구글아이디로 로그인 하기"
                            onSuccess={responseGoogle}
                            onFailure={failure}
                            cookiePolicy={'single_host_origin'}
                        >
                        </GoogleLogin>
                    </div>
                    <div className="login">
                        <a href="#" id="facebook" className="login100-social-item">
                            <img src="icon-facebook.png" alt="FACEBOOK"></img>
                        </a>
                    </div>
                </div>
                </form>
            </div>


        )
    }
}

const mapStateToProps = state =>{
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, { signIn })(Login);
