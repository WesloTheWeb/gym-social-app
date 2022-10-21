import React from 'react';
import Image from 'next/image'
import sample from '../../../public/images/sample-2.png';
import classes from './UserMinified.module.scss';

const { miniInfoContainer, feedMiniInfoContainer } = classes;

const UserMinified = ({ userName, fullName, gym, feed }) => {

    return (
        <div>
            <div className={feed ? feedMiniInfoContainer : miniInfoContainer}>
                <Image
                    src={sample}
                    alt="Picture of the author"
                    width="150px"
                    height="150px"
                />
                <span>{userName}</span>
                <div>{fullName}</div>
                <label>{gym}</label>
            </div>
        </div>
    );
};

export default UserMinified;