import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import FeaturedActions from '../components/home/FeaturedActions';
import Testimonial from '../components/home/Testimonial';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
    return (
        <Layout>
            <Hero />
            <ValueProposition />
            <FeaturedActions />
            <Testimonial />
            <Newsletter />
        </Layout>
    );
};

export default Home;