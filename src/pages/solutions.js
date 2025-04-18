import React, { useState } from 'react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Use a reliable placeholder image for all solutions
const sampleImg = 'https://placehold.co/480x270?text=Solution+Preview';

const solutionsData = [
  {
    img: sampleImg,
    title: 'Custom Report Builder',
    status: 'Available',
    statusClass: 'badge-available',
    description: 'Generate custom reports from Symitar data with an intuitive drag-and-drop interface.',
    tags: [
      { label: 'PowerOn', className: 'bg-primary' },
      { label: 'Reporting', className: 'bg-info' }
    ],
    categories: ['reporting', 'admin'],
    btn: { text: 'Access Code', href: '/login', className: 'btn-success', disabled: false }
  },
  {
    img: sampleImg,
    title: 'Banno Account Insights',
    status: 'Available',
    statusClass: 'badge-available',
    description: 'Display personalized financial insights to members within their online banking.',
    tags: [
      { label: 'Banno', className: 'bg-primary' },
      { label: 'Online Banking', className: 'bg-info' }
    ],
    categories: ['online-banking'],
    btn: { text: 'Access Code', href: '/login', className: 'btn-success', disabled: false }
  },
  {
    img: sampleImg,
    title: 'Loan Documentation Automation',
    status: 'In Progress',
    statusClass: 'badge-progress',
    description: 'Automatically generate and track loan documents based on loan type and regulations.',
    tags: [
      { label: 'PowerOn', className: 'bg-primary' },
      { label: 'Lending', className: 'bg-info' },
      { label: 'Compliance', className: 'bg-warning' }
    ],
    categories: ['lending', 'compliance'],
    btn: { text: 'Coming Soon', href: '#', className: 'btn-secondary', disabled: true }
  },
  {
    img: sampleImg,
    title: 'User Access Manager',
    status: 'Available',
    statusClass: 'badge-available',
    description: 'Streamline user access management and permissions across Symitar systems.',
    tags: [
      { label: 'PowerOn', className: 'bg-primary' },
      { label: 'Admin Tools', className: 'bg-info' }
    ],
    categories: ['admin'],
    btn: { text: 'Access Code', href: '/login', className: 'btn-success', disabled: false }
  },
  {
    img: sampleImg,
    title: 'BSA Alert System',
    status: 'Available',
    statusClass: 'badge-available',
    description: 'Enhanced BSA monitoring with custom rules and automated suspicious activity reports.',
    tags: [
      { label: 'PowerOn', className: 'bg-primary' },
      { label: 'Compliance', className: 'bg-info' }
    ],
    categories: ['compliance'],
    btn: { text: 'Access Code', href: '/login', className: 'btn-success', disabled: false }
  },
  {
    img: sampleImg,
    title: 'Digital Member Onboarding',
    status: 'Coming Soon',
    statusClass: 'badge-coming',
    description: 'End-to-end digital onboarding solution that integrates with your core systems.',
    tags: [
      { label: 'Banno', className: 'bg-primary' },
      { label: 'Online Banking', className: 'bg-info' }
    ],
    categories: ['online-banking'],
    btn: { text: 'Coming Soon', href: '#', className: 'btn-secondary', disabled: true }
  }
];

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Lending', value: 'lending' },
  { label: 'Online Banking', value: 'online-banking' },
  { label: 'Reporting', value: 'reporting' },
  { label: 'Compliance', value: 'compliance' },
  { label: 'Admin Tools', value: 'admin' }
];

const Solutions = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredSolutions = solutionsData.filter(sol => {
    const matchesSearch =
      sol.title.toLowerCase().includes(search.toLowerCase()) ||
      sol.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === 'all' || sol.categories.includes(filter);
    return matchesSearch && matchesFilter;
  });

  // Fallback for broken images (if needed in the future)
  const handleImgError = (e) => {
    e.target.onerror = null;
    e.target.src = sampleImg;
  };

  return (
    <Layout>
      <main>
        {/* Page Header */}
        <section className="page-header text-white">
          <div className="container">
            <h1 className="display-4 fw-bold">Solutions Catalog</h1>
            <p className="lead">Browse our collection of PowerOn and Banno solutions</p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-4">
          <div className="container">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search solutions..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="btn-group w-100" role="group">
                  {filterOptions.map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      className={`btn btn-primary filter-btn${filter === opt.value ? ' active' : ''}`}
                      onClick={() => setFilter(opt.value)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions List */}
        <section className="py-4">
          <div className="container">
            <div className="row g-4">
              {filteredSolutions.map((sol, idx) => (
                <div className="col-md-6 col-lg-4 solution-item" key={idx}>
                  <div className="card solution-card h-100">
                    <img
                      src={sol.img}
                      className="card-img-top"
                      alt={sol.title}
                      onError={handleImgError}
                    />
                    <div className="card-body">
                      <span className={`badge ${sol.statusClass} text-white`}>{sol.status}</span>
                      <h3 className="card-title h5 mt-2">{sol.title}</h3>
                      <p className="card-text">{sol.description}</p>
                      <div className="d-flex flex-wrap mb-3">
                        {sol.tags.map((tag, i) => (
                          <span key={i} className={`tag ${tag.className}`}>{tag.label}</span>
                        ))}
                      </div>
                      {sol.btn.disabled ? (
                        <button className={`btn ${sol.btn.className}`} disabled>{sol.btn.text}</button>
                      ) : (
                        <Link href={sol.btn.href} className={`btn ${sol.btn.className}`}>{sol.btn.text}</Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {filteredSolutions.length === 0 && (
                <div className="col-12 text-center text-muted py-5">
                  <p>No solutions found.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-5 bg-dark">
          <div className="container text-center text-white">
            <h2 className="mb-4">Ready for Full Access?</h2>
            <p className="lead mb-4">Get full access to our entire solutions catalog including source code and implementation support.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <Link href="/membership" className="btn btn-success btn-lg">Become a Member</Link>
              <Link href="/contact" className="btn btn-outline-light btn-lg">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Solutions;
