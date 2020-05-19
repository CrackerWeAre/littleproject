import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../style/Header.css"
import Logo from "../style/logo.png"
import LogHeader from "../components/login/LogHeader"

const Header = () => {

    return (
        <Fragment>
            <header>
                <Link to=".">
                    <img className="logo" src={Logo} alt="logo"></img>
                </Link>
                <nav>
                <LogHeader></LogHeader>
                    
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;