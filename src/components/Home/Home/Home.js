import React from 'react';
import Members from '../../Members/Members/Members';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
           <Banner></Banner>
           <Members></Members>
        </div>
    );
};

export default Home;