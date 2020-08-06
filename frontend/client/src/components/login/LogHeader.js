
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/user'
import {Link} from "react-router-dom"
import Button from '../../common/Button';

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
                            <Button>Login</Button>
                        </Link>
                    </div>
                </div>
            )
        } else {
            return (
                    <div className="nav__links">
                        <div className="nav_items">
                            <Link to="/admin">
                                <Button>Admin</Button>
                            </Link>
                        </div>
                        <div className="nav_items">
                            <Link to="/main/mypage">
                                <Button>MyPage</Button>
                            </Link>
                        </div>
                        <div className="nav_items">
                            <Button onClick = {this.onSignOutClick}>Logout</Button>
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