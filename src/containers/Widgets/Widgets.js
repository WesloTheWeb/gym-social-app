import React from 'react';
import classes from './Widgets.module.scss';
import Calendar from '../../components/Calendar/Calendar';

const { container } = classes;

const Widgets = (props) => {
    return (
        <section className={container}>
            <Calendar />
        </section>
    );
};


export default Widgets;