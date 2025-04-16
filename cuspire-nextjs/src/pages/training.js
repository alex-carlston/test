import React from 'react';
import Layout from '../components/layout/Layout';

const Training = () => {
    return (
        <Layout>
            <main>
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Training Resources</h2>
                        <p className="lead text-center mb-4">
                            Access free educational videos to enhance your credit union operations.
                        </p>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="card bg-light custom-card h-100">
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title">Video 1</h3>
                                        <p className="card-text">Description of video 1.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-light custom-card h-100">
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title">Video 2</h3>
                                        <p className="card-text">Description of video 2.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-light custom-card h-100">
                                    <div className="card-body text-center p-4">
                                        <h3 className="card-title">Video 3</h3>
                                        <p className="card-text">Description of video 3.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Training;