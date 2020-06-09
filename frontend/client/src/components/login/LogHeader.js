
import React, { Component, Fragment } from 'react'
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
                <Link to="/login">
                    <button className="cta">Login</button>
                </Link>
            )
        } else {
            return (
                    <ul className="nav__links">
                        <li>
                            <Link to="/admin">
                                <button className="admin">Admin</button>
                            </Link>
                        </li>
                        <li>
                        <button onClick = {this.onSignOutClick} className="cta">
                                Logout
                        </button>
                        </li>
                    </ul>
            )
        }
    }
    
    render() {
        return (
            <Fragment>
                {this.renderAuthButton()}
            </Fragment>
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