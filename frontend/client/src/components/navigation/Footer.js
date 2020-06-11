import React, { Fragment } from 'react';

import '../../style/css/Footer.css';

function Footer() {
    return (
        <Fragment>
            <a href="https://seoulbitz.sparker.kr/">
                <button className="Linkto">SeoulBitz Project</button>
            </a>
            <div className="copyright">
                <span>Made by Team@Sparker</span><br/>
                <span>All icons by icon8</span><br/>
            </div>
        </Fragment>
    )
}

export default Footer
