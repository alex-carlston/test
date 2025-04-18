import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const contactIconStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(0, 188, 140, 0.1)',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#00bc8c',
  marginRight: '1rem',
  flexShrink: 0,
};

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert('Please fill in all required fields');
      return;
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) {
      alert('Please enter a valid email address');
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you shortly.');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitting(false);
    }, 800);
  };

  return (
    <Layout>
      <main>
        {/* Page Header */}
        <section className="page-header text-white" style={{
          background: 'linear-gradient(135deg, #375a7f 0%, #222 100%)',
          padding: '3rem 0'
        }}>
          <div className="container">
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p className="lead">Get in touch with our team for questions, support, or membership information</p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-5">
          <div className="container">
            <div className="row g-5">
              {/* Contact Form */}
              <div className="col-lg-7">
                <h2 className="mb-4">Send Us a Message</h2>
                <div className="card bg-dark">
                  <div className="card-body p-4">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label">Your Name</label>
                          <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label">Email Address</label>
                          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">Phone (Optional)</label>
                          <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="subject" className="form-label">Subject</label>
                          <select className="form-select" id="subject" name="subject" value={form.subject} onChange={handleChange} required>
                            <option value="" disabled>Select a subject</option>
                            <option value="membership">Membership Information</option>
                            <option value="support">Technical Support</option>
                            <option value="billing">Billing Question</option>
                            <option value="partnership">Partnership Opportunity</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">Your Message</label>
                          <textarea className="form-control" id="message" name="message" rows="5" value={form.message} onChange={handleChange} required />
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-success btn-lg w-100" disabled={submitting}>
                            {submitting ? 'Sending...' : 'Send Message'}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="col-lg-5">
                <h2 className="mb-4">Get in Touch</h2>
                <div className="card bg-dark mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex mb-4">
                      <div style={contactIconStyle}>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div>
                        <h3 className="h5 mb-1">Email Us</h3>
                        <p className="mb-0"><a href="mailto:support@cuspire.com" className="text-info">support@cuspire.com</a></p>
                        <p className="mb-0"><a href="mailto:membership@cuspire.com" className="text-info">membership@cuspire.com</a></p>
                      </div>
                    </div>
                    <div className="d-flex mb-4">
                      <div style={contactIconStyle}>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </div>
                      <div>
                        <h3 className="h5 mb-1">Call Us</h3>
                        <p className="mb-0"><a href="tel:+18005551234" className="text-white">1-800-555-1234</a></p>
                        <p className="text-muted mb-0">Monday-Friday, 9am-5pm PT</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div style={contactIconStyle}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </div>
                      <div>
                        <h3 className="h5 mb-1">Visit Us</h3>
                        <p className="mb-0">301 W Wishkah ST<br />Aberdeen, WA 98520</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card bg-dark">
                  <div className="card-body p-4">
                    <h3 className="h5 mb-3">Follow Us</h3>
                    <div className="d-flex gap-3">
                      <a href="#" className="btn btn-outline-light btn-sm"><FontAwesomeIcon icon={faYoutube} className="me-2" />YouTube</a>
                      <a href="#" className="btn btn-outline-light btn-sm"><FontAwesomeIcon icon={faGithub} className="me-2" />GitHub</a>
                      <a href="#" className="btn btn-outline-light btn-sm"><FontAwesomeIcon icon={faLinkedin} className="me-2" />LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-white mb-4">Our Location</h2>
            <div style={{
              height: '300px',
              backgroundColor: '#303030',
              borderRadius: '6px',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5444.891842125947!2d-123.8250586088113!3d46.972575457136784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54923a1e7c5e1fa3%3A0x30be7c82a8c39c37!2s301%20W%20Wishkah%20St%2C%20Aberdeen%2C%20WA%2098520!5e0!3m2!1sen!2sus!4v1744863907791!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CUSpire Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="contactFAQ">
                  {/* FAQ 1 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="faqHeading1">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                        How quickly can I expect a response?
                      </button>
                    </h3>
                    <div id="faqCollapse1" className="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#contactFAQ">
                      <div className="accordion-body">
                        We typically respond to all inquiries within one business day. For urgent technical support requests from members, we aim to respond within 4 business hours.
                      </div>
                    </div>
                  </div>
                  {/* FAQ 2 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="faqHeading2">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                        Who should I contact about membership?
                      </button>
                    </h3>
                    <div id="faqCollapse2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#contactFAQ">
                      <div className="accordion-body">
                        For questions about membership, pricing, or the application process, please email <a href="mailto:membership@cuspire.com">membership@cuspire.com</a> or use the contact form and select "Membership Information" as the subject.
                      </div>
                    </div>
                  </div>
                  {/* FAQ 3 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="faqHeading3">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                        Can I schedule a demo before joining?
                      </button>
                    </h3>
                    <div id="faqCollapse3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#contactFAQ">
                      <div className="accordion-body">
                        Absolutely! We're happy to schedule a personalized demo to show you our solutions and answer any questions you might have. Use the contact form and specify that you're interested in a demo in your message.
                      </div>
                    </div>
                  </div>
                  {/* FAQ 4 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="faqHeading4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                        How do I get technical support as a member?
                      </button>
                    </h3>
                    <div id="faqCollapse4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#contactFAQ">
                      <div className="accordion-body">
                        Members can access our dedicated support portal after logging in. For urgent issues, you can also email <a href="mailto:support@cuspire.com">support@cuspire.com</a> or call our support line at 1-800-555-1234 during business hours.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
