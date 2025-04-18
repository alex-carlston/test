import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faThumbsUp,
  faTasks,
  faCode
} from '@fortawesome/free-solid-svg-icons';

// Add these styles to globals.css or create a module
const styles = {
  pageHeader: {
    background: 'linear-gradient(135deg, #375a7f 0%, #222 100%)',
    padding: '3rem 0',
  },
  kanbanContainer: {
    display: 'flex',
    overflowX: 'auto',
    paddingBottom: '1rem',
    gap: '1rem',
  }
};

const Ideas = () => {
  const [formData, setFormData] = useState({
    ideaTitle: '',
    ideaCategory: '',
    ideaDescription: '',
    ideaCU: '',
    ideaAttachment: null
  });

  const [ideas, setIdeas] = useState({
    new: [
      {
        id: 1,
        category: 'PowerOn',
        categoryClass: 'bg-primary',
        votes: 42,
        title: 'Automated Skip Payment Processing',
        description: 'A system to handle skip payment requests automatically with proper fee assessment and due date adjustments.',
        timeSubmitted: 'Submitted 2 days ago'
      },
      {
        id: 2,
        category: 'Banno',
        categoryClass: 'bg-info',
        votes: 26,
        title: 'Financial Wellness Score',
        description: 'Display financial wellness scores in online banking with actionable recommendations.',
        timeSubmitted: 'Submitted 5 days ago'
      }
    ],
    review: [
      {
        id: 3,
        category: 'Compliance',
        categoryClass: 'bg-warning',
        votes: 53,
        title: 'CECL Calculation Automation',
        description: 'Tool to automate CECL calculations and reporting for compliance requirements.',
        timeSubmitted: 'In review since Jan 15'
      }
    ],
    progress: [
      {
        id: 4,
        category: 'Admin',
        categoryClass: 'bg-success',
        votes: 78,
        title: 'Enhanced User Access Control',
        description: 'More granular control over user permissions with audit trails and approval workflows.',
        timeSubmitted: 'Development started'
      }
    ],
    development: [
      {
        id: 5,
        category: 'Lending',
        categoryClass: 'bg-danger',
        votes: 91,
        title: 'Loan Application Status Tracker',
        description: 'Real-time loan application status tracking for members and loan officers.',
        timeSubmitted: 'Beta testing in 2 weeks'
      }
    ]
  });

  const handleInputChange = (e) => {
    const { id, value, type, files } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for submitting your idea! It will be reviewed by our team.');
    setFormData({
      ideaTitle: '',
      ideaCategory: '',
      ideaDescription: '',
      ideaCU: '',
      ideaAttachment: null
    });
  };

  const handleVote = (section, id) => {
    const updatedIdeas = {...ideas};
    const ideaIndex = updatedIdeas[section].findIndex(idea => idea.id === id);

    if (ideaIndex !== -1) {
      updatedIdeas[section][ideaIndex].votes += 1;
      setIdeas(updatedIdeas);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Idea Portal - CUSpire</title>
      </Head>

      <main>
        {/* Page Header */}
        <section style={styles.pageHeader} className="text-white">
          <div className="container">
            <h1 className="display-4 fw-bold">Your Ideas Power the Future</h1>
            <p className="lead">Submit and vote on ideas to shape our development roadmap</p>
          </div>
        </section>

        {/* Idea Submission */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card bg-dark">
                  <div className="card-header bg-primary text-white">
                    <h2 className="h4 mb-0">Submit a New Idea</h2>
                  </div>
                  <div className="card-body">
                    <form id="ideaForm" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="ideaTitle" className="form-label">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="ideaTitle"
                          placeholder="Enter a clear, concise title"
                          value={formData.ideaTitle}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="ideaCategory" className="form-label">Category</label>
                        <select
                          className="form-select"
                          id="ideaCategory"
                          value={formData.ideaCategory}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>Select category</option>
                          <option value="PowerOn">PowerOn</option>
                          <option value="Banno">Banno</option>
                          <option value="Compliance">Compliance</option>
                          <option value="Lending">Lending</option>
                          <option value="Admin">Admin Tools</option>
                          <option value="Reporting">Reporting</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="ideaDescription" className="form-label">Description</label>
                        <textarea
                          className="form-control"
                          id="ideaDescription"
                          rows="4"
                          placeholder="Describe your idea in detail..."
                          value={formData.ideaDescription}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="ideaCU" className="form-label">Credit Union Name (Optional)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="ideaCU"
                          placeholder="Your credit union name"
                          value={formData.ideaCU}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="ideaAttachment" className="form-label">Attachments (Optional)</label>
                        <input
                          className="form-control"
                          type="file"
                          id="ideaAttachment"
                          onChange={handleInputChange}
                        />
                      </div>
                      <button type="submit" className="btn btn-success w-100">Submit New Idea</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card bg-dark h-100">
                  <div className="card-header bg-primary text-white">
                    <h2 className="h4 mb-0">How It Works</h2>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h3 className="h5">
                        <FontAwesomeIcon icon={faLightbulb} className="text-warning me-2" />
                        Submit an Idea
                      </h3>
                      <p>Share your idea for a new solution or enhancement to existing tools. Be specific about the problem it solves.</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="h5">
                        <FontAwesomeIcon icon={faThumbsUp} className="text-success me-2" />
                        Vote and Comment
                      </h3>
                      <p>Community members can vote on ideas they support, increasing visibility and priority.</p>
                    </div>
                    <div className="mb-4">
                      <h3 className="h5">
                        <FontAwesomeIcon icon={faTasks} className="text-info me-2" />
                        Track Progress
                      </h3>
                      <p>Follow your idea as it moves through our review and development process.</p>
                    </div>
                    <div>
                      <h3 className="h5">
                        <FontAwesomeIcon icon={faCode} className="text-primary me-2" />
                        See It Built
                      </h3>
                      <p>Popular ideas with sufficient support get developed and added to our solutions catalog.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Idea Board */}
        <section className="py-5 bg-dark">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-white mb-0">Idea Board</h2>
              <div className="d-flex align-items-center">
                <div className="dropdown me-2">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort by
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                    <li><a className="dropdown-item active" href="#">Most Popular</a></li>
                    <li><a className="dropdown-item" href="#">Newest</a></li>
                    <li><a className="dropdown-item" href="#">Oldest</a></li>
                  </ul>
                </div>
                <Link href="#" className="btn btn-outline-light">View All Ideas</Link>
              </div>
            </div>

            <div style={styles.kanbanContainer}>
              {/* New Ideas Column */}
              <div className="bg-secondary bg-opacity-10 rounded-3 p-3 me-3 flex-shrink-0" style={{ minWidth: 280, width: 280 }}>
                <h3 className="h5 mb-3 text-white">New Ideas</h3>
                {ideas.new.map(idea => (
                  <div key={idea.id} className="bg-dark text-white rounded-3 p-3 mb-3 border-start border-4 border-success">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className={`badge px-2 py-1 me-2 mb-2 ${idea.categoryClass} text-white`}>
                        {idea.category}
                      </span>
                      <span
                        className="badge bg-primary d-inline-flex align-items-center gap-1 ms-auto"
                        onClick={() => handleVote('new', idea.id)}
                        role="button"
                        style={{ cursor: 'pointer' }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} /> {idea.votes}
                      </span>
                    </div>
                    <h4 className="h6 mb-2">{idea.title}</h4>
                    <p className="small mb-2">{idea.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">{idea.timeSubmitted}</small>
                      <button className="btn btn-sm btn-outline-info">Details</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Under Review Column */}
              <div className="bg-secondary bg-opacity-10 rounded-3 p-3 me-3 flex-shrink-0" style={{ minWidth: 280, width: 280 }}>
                <h3 className="h5 mb-3 text-white">Under Review</h3>
                {ideas.review.map(idea => (
                  <div key={idea.id} className="bg-dark text-white rounded-3 p-3 mb-3 border-start border-4 border-warning">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-warning px-2 py-1 me-2 mb-2 text-white">
                        {idea.category}
                      </span>
                      <span
                        className="badge bg-primary d-inline-flex align-items-center gap-1 ms-auto"
                        onClick={() => handleVote('review', idea.id)}
                        role="button"
                        style={{ cursor: 'pointer' }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} /> {idea.votes}
                      </span>
                    </div>
                    <h4 className="h6 mb-2">{idea.title}</h4>
                    <p className="small mb-2">{idea.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">{idea.timeSubmitted}</small>
                      <button className="btn btn-sm btn-outline-info">Details</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* In Progress Column */}
              <div className="bg-secondary bg-opacity-10 rounded-3 p-3 me-3 flex-shrink-0" style={{ minWidth: 280, width: 280 }}>
                <h3 className="h5 mb-3 text-white">In Progress</h3>
                {ideas.progress.map(idea => (
                  <div key={idea.id} className="bg-dark text-white rounded-3 p-3 mb-3 border-start border-4 border-success">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-success px-2 py-1 me-2 mb-2 text-white">
                        {idea.category}
                      </span>
                      <span
                        className="badge bg-primary d-inline-flex align-items-center gap-1 ms-auto"
                        onClick={() => handleVote('progress', idea.id)}
                        role="button"
                        style={{ cursor: 'pointer' }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} /> {idea.votes}
                      </span>
                    </div>
                    <h4 className="h6 mb-2">{idea.title}</h4>
                    <p className="small mb-2">{idea.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">{idea.timeSubmitted}</small>
                      <button className="btn btn-sm btn-outline-info">Details</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* In Development Column */}
              <div className="bg-secondary bg-opacity-10 rounded-3 p-3 flex-shrink-0" style={{ minWidth: 280, width: 280 }}>
                <h3 className="h5 mb-3 text-white">In Development</h3>
                {ideas.development.map(idea => (
                  <div key={idea.id} className="bg-dark text-white rounded-3 p-3 mb-3 border-start border-4 border-danger">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge bg-danger px-2 py-1 me-2 mb-2 text-white">
                        {idea.category}
                      </span>
                      <span
                        className="badge bg-primary d-inline-flex align-items-center gap-1 ms-auto"
                        onClick={() => handleVote('development', idea.id)}
                        role="button"
                        style={{ cursor: 'pointer' }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} /> {idea.votes}
                      </span>
                    </div>
                    <h4 className="h6 mb-2">{idea.title}</h4>
                    <p className="small mb-2">{idea.description}</p>
                    <div className="d-flex align-items-center justify-content-between">
                      <small className="text-muted">{idea.timeSubmitted}</small>
                      <button className="btn btn-sm btn-outline-info">Details</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-white-50">Members can see completed ideas in the Solutions Catalog</p>
              <Link href="/membership" className="btn btn-outline-success">Become a Member</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Ideas;
