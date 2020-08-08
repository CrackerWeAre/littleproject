import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../style/css/Header.css"
import Logo from "../style/img/logo.black.png"
import LogHeader from "../components/login/LogHeader"
import {connect} from 'react-redux'
import {searchStreamer, drawerSet, darkModeSet} from '../actions/index'
import searchImg from '../style/img/Search.png'
import hamburgerLogo from "../style/img/Hamburger_icon.png"

const Header = (props) => {


    const [classModeName, setModeclassName] = useState('initialState')
    
    const drawerClick = (e) => {
        e.preventDefault();
        props.drawerSet(props.drawerVal)
    }

    useEffect(() => {
        props.darkmode ? setModeclassName("header dark") : setModeclassName("header")
      
    }, [props.darkmode])



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
            <header className={classModeName}>
                <Link to="/">
                    <i class="fas fa-bars hamburger_logo" alt="list" onClick={drawerClick}></i>
                </Link>
                <Link to="/">
                    <img className="main_logo" src={Logo} alt="logo" title="Meerkat On Air"></img>
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

const mapStateToProps = (state) => {
    return { 
        drawerVal : state.maintheme.drawer,
        darkmode : state.maintheme.darkmode
    }
}

export default connect(mapStateToProps, {searchStreamer,drawerSet, darkModeSet})(Header);