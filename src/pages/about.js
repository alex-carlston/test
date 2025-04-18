import React from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faMobileAlt,
  faRobot,
  faChartBar,
  faBalanceScale
} from '@fortawesome/free-solid-svg-icons';

const offerCards = [
  {
    icon: faCode,
    color: 'text-primary',
    title: 'PowerOn Custom Programming',
    text: 'Custom PowerOn solutions developed collaboratively and shared among members.'
  },
  {
    icon: faMobileAlt,
    color: 'text-info',
    title: 'Banno Enhancements',
    text: 'Plugins and improvements for online banking experiences through Banno.'
  },
  {
    icon: faRobot,
    color: 'text-success',
    title: 'Operational Automation',
    text: 'Scripts and tools to automate repetitive tasks and streamline operations.'
  },
  {
    icon: faChartBar,
    color: 'text-warning',
    title: 'Reporting Tools',
    text: 'Advanced reporting solutions to help you make data-driven decisions.'
  },
  {
    icon: faBalanceScale,
    color: 'text-danger',
    title: 'Compliance & Lending',
    text: 'Tools to improve compliance processes and lending efficiency.'
  }
];

const About = () => (
  <Layout>
    <main>
      {/* Page Header */}
      <section className="page-header text-white" style={{
        background: 'linear-gradient(135deg, #375a7f 0%, #222 100%)',
        padding: '3rem 0'
      }}>
        <div className="container">
          <h1 className="display-4 fw-bold">About CUSpire</h1>
          <p className="lead">Learn about our mission and what we offer</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-center mb-4">Our Mission</h2>
              <div className="card bg-dark">
                <div className="card-body p-4">
                  <p className="lead text-center">
                    CUSpire exists to help credit unions stay competitive by working together instead of alone. We're a cooperative force building solutions that benefit everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-5 bg-dark">
        <div className="container">
          <h2 className="text-center mb-5 text-white">What We Offer</h2>
          <div className="row g-4">
            {offerCards.slice(0, 3).map((card, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card bg-light custom-card h-100">
                  <div className="card-body text-center p-4">
                    <FontAwesomeIcon icon={card.icon} className={`${card.color} mb-3`} size="3x" />
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
            {offerCards.slice(3).map((card, idx) => (
              <div className="col-md-6 mt-4" key={idx + 3}>
                <div className="card bg-light custom-card h-100">
                  <div className="card-body text-center p-4">
                    <FontAwesomeIcon icon={card.icon} className={`${card.color} mb-3`} size="3x" />
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-text">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="mb-4">Our Story</h2>
              <p className="lead">
                Founded by Great NorthWest Federal Credit Union, CUSpire is built on the belief that collaboration fuels innovation.
              </p>
              <p>
                We recognized that credit unions across the country were independently developing similar solutions to common problems. By creating a platform for collaboration, we're eliminating redundant efforts and accelerating innovation.
              </p>
              <p>
                Our community of credit unions pools resources, shares knowledge, and collectively builds better tools for everyone. This cooperative approach allows even smaller institutions to access enterprise-grade solutions and stay competitive in today's rapidly evolving financial landscape.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="/our-story.svg" alt="CUSpire Story" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default About;
