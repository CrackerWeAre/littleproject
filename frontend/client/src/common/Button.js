import React from 'react';
import '../style/css/Button.css';

const Button = ({ children }) => {
    return (
        <>
            <button className="custom_btn">{children}</button>
        </>

    );
}

export default Button;