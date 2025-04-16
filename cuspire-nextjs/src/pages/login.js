import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout/Layout';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        alert(`Logging in with Email: ${email}`);
    };

    return (
        <Layout>
            <main className="container py-5">
                <h1 className="text-center mb-4">Log In</h1>
                <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Log In</button>
                </form>
            </main>
        </Layout>
    );
};

export default Login;