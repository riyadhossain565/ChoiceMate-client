import React from 'react';
import Slider from '../components/Slider';
import RecentQueries from '../components/RecentQueries';
import Discover from '../components/Discover';
import HowItworks from '../components/HowItworks';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <div>
            <Slider />
            <RecentQueries />
            <Discover />
            <HowItworks />
            <NewsLetter />
        </div>
    );
};

export default Home;