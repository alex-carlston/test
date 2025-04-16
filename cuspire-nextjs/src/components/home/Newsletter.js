import React, { useState } from 'react';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address.');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        alert('Thank you for subscribing!');
        setEmail('');
    };

    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };

    return (
        <section className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <h2 className="mb-3">Stay Updated</h2>
                        <p className="mb-4">Subscribe to receive updates on new solutions and training resources.</p>
                        <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
                            <div className="col-8">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {error && <div className="text-danger">{error}</div>}
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-success">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;