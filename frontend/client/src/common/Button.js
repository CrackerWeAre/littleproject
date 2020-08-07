import React from 'react';
import '../style/css/Button.css';

const Button = (props) => {
    console.log(props);
    return (
        <>
            <button 
                className="custom_btn"
                onClick={props.onClick}
            >{props.children}</button>
        </>
    );
}

export default Button;