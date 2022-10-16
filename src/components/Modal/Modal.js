import React from 'react';
import classes from './Modal.module.scss';

const { modalContainer } = classes;

const Modal = (props) => {
    return (
        <form className={modalContainer}>
            <h2>Sign up form</h2>
        </form>
    );
};

export default Modal;