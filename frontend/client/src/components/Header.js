import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../style/css/Header.css"
import Logo from "../style/img/logo.black.png"
import LogHeader from "../components/login/LogHeader"
import {connect} from 'react-redux'
import {searchStreamer, drawerSet, darkModeSet} from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import history from '../history'

const Header = (props) => {


    const [classModeName, setModeclassName] = useState('initialState')
    
    const drawerClick = (e) => {
        e.preventDefault();
        props.drawerSet(props.drawerVal)
    }

    useEffect(() => {
        props.darkmode ? setModeclassName("header dark") : setModeclassName("header")
      
    }, [props.darkmode])


    const reload = (e) => {
        e.preventDefault();
        window.location.pathname='/'

    }

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
                <nav className="haeder__logo">
                    <Link to="/">
                        <i className="fas fa-bars hamburger__logo" alt="list" onClick={drawerClick}></i>
                    </Link>
                    <Link to="/">
                        <img className="main__logo" src={Logo} alt="logo" title="물지 않아요!" onClick={reload}></img>
                    </Link>
                </nav>
                <nav className="header__nav">
                    <form className="searchbox" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input type="search" className="search__input" placeholder="검색" value={searchItem} onChange={handleChange} />
                            <button type="submit" className="search__button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </form>
                </nav>
                <nav className="header__mypage">
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