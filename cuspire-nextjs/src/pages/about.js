import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
    return (
        <Layout>
            <main className="py-5">
                <div className="container">
                    <h1 className="text-center mb-4">About CUSpire</h1>
                    <p className="lead text-center mb-4">
                        CUSpire is a community-driven initiative aimed at empowering credit unions through collaboration, innovation, and shared resources.
                    </p>
                    <h2 className="mb-3">Our Mission</h2>
                    <p>
                        Our mission is to foster a collaborative environment where credit unions can come together to share ideas, solutions, and best practices. We believe that by working together, we can overcome challenges and enhance the member experience.
                    </p>
                    <h2 className="mb-3">What We Offer</h2>
                    <ul>
                        <li>Access to a library of shared solutions and resources.</li>
                        <li>Opportunities for training and professional development.</li>
                        <li>A platform for submitting and discussing innovative ideas.</li>
                        <li>Networking opportunities with other credit union professionals.</li>
                    </ul>
                    <h2 className="mb-3">Join Us</h2>
                    <p>
                        Become a part of the CUSpire community and help shape the future of credit unions. Together, we can inspire change and drive innovation.
                    </p>
                </div>
            </main>
        </Layout>
    );
};

export default About;