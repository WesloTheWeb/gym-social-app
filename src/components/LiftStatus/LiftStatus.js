import React from 'react';
import classes from './LiftStatus.module.scss';

const { liftStatusContainer } = classes;

// This is going to be iterable. These are the style tweet status updates
const LiftStatus = (props) => {
    return (
        <div className={liftStatusContainer}>
            <div>
                image
            </div>
            <div>
                content
            </div>
        </div>
    );
};


export default LiftStatus;