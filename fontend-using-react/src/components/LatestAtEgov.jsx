import React, { useState, useEffect } from 'react';
import { latestData } from '../data/latestData';

const LatestAtEgov = () => {
  const [activeTab, setActiveTab] = useState("What's New");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const categories = [
    "What's New", "Articles", "Whitepapers", "Case Studies",
    "Strategy Papers", "News & Media", "Videos", "Newsletter"
  ];

  useEffect(() => {
    setLoading(true);
    // Simulate API fetch
    const timer = setTimeout(() => {
      const results = latestData.filter(item => {
        const matchesCategory = item.category === activeTab;
        const searchLower = searchTerm.toLowerCase().replace(/,/g, '');
        
        // Search in Title, Price (normalized), and Tags
        const searchableText = `${item.title} ${item.price.replace(/,/g, '')} ${item.tags.join(' ')}`.toLowerCase();
        
        const matchesSearch = searchableText.includes(searchLower);
        return matchesCategory && matchesSearch;
      });
      setFilteredData(results);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab, searchTerm]);

  return (
    <section className="latest-section fade-in-section is-visible">
      <div className="container">
        <h2 className="mb-5 fs-45 text-primary fw-300">
          Latest at <strong style={{ fontWeight: 700 }} className="fs-45">eGov</strong>
        </h2>

        {/* Search Bar & Product List Header */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5 gap-4">
          <div className="input-group search-container" style={{ maxWidth: '400px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderRadius: '50px', overflow: 'hidden', border: '1px solid var(--secondary-navy)' }}>
            <span className="input-group-text bg-white border-0 ps-4">
              <i className="fas fa-search" style={{ color: 'var(--secondary-navy)' }}></i>
            </span>
            <input
              type="text"
              className="form-control border-0 py-3 ps-2"
              placeholder="Filter by name or price (e.g. ₹1,200)..."
              style={{ fontSize: '15px', color: 'var(--primary-navy)' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="text-muted small">
            Displaying {filteredData.length} results
          </div>
        </div>

        {/* Category Filter Buttons */}
        <ul className="nav nav-pills latest-pill-nav mb-5" role="tablist">
          {categories.map((cat) => (
            <li key={cat} className="nav-item stagger-item is-visible" role="presentation">
              <button
                className={`nav-link ${activeTab === cat ? 'active' : ''}`}
                style={{ 
                  borderRadius: '50px', 
                  transition: 'all 0.3s ease',
                  padding: '10px 25px'
                }}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        {/* Content */}
        <div className="tab-content">
          <div className="tab-pane fade show active">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3 text-muted">Loading products...</p>
              </div>
            ) : filteredData.length > 0 ? (
              <div className="row g-4 d-flex justify-content-lg-start">
                {filteredData.map((item) => (
                  <div key={item.id} className="col-lg-4 col-md-6">
                    <div className="latest-card h-100">
                      <img src={item.image} alt={item.title} className="latest-card-img" />
                      <div className="latest-card-body">
                        <h5 className="latest-card-title text-primary">{item.title}</h5>
                        <div className="latest-card-meta text-primary mb-2">
                          {item.meta}
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-auto pt-4">
                          <div className="fw-bold fs-5" style={{ color: 'var(--secondary-navy)' }}>{item.price}</div>
                          <div className="badge-container">
                            {item.tags.map(tag => (
                              <span key={tag} className="latest-badge" style={{ backgroundColor: 'rgba(75, 181, 195, 0.1)', color: 'var(--accent-cyan)' }}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-5 bg-white rounded shadow-sm">
                <i className="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 className="text-muted">No results found</h4>
                <p>Try adjusting your search or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestAtEgov;
