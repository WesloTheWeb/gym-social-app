import React from 'react';
import Header from '../src/components/Header/Header';
import Dashboard from '../src/containers/Dashboard/Dashboard';
import Feed from '../src/containers/Feed/Feed';
import Widgets from '../src/containers/Widgets/Widgets';

const HomePage = (props) => {
    return (
        <>
            <Header />
            <div className='homepage-grid'>
                <Dashboard />
                <Feed />
                <Widgets /> 
            </div>
        </>
    );
};


export default HomePage;