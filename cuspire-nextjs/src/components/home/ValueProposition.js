import React from 'react';
import Card from '../ui/Card';

const ValueProposition = () => {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Why Join CUSpire?</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <Card>
                            <div className="card-body text-center p-4">
                                <i className="fas fa-users fa-3x text-success mb-3"></i>
                                <h3 className="card-title">Collaborate</h3>
                                <p className="card-text">Work together with other Symitar credit unions to solve common challenges.</p>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="card-body text-center p-4">
                                <i className="fas fa-chart-line fa-3x text-success mb-3"></i>
                                <h3 className="card-title">Improve</h3>
                                <p className="card-text">Enhance member experience and operational efficiency through shared solutions.</p>
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <div className="card-body text-center p-4">
                                <i className="fas fa-lightbulb fa-3x text-success mb-3"></i>
                                <h3 className="card-title">Access</h3>
                                <p className="card-text">Leverage training, code resources, and a growing community of innovators.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;