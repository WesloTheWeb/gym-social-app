import React from 'react';
import Header from '../src/components/Header/Header';
import Dashboard from '../src/containers/Dashboard/Dashboard';

const HomePage = (props) => {
    return (
        <>
            <Header />
            <div className='homepage-grid'>
                <Dashboard />
            </div>
        </>
    );
};


export default HomePage;