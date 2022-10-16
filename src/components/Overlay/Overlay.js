import React from 'react';
import classes from './Overlay.module.scss';

const { backdrop } = classes;

const Backdrop = ({ click }) => {
    return (
        <div 
            className={backdrop}
            onClick={click}
        />
    );
};


export default Backdrop;