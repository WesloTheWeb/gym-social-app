import React from 'react';
import classes from './HomePageButton.module.scss';

const { genButton, login } = classes;

const HomePageButton = ({ title, loginButton }) => {

    return (
        <button className={`${genButton} ${loginButton ? login : null}`}>
            {title}
        </button>
    );
};

export default HomePageButton;