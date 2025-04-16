import React from 'react';
import Layout from '../components/layout/Layout';
import Card from '../components/ui/Card';

const Solutions = () => {
    return (
        <Layout>
            <main className="py-5">
                <div className="container">
                    <h1 className="text-center mb-5">Our Solutions</h1>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <Card>
                                <div className="card-body text-center">
                                    <h3 className="card-title">PowerOn</h3>
                                    <p className="card-text">Custom development solutions tailored for credit unions.</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <div className="card-body text-center">
                                    <h3 className="card-title">Banno</h3>
                                    <p className="card-text">Innovative digital banking solutions for enhanced member experience.</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <div className="card-body text-center">
                                    <h3 className="card-title">Reporting</h3>
                                    <p className="card-text">Comprehensive reporting tools to help you make informed decisions.</p>
                                </div>
                            </Card>
                        </div>
                        <div className="col-md-4">
                            <Card>
                                <div className="card-body text-center">
                                    <h3 className="card-title">Compliance</h3>
                                    <p className="card-text">Stay compliant with our up-to-date solutions and resources.</p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Solutions;