import React from 'react';
import Layout from '../components/layout/Layout';

const Ideas = () => {
    return (
        <Layout>
            <main className="py-5">
                <div className="container">
                    <h1 className="text-center mb-4">Submit Your Ideas</h1>
                    <p className="lead text-center mb-5">
                        We value your input! Share your innovative ideas and help shape the future of CUSpire.
                    </p>
                    <form className="row g-3 justify-content-center">
                        <div className="col-8">
                            <input type="text" className="form-control" placeholder="Your Idea" required />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Ideas;