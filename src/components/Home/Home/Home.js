import React from 'react';
import Members from '../../Members/Members/Members';
import Banner from '../Banner/Banner';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div style={{backgroundColor: '#f2f2f2'}}>
           <Banner></Banner>
           <Members></Members>
        </div>
    );
};

export default Home;