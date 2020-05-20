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
            <div className="login">
                
                <GoogleLogin 
                    clientId="845969621905-p9iupf8qgkmucm6d4978cls28lk6b84n.apps.googleusercontent.com"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>구글로 로그인하기</button>
                      )}
                    buttonText="구글아이디로 로그인 하기"
                    onSuccess={responseGoogle}
                    onFailure={failure}
                    cookiePolicy={'single_host_origin'}
                >
                </GoogleLogin>
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
