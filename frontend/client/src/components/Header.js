import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../style/Header.css"
import Logo from "../style/logo.black.png"
import LogHeader from "../components/login/LogHeader"

const Header = () => {

    return (
        <Fragment>
            <header>
                <Link to="/">
                    <img className="logo1" src={Logo} alt="logo"></img>
                </Link>
                <nav className="header_nav">
                <form className="searchbar_header" >
                    <input className="searchbox" placeholder="검색">
                    </input>
                    <button className="search_button">

                    </button>
                </form>
                
                <LogHeader></LogHeader>
                    
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;