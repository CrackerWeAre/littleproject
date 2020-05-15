import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../style/Header.css"
import Logo from "../style/logo.png"

const Header = () => {

    return (
        <Fragment>
            <header>
            <img className="logo" src={Logo} alt="logo"></img>
                <nav>
                    <ul className="nav__links">
                        <li>
                            <Link to="/air" >Meerkat On Air</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
                <a className="cta" href="#"><button>Login</button></a>
            </header>
        </Fragment>
    )
}

export default Header;