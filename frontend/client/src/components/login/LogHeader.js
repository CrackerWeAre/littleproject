
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
                <div className="nav__links">
                    <div className="nav_items">
                        <Link to="/login">
                            <button className="cta">Login</button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                    <div className="nav__links">
                        <div className="nav_items">
                            <Link to="/admin">
                                <button className="cta">Admin</button>
                            </Link>
                        </div>
                        <div className="nav_items">
                        <button onClick = {this.onSignOutClick} className="cta">
                                Logout
                        </button>
                        </div>
                    </div>
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