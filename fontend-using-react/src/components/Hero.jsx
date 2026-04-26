import React from 'react';

const Hero = () => {
  return (
    <section className="hero fade-in-section is-visible">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-lg-5 py-lg-5 py-3 text-center text-md-start">
            <h1>20 years of digital<br />transformation in<br />public service delivery<br />
              <strong className="highlight-underline">It's possible.</strong>
            </h1>
            <p className="hero-text mt-4 mb-4 mx-lg-0">
              Catalysts. Ecosystem enablers. Problem Solvers.<br />
              At eGov, we're driven by the power of open digital infrastructure
              and ecosystems to enable governments deliver accessible, inclusive and transparent services to every citizen.
            </p>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-5">
              <a href="#" className="btn-cyan d-flex align-items-center justify-content-center">Our Approach</a>
              <a href="#" className="btn-outline-navy d-flex align-items-center justify-content-center">Our Impact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
