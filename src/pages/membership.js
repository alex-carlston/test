import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDownload,
  faVoteYea,
  faCodeBranch,
  faHandsHelping,
  faUsers,
  faBullhorn
} from '@fortawesome/free-solid-svg-icons';

// Add these styles to globals.css or create a Membership.module.css file
const styles = {
  pageHeader: {
    background: 'linear-gradient(135deg, #375a7f 0%, #222 100%)',
    padding: '3rem 0',
  },
  pricingCard: {
    transition: 'transform 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  pricingCardHighlight: {
    border: '2px solid #00bc8c',
    position: 'relative',
  },
  benefitIcon: {
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
  }
};

const Membership = () => {
  const [formData, setFormData] = useState({
    cuName: '',
    assetSize: '',
    contactName: '',
    contactTitle: '',
    contactEmail: '',
    contactPhone: '',
    message: '',
    terms: false
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your membership application! Our team will contact you within 1-2 business days to complete the process.');
    setFormData({
      cuName: '',
      assetSize: '',
      contactName: '',
      contactTitle: '',
      contactEmail: '',
      contactPhone: '',
      message: '',
      terms: false
    });
  };

  const handleAssetSizeChange = (e) => {
    handleInputChange(e);
    const tier = e.target.value;
    let price = "";

    switch(tier) {
      case 'tier1':
        price = "$2,500";
        break;
      case 'tier2':
        price = "$5,000";
        break;
      case 'tier3':
        price = "$7,500";
        break;
      case 'tier4':
        price = "$10,000";
        break;
    }

    if (price) {
      alert(`Selected membership tier: Annual fee of ${price}`);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Membership & Pricing - CUSpire</title>
      </Head>

      <main>
        {/* Page Header */}
        <section style={styles.pageHeader} className="text-white">
          <div className="container">
            <h1 className="display-4 fw-bold">Membership & Pricing</h1>
            <p className="lead">Join our community and access the full power of CUSpire</p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Membership Benefits</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <div style={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faDownload} size="lg" />
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Download Solutions</h3>
                    <p className="mb-0">Access complete solutions from our catalog with full source code and documentation.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <div style={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faVoteYea} size="lg" />
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Vote on Ideas</h3>
                    <p className="mb-0">Help direct our development priorities by voting on and commenting on ideas.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <div style={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faCodeBranch} size="lg" />
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Request Custom Development</h3>
                    <p className="mb-0">Submit requests for custom development or co-sponsor features with other credit unions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <div style={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faHandsHelping} size="lg" />
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Implementation Guidance</h3>
                    <p className="mb-0">Get support from our team on implementing solutions at your credit union.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <div style={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faUsers} size="lg" />
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Community Access</h3>
                    <p className="mb-0">Connect with other credit unions to share ideas, challenges, and solutions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-4">
                  <div style={styles.benefitIcon}>
                    <FontAwesomeIcon icon={faBullhorn} size="lg" />
                  </div>
                  <div>
                    <h3 className="h5 mb-2">Early Access</h3>
                    <p className="mb-0">Be the first to know about and try new solutions and features as they're developed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-center text-white mb-5">Transparent Pricing</h2>
            <p className="text-center text-white-50 mb-5">Our pricing is based on your credit union's asset size. This ensures that institutions of all sizes can benefit from CUSpire membership.</p>

            <div className="row g-4 justify-content-center">
              {/* Tier 1 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100" style={styles.pricingCard}>
                  <div className="card-body text-center p-4 bg-dark">
                    <h3 className="card-title mb-4">Small CU</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-muted">Asset Size</p>
                      <p className="mb-0 h5">Under $50M</p>
                    </div>
                    <div className="pricing py-3">
                      <span className="h2">$2,500</span>
                      <span className="text-muted">/year</span>
                    </div>
                    <a href="#contact-form" className="btn btn-outline-primary w-100">Join Now</a>
                  </div>
                </div>
              </div>

              {/* Tier 2 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100" style={styles.pricingCard}>
                  <div className="card-body text-center p-4 bg-dark">
                    <h3 className="card-title mb-4">Medium CU</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-muted">Asset Size</p>
                      <p className="mb-0 h5">$50M–$100M</p>
                    </div>
                    <div className="pricing py-3">
                      <span className="h2">$5,000</span>
                      <span className="text-muted">/year</span>
                    </div>
                    <a href="#contact-form" className="btn btn-outline-primary w-100">Join Now</a>
                  </div>
                </div>
              </div>

              {/* Tier 3 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100" style={{...styles.pricingCard, ...styles.pricingCardHighlight}}>
                  <div className="card-body text-center p-4 bg-dark">
                    <div className="position-absolute" style={{top: '-12px', right: '20px', background: '#00bc8c', color: 'white', padding: '2px 12px', fontSize: '12px', fontWeight: 600, borderRadius: '12px'}}>
                      Popular
                    </div>
                    <h3 className="card-title mb-4">Large CU</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-muted">Asset Size</p>
                      <p className="mb-0 h5">$100M–$200M</p>
                    </div>
                    <div className="pricing py-3">
                      <span className="h2">$7,500</span>
                      <span className="text-muted">/year</span>
                    </div>
                    <a href="#contact-form" className="btn btn-success w-100">Join Now</a>
                  </div>
                </div>
              </div>

              {/* Tier 4 */}
              <div className="col-md-6 col-lg-3">
                <div className="card h-100" style={styles.pricingCard}>
                  <div className="card-body text-center p-4 bg-dark">
                    <h3 className="card-title mb-4">Enterprise CU</h3>
                    <div className="mb-3">
                      <p className="mb-1 text-muted">Asset Size</p>
                      <p className="mb-0 h5">Over $200M</p>
                    </div>
                    <div className="pricing py-3">
                      <span className="h2">$10,000</span>
                      <span className="text-muted">/year</span>
                    </div>
                    <a href="#contact-form" className="btn btn-outline-primary w-100">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-5">Frequently Asked Questions</h2>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="accordion" id="faqAccordion">
                  {/* FAQ Item 1 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How soon can we access the solutions after joining?
                      </button>
                    </h3>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Once your membership application is approved, you'll receive login credentials within one business day. This gives you immediate access to our entire solutions catalog, documentation, and community resources.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Are there additional fees for implementation support?
                      </button>
                    </h3>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Your membership includes basic implementation guidance for all solutions in our catalog. For more extensive support or custom development work beyond the scope of our existing solutions, additional professional services fees may apply. We'll always provide clear pricing before proceeding with any extra work.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can we request custom development for our specific needs?
                      </button>
                    </h3>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Yes! Members can submit custom development requests through our Idea Portal. These requests are evaluated based on general community benefit and resources required. If a request is specific to your credit union, we offer options to either fully fund the development or co-sponsor it with other interested members to share costs.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 4 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        What does the membership renewal process look like?
                      </button>
                    </h3>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Memberships are annual with automatic renewal. We'll send a reminder 30 days before your renewal date with an option to update your information or make changes to your membership. If your credit union's asset size has changed, the renewal price will reflect the appropriate tier.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 5 */}
                  <div className="accordion-item bg-dark">
                    <h3 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How many user accounts do we get with our membership?
                      </button>
                    </h3>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Each membership includes up to 5 user accounts for your team. These can be assigned to different departments such as IT, compliance, lending, etc. Additional user accounts can be added for $200 per user per year if needed.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Form */}
        <section id="contact-form" className="py-5 bg-dark">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="card bg-dark border">
                  <div className="card-header bg-primary text-white">
                    <h2 className="h4 mb-0">Ready to Join?</h2>
                  </div>
                  <div className="card-body">
                    <form id="joinForm" onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="cuName" className="form-label">Credit Union Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cuName"
                            value={formData.cuName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="assetSize" className="form-label">Asset Size</label>
                          <select
                            className="form-select"
                            id="assetSize"
                            value={formData.assetSize}
                            onChange={handleAssetSizeChange}
                            required
                          >
                            <option value="" disabled>Select asset size</option>
                            <option value="tier1">Under $50M</option>
                            <option value="tier2">$50M–$100M</option>
                            <option value="tier3">$100M–$200M</option>
                            <option value="tier4">Over $200M</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactName" className="form-label">Contact Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactName"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactTitle" className="form-label">Job Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="contactTitle"
                            value={formData.contactTitle}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactEmail" className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            id="contactEmail"
                            value={formData.contactEmail}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="contactPhone" className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="contactPhone"
                            value={formData.contactPhone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">Additional Information</label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows="3"
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="terms"
                              checked={formData.terms}
                              onChange={handleInputChange}
                              required
                            />
                            <label className="form-check-label" htmlFor="terms">
                              I agree to the <Link href="/terms" className="text-info">Terms and Conditions</Link> and <Link href="/privacy" className="text-info">Privacy Policy</Link>
                            </label>
                          </div>
                        </div>
                        <div className="col-12 mt-4">
                          <button type="submit" className="btn btn-success btn-lg w-100">Submit Membership Application</button>
                        </div>
                      </div>
                    </form>
                    <p className="mt-4 text-center mb-0">Or contact us at <a href="mailto:membership@cuspire.com" className="text-info">membership@cuspire.com</a> with questions</p>
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

export default Membership;
