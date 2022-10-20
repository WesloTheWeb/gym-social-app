import React from 'react';
import LiftStatus from '../../components/LiftStatus/LiftStatus';
import classes from './FriendsStatusUpdates.module.scss';

const { marker, container } = classes;

const FriendsStatusUpdates = (props) => {
    return (
        <section className={`${marker} ${container}`}>
            <LiftStatus />
        </section>
    );
};


export default FriendsStatusUpdates;