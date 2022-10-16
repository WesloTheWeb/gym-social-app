import React from 'react';
import classes from './HomePageButton.module.scss';

const { genButton, login } = classes;

const HomePageButton = ({ title, loginButton, click }) => {

    return (
        <button 
            className={`${genButton} ${loginButton ? login : null}`}
            onClick={click}>
            {title}
        </button>
    );
};

export default HomePageButton;