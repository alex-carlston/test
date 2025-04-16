import React from 'react';
import Layout from '../components/layout/Layout';

const Membership = () => {
    return (
        <Layout>
            <main>
                <section className="py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Join CUSpire</h2>
                        <p className="lead text-center mb-4">
                            Unlock full access to solutions, source code, and implementation support by becoming a member of CUSpire.
                        </p>
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <h3 className="mb-4">Membership Benefits</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2">Access to exclusive resources and tools</li>
                                    <li className="mb-2">Networking opportunities with other credit unions</li>
                                    <li className="mb-2">Participation in training and development programs</li>
                                    <li className="mb-2">Regular updates on new solutions and innovations</li>
                                </ul>
                                <div className="text-center">
                                    <a href="membership-form.html" className="btn btn-success btn-lg">Become a Member</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Membership;