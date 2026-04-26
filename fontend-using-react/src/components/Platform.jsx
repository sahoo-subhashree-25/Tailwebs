import React from 'react';

const Platform = () => {
  return (
    <section className="platform-section fade-in-section is-visible">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 z-2 order-lg-1 order-2 mobile-digit-text">
            <img src="/img/digit-img.png" alt="Digit logo" className="img-fluid digit-logo" />
            <h2 className="mt-3">Our open source<br /><span className="digit-tech">technology-for-good platform</span></h2>
            <p className="mt-4 mb-4">DIGIT stands for Digital Infrastructure for Governance, Impact & Transformation. It is an open source platform that provides foundational digital public goods to build applications that solve population-scale challenges.</p>
            <a href="#" className="btn btn-light rounded-pill px-4 py-2 fw-medium explore-btn mt-4">Explore the platform</a>
          </div>
          <div className="col-lg-6 position-relative order-lg-2 order-1 mobile-digit-img d-md-none d-lg-block">
            <img src="/img/digit-girl.png" alt="Woman using phone" className="digit-woman" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platform;
