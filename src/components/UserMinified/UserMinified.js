import React from 'react';
import Image from 'next/image'
import sample from '../../../public/images/sample-2.png';
import classes from './UserMinified.module.scss';

const { miniInfoContainer } = classes;

const UserMinified = ({ userName, fullName, gym }) => {

    return (
        <div>
            <div className={miniInfoContainer}>
                <Image
                    src={sample}
                    alt="Picture of the author"
                    width="150px"
                    height="150px"
                />
                <span>donuts35</span>
                <div>Kiriko Kamori</div>
                <label>MKE Muscle</label>

            </div>
        </div>
    );
};


export default UserMinified;