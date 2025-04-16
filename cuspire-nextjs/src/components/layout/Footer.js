import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <img src="/logo-white.svg" alt="CUSpire Logo" className="mb-3" height="40" />
                        <p>© 2025 CUSpire</p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-4 mb-4">
                                <h4 className="h5 mb-3">Company</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="/about" className="text-white-50">About</a></li>
                                    <li className="mb-2"><a href="/contact" className="text-white-50">Contact</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50">Privacy Policy</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50">Terms of Use</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <h4 className="h5 mb-3">Solutions</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-white-50">PowerOn</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50">Banno</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50">Reporting</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50">Compliance</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4 mb-4">
                                <h4 className="h5 mb-3">Connect</h4>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-white-50"><i className="fab fa-youtube me-2"></i>YouTube</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50"><i className="fab fa-github me-2"></i>GitHub</a></li>
                                    <li className="mb-2"><a href="#" className="text-white-50"><i className="fab fa-linkedin me-2"></i>LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom mt-4">
                    <p className="text-center mb-0">Email: <a href="mailto:support@cuspire.com" className="text-info">support@cuspire.com</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;