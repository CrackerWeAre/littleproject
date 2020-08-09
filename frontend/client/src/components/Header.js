import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../style/css/Header.css"
import Logo from "../style/img/logo.black.png"
import LogHeader from "../components/login/LogHeader"
import {connect} from 'react-redux'
import {searchStreamer, drawerSet, darkModeSet} from '../actions/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
                    <i className="fas fa-bars hamburger_logo" alt="list" onClick={drawerClick}></i>
                </Link>
                <Link to="/">
                    <img className="main_logo" src={Logo} alt="logo" title="물지 않아요!"></img>
                </Link>
                <nav className="header_nav">

                <form className="searchbox" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="search" className="search_input" placeholder="검색" value={searchItem} onChange={handleChange} />
                        <button type="submit" className="search_button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
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