import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import { signIn } from '../../actions/user';
import { connect } from 'react-redux'
import axios from 'axios'
import '../../style/Login.css'

class Login extends Component {
    
    render() {
        
        const responseGoogle = (response) => {
            this.props.signIn(response)
        }

        return (
            <div className="login">
                로그인
                <GoogleLogin 
                    clientId="845969621905-p9iupf8qgkmucm6d4978cls28lk6b84n.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                >
                </GoogleLogin>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    console.log(state)
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, { signIn })(Login);
