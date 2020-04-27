import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <Fragment>
            <div className="ui huge secondary menu">
                
                <Link to="/" className="item">
                    Meerkat On Air
                </Link>
            
                <div className="right menu">
                    <Link to="/air" className="item">
                        Meerkat On Air
                    </Link>
                    
                    
                </div>
            
            </div>

        </Fragment>
    )
}

export default Header;