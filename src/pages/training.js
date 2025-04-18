import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const sampleImg = 'https://placehold.co/480x270?text=Video+Preview';

const topics = [
  { label: 'All Topics', value: 'all', className: 'bg-primary' },
  { label: 'Banno Setup', value: 'banno', className: 'bg-secondary' },
  { label: 'PowerOn 101', value: 'poweron', className: 'bg-success' },
  { label: 'Compliance', value: 'compliance', className: 'bg-info' },
  { label: 'Reporting', value: 'reporting', className: 'bg-warning text-dark' },
  { label: 'Automation', value: 'automation', className: 'bg-danger' }
];

const videos = [
  {
    img: sampleImg,
    title: 'Banno API Integration',
    desc: 'Learn how to use the Banno API to create custom experiences in your digital banking.',
    topics: ['banno'],
    badge: { text: 'Banno', className: 'bg-secondary' },
    duration: '32 minutes'
  },
  {
    img: sampleImg,
    title: 'PowerOn Batch Processing',
    desc: 'Build efficient batch processes to automate routine tasks and data updates.',
    topics: ['poweron'],
    badge: { text: 'PowerOn', className: 'bg-success' },
    duration: '28 minutes'
  },
  {
    img: sampleImg,
    title: 'BSA Compliance Automation',
    desc: 'Automate Bank Secrecy Act compliance processes and reporting.',
    topics: ['compliance'],
    badge: { text: 'Compliance', className: 'bg-info' },
    duration: '41 minutes'
  },
  {
    img: sampleImg,
    title: 'Advanced Reporting Techniques',
    desc: 'Create complex reports with filters, parameters, and data visualization.',
    topics: ['reporting'],
    badge: { text: 'Reporting', className: 'bg-warning text-dark' },
    duration: '37 minutes'
  },
  {
    img: sampleImg,
    title: 'Workflow Automation',
    desc: 'Streamline processes with automated workflows and approval chains.',
    topics: ['automation'],
    badge: { text: 'Automation', className: 'bg-danger' },
    duration: '33 minutes'
  },
  {
    img: sampleImg,
    title: 'Banno-PowerOn Integration',
    desc: 'Connect your PowerOn solutions with Banno digital banking for seamless experiences.',
    topics: ['banno', 'poweron'],
    badge: null,
    duration: '45 minutes'
  }
];

const featured = {
  img: sampleImg,
  title: 'PowerOn Development Fundamentals',
  desc: 'Learn the basics of PowerOn programming and how to create your first custom solution.',
  duration: '45 minutes',
  date: 'March 15, 2025',
  learn: [
    'Setting up your PowerOn development environment',
    'PowerOn syntax and best practices',
    'Common functions and procedures',
    'Testing and debugging techniques',
    'Deployment strategies'
  ]
};

const Training = () => {
  const [activeTopic, setActiveTopic] = useState('all');
  const [suggestForm, setSuggestForm] = useState({ name: '', email: '', topic: '', details: '' });

  const filteredVideos = activeTopic === 'all'
    ? videos
    : videos.filter(v => v.topics.includes(activeTopic));

  const handleSuggestChange = e => {
    setSuggestForm({ ...suggestForm, [e.target.name]: e.target.value });
  };

  const handleSuggestSubmit = e => {
    e.preventDefault();
    alert("Thank you for your suggestion! We'll consider it for future training content.");
    setSuggestForm({ name: '', email: '', topic: '', details: '' });
  };

  const handleVideoClick = title => {
    alert(`This would open the "${title}" video in a real implementation.`);
  };

  // Helper for fallback image
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://placehold.co/480x270?text=Video+Preview';
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
            <h1 className="display-4 fw-bold">Training & Resources</h1>
            <p className="lead">Free educational videos to enhance your credit union operations</p>
          </div>
        </section>

        {/* Topic Filter */}
        <section className="py-4">
          <div className="container">
            <h2 className="mb-4">Browse by Topic</h2>
            <div className="d-flex flex-wrap gap-2">
              {topics.map(t => (
                <span
                  key={t.value}
                  className={`badge rounded-pill px-3 py-2 topic-pill ${t.className} ${activeTopic === t.value ? 'active' : ''}`}
                  style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                  onClick={() => setActiveTopic(t.value)}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Video */}
        <section className="py-4">
          <div className="container">
            <h2 className="mb-4">Featured Video</h2>
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="video-thumbnail mb-3"
                  style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}
                  onClick={() => handleVideoClick(featured.title)}
                >
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="img-fluid"
                    style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                    onError={handleImgError}
                  />
                  <div className="play-icon"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: 'rgba(0, 188, 140, 0.8)',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      opacity: 0.8,
                      transition: 'all 0.3s ease'
                    }}>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                </div>
                <h3>{featured.title}</h3>
                <p className="text-muted">{featured.desc}</p>
                <div className="d-flex align-items-center text-muted mb-3">
                  <FontAwesomeIcon icon={faClock} className="me-2" /> {featured.duration}
                  <span className="mx-3">|</span>
                  <FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> {featured.date}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-dark">
                  <div className="card-header bg-primary text-white">
                    <h4 className="h5 mb-0">What You'll Learn</h4>
                  </div>
                  <div className="card-body">
                    <ul className="mb-0">
                      {featured.learn.map((item, i) => (
                        <li className="mb-2" key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Library */}
        <section className="py-5 bg-dark">
          <div className="container">
            <h2 className="text-white mb-4">Video Library</h2>
            <div className="row g-4">
              {filteredVideos.map((v, idx) => (
                <div className="col-md-6 col-lg-4 video-item" key={idx}>
                  <div className="card video-card h-100">
                    <div
                      className="video-thumbnail"
                      style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px', cursor: 'pointer' }}
                      onClick={() => handleVideoClick(v.title)}
                    >
                      <img
                        src={v.img}
                        alt={v.title}
                        style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
                        onError={handleImgError}
                      />
                      <div className="play-icon"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          backgroundColor: 'rgba(0, 188, 140, 0.8)',
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: 'white',
                          opacity: 0.8,
                          transition: 'all 0.3s ease'
                        }}>
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="h5 mb-2">{v.title}</h3>
                      <p className="card-text small mb-2">{v.desc}</p>
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          {v.badge
                            ? <span className={`badge ${v.badge.className}`}>{v.badge.text}</span>
                            : (
                              <>
                                <span className="badge bg-secondary me-1">Banno</span>
                                <span className="badge bg-success">PowerOn</span>
                              </>
                            )
                          }
                        </div>
                        <small className="text-muted">{v.duration}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <a href="https://www.youtube.com/c/CUSpire" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-lg">
                <FontAwesomeIcon icon={faYoutube} className="me-2" /> Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </section>

        {/* Request Topic */}
        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="mb-3">Suggest a Training Topic</h2>
                <p className="mb-4">Is there a topic you'd like us to cover in a future training video? Let us know!</p>
                <form className="text-start" onSubmit={handleSuggestSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        name="name"
                        value={suggestForm.name}
                        onChange={handleSuggestChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        name="email"
                        value={suggestForm.email}
                        onChange={handleSuggestChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Topic Suggestion"
                        name="topic"
                        value={suggestForm.topic}
                        onChange={handleSuggestChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Additional Details"
                        name="details"
                        value={suggestForm.details}
                        onChange={handleSuggestChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100">Submit Suggestion</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Training;
