import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import axios from 'axios'
import '../../style/Login.css'
class Login extends Component {
    
    render() {
        
        const responseGoogle = (response) => {
            axios.post("http://49.247.134.77:1323/userInfo", response)
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

export default Login;