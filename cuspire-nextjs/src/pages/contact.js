import React from 'react';
import Layout from '../components/layout/Layout';

const Contact = () => {
    return (
        <Layout>
            <main className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <p className="text-center mb-4">We'd love to hear from you! Please fill out the form below to get in touch.</p>
                    <form className="row g-3 justify-content-center">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        <div className="col-md-12">
                            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success">Send Message</button>
                        </div>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Contact;