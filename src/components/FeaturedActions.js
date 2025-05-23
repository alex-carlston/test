import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLightbulb, faVideo, faHandshake } from '@fortawesome/free-solid-svg-icons';

const FeaturedActions = () => {
    return (
        <section className="py-5 bg-dark">
            <div className="container">
                <h2 className="text-center mb-5 text-white">Take Action</h2>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <Link href="/solutions" className="text-decoration-none">
                            <div className="card bg-light custom-card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faCode} className="fa-2x text-primary" />
                                    </div>
                                    <h3 className="card-title h4">Browse Solutions</h3>
                                    <p className="card-text">Explore our catalog of ready-to-use PowerOn and Banno solutions.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Link href="/ideas" className="text-decoration-none">
                            <div className="card bg-light custom-card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faLightbulb} className="fa-2x text-warning" />
                                    </div>
                                    <h3 className="card-title h4">Submit an Idea</h3>
                                    <p className="card-text">Share your innovation needs and contribute to our development roadmap.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Link href="/training" className="text-decoration-none">
                            <div className="card bg-light custom-card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faVideo} className="fa-2x text-info" />
                                    </div>
                                    <h3 className="card-title h4">Watch Training</h3>
                                    <p className="card-text">Access free educational videos to enhance your credit union operations.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <Link href="/membership" className="text-decoration-none">
                            <div className="card bg-light custom-card h-100">
                                <div className="card-body text-center p-4">
                                    <div className="mb-3">
                                        <FontAwesomeIcon icon={faHandshake} className="fa-2x text-success" />
                                    </div>
                                    <h3 className="card-title h4">Join as a Member</h3>
                                    <p className="card-text">Unlock full access to solutions, source code, and implementation support.</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedActions;
