import React from 'react';
import classes from './HomePageButton.module.scss';

const { genButton, login } = classes;

const HomePageButton = ({ title, loginButton, click, loggingIn }) => {

    return (
        <button 
            className={`${genButton} ${loginButton ? login : null}`}
            onClick={click}
            disabled={loggingIn}
            >
            {title}
        </button>
    );
};

export default HomePageButton;