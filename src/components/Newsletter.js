import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setIsError(true);
      setMessage('Please enter your email address.');
      return;
    }

    // Simple email validation
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailPattern.test(email)) {
      setIsError(true);
      setMessage('Please enter a valid email address.');
      return;
    }

    // Success message
    setIsError(false);
    setMessage('Thank you for subscribing!');
    setEmail('');
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
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-success">Subscribe</button>
              </div>
            </form>
            {message && (
              <div className={`mt-3 text-${isError ? 'danger' : 'success'}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
