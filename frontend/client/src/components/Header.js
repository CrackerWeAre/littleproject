import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "../style/Header.css"
import Logo from "../style/logo.png"

const Header = () => {

    return (
        <Fragment>
            <header>
                <Link to=".">
                    <img className="logo" src={Logo} alt="logo"></img>
                </Link>
                <nav>
                    <ul className="nav__links">
                        <li>
                            <Link to="." >Meerkat On Air</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                    </ul>
                
                <a className="cta" href="/login"><button>Login</button></a>
                </nav>
            </header>
        </Fragment>
    )
}

export default Header;