import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../style/css/Header.css"
import Logo from "../style/img/logo.black.png"
import LogHeader from "../components/login/LogHeader"
import {connect} from 'react-redux'
import {searchStreamer, drawerSet, darkModeSet} from '../actions/index'
import searchImg from '../style/img/Search.png'

const Header = (props) => {

    const drawerClick = (e) => {
        e.preventDefault();
        console.log(props.drawerVal)
        props.drawerSet(props.drawerVal)
    }

    const [dark, setdarkmode] = useState(false)
    const darkmodeClick = (e) => {
       
        console.log(props.darkmode)
        props.darkModeSet(props.darkmode)
    }

    useEffect(() => {
        setdarkmode(props.darkmode)
    }, [])


    const darkmodeButton = () => {
        if(dark===false){
            return (
            <input type="checkbox"  onClick={darkmodeClick} >          
            </input>
        )}else {
            return (
                <input type="checkbox" checked onClick={darkmodeClick} >          
                </input>
            )
        }

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
            <header>
                <Link to="/">
                    <img className="logo1" src={Logo} alt="logo" onClick={drawerClick}></img>
                </Link>
                <div>
                    <div>darkmode</div>
                    
                    <label className="switch" >
                    {darkmodeButton()}
                    <span className="slider round" ></span>
                    </label>
                </div>
                
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