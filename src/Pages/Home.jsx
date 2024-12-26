import React from 'react';
import Slider from '../components/Slider';
import RecentQueries from '../components/RecentQueries';
import Discover from '../components/Discover';
import HowItworks from '../components/HowItworks';

const Home = () => {
    return (
        <div>
            <Slider />
            <RecentQueries />
            <Discover />
            <HowItworks />
        </div>
    );
};

export default Home;