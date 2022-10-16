import React from 'react';
import HomePageButton from '../HomePageButton/HomePageButton';
import classes from './Modal.module.scss';

const { modalContainer, modalHeader } = classes;

const Modal = ({ click }) => {
    return (
        <form className={modalContainer}>
            <div class={modalHeader}>
                <h2>Sign up form</h2>
                <div onClick={click}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <p>Please follow the prompt to create your account. It's quick and easy.</p>
            <section>
                <label>Create Username</label>
                <input type="text" />
            </section>
            
            <HomePageButton title="Sign Up" />

        </form>
    );
};

export default Modal;