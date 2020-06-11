import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/css/Header.css"
import Logo from "../style/img/logo.black.png"
import LogHeader from "../components/login/LogHeader"
import {connect} from 'react-redux'
import {searchStreamer} from '../actions/index'
import searchImg from '../style/img/Search.png'

const Header = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.searchStreamer(searchItem)        
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchItem(e.target.value)
    }

    const [searchItem, setSearchItem] = useState('');

    return (
        <Fragment>
            <header>
                <Link to="/">
                    <img className="logo1" src={Logo} alt="logo"></img>
                </Link>
                <nav className="header_nav">
                <form className="searchbar_header" onSubmit={handleSubmit}>
                    <input className="searchbox" placeholder="검색" type='text' value={searchItem} onChange={handleChange}>
                    </input>
                    <button className="search_button">
                        <img className="search_img" src={searchImg} alt="Search"></img>
                    </button>
                </form>
                
                <LogHeader></LogHeader>
                    
                </nav>
            </header>
        </Fragment>
    )
}

export default connect(null, {searchStreamer})(Header);