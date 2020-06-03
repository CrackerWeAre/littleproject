
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/user'
import {Link} from "react-router-dom"

class LogHeader extends Component {

    componentDidMount(){
        
    }

    onSignOutClick = () => {
        this.props.signOut();
    } 

    renderAuthButton(){
        if (!this.props.isSignedIn){
            return (
                <a className="cta" href="/login"><button>Login</button></a>
            )
        } else {
            return (
                <div>
                    <ul className="nav__links">
                        <li>
                            <Link to="/" >Meerkat On Air</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                        <button onClick = {this.onSignOutClick} className="cta">
                                Sign out
                        </button>
                        </li>
                    </ul>
                    
                    
                </div>
            )
        }
    }
    
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        isSignedIn: state.auth.isSignedIn,
        user: state.user
         };
}


export default connect(mapStateToProps, { signOut })(LogHeader);