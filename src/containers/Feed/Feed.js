import React from 'react';
import classes from './Feed.module.scss';
import UserStatus from '../UserStatus/UserStatus';
import FriendsStatusUpdates from '../FriendsStatusUpdates/FriendsStatusUpdates';

const { marker } = classes;

const Feed = (props) => {
    return (
        <section className={marker}>
            <UserStatus />
            <FriendsStatusUpdates />
        </section>
    );
};


export default Feed;