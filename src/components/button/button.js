import React, {Component} from 'react';
import './button.css'

const button = (props) => {
    return (
        <React.Fragment>
            <button id="button" className="btn">
                {props.buttonText}
            </button>
        </React.Fragment>
    )
};

export default button;
