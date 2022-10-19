import React from 'react';
import Header from '../src/components/Header/Header';
import Dashboard from '../src/containers/Dashboard/Dashboard';
import Feed from '../src/containers/Feed/Feed';

const HomePage = (props) => {
    return (
        <>
            <Header />
            <div className='homepage-grid'>
                <Dashboard />
                <div>
                    <Feed />

                </div>
            </div>
        </>
    );
};


export default HomePage;