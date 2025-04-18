import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faLightbulb, faCode, faVideo, faHandshake, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout';
import Newsletter from '../components/Newsletter';
import FeaturedActions from '../components/FeaturedActions';

export default function Home() {
  // Set up smooth scrolling
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#') && href !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">Credit. Union. <span>Inspire.</span></h1>
              <p className="lead mb-4">Empowering credit unions with shared custom development, innovation, and training.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <Link href="#" className="btn btn-success btn-lg px-4 me-md-2">Get Started</Link>
                <Link href="/membership" className="btn btn-outline-light btn-lg px-4">Become a Member</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/hero-image.svg"
                alt="Credit Union Collaboration"
                width={600}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Join CUSpire?</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card bg-light custom-card h-100">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faUsers} className="fa-3x text-success mb-3" />
                  <h3 className="card-title">Collaborate</h3>
                  <p className="card-text">Work together with other Symitar credit unions to solve common challenges.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-light custom-card h-100">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faChartLine} className="fa-3x text-success mb-3" />
                  <h3 className="card-title">Improve</h3>
                  <p className="card-text">Enhance member experience and operational efficiency through shared solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-light custom-card h-100">
                <div className="card-body text-center p-4">
                  <FontAwesomeIcon icon={faLightbulb} className="fa-3x text-success mb-3" />
                  <h3 className="card-title">Access</h3>
                  <p className="card-text">Leverage training, code resources, and a growing community of innovators.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Actions */}
      <FeaturedActions />

      {/* Testimonial */}
      <section className="testimonial py-5 text-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <FontAwesomeIcon icon={faQuoteLeft} className="fa-3x opacity-50 mb-3" />
              <p className="display-6 mb-4">CUSpire is helping us move faster and smarter—together.</p>
              <p className="h5">— Founding Member, Great NorthWest FCU</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Component */}
      <Newsletter />
    </Layout>
  );
}
