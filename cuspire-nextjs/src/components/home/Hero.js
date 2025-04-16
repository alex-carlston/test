import React from 'react';

const Hero = () => {
    return (
        <section className="hero text-white" style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #375a7f 0%, #222 100%)' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="display-4 fw-bold mb-3">Credit. Union. <span style={{ color: '#00bc8c' }}>Inspire.</span></h1>
                        <p className="lead mb-4">Empowering credit unions with shared custom development, innovation, and training.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a href="/membership" className="btn btn-success btn-lg px-4 me-md-2">Join Now!</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src="/hero-image.svg" alt="Credit Union Collaboration" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;