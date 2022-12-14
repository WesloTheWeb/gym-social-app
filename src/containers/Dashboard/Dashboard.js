import React from 'react';
import classes from './Dashboard.module.scss';
import UserMinified from '../../components/UserMinified/UserMinified';

const { container } = classes;

const Dashboard = (props) => {
    return (
        <section className={container}>
            <UserMinified
                userName={'donuts35'}
                fullName={'Kiriko Kamori'}
                gym={'MKE Muscle'}
                />
            <button>Profile</button>
            <button>Account Settings</button>
            <button>Log Out</button>
        </section>
    );
};


export default Dashboard;