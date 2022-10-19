import React from 'react';
import classes from './Header.module.scss';

const { headerContainer } = classes;

const Header = (props) => {
    return (
        <nav className={headerContainer}>
            <div>
                <img src="#" alt="logo" />
                <h1>At the Barbell</h1>
            </div>

        </nav>
    );
};


export default Header;