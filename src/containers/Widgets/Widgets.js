import React from 'react';
import classes from './Widgets.module.scss';
import Calendar from '../../components/Calendar/Calendar';
import Challenges from '../Challenges/Challenges';

const { container } = classes;

const Widgets = () => {
    return (
        <section className={container}>
            <Calendar />
            <h3>Challenges</h3>
            <Challenges />
        </section>
    );
};

export default Widgets;