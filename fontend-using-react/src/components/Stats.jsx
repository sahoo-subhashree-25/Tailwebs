import React from 'react';

const Stats = () => {
  return (
    <section className="stats-section fade-in-section is-visible">
      <div className="container">
        <div className="row mt-lg-5 d-flex align-items-center">
          <div className="col-lg-8 col-sm-12">
            <h2 className="stat-main">1,000,000,100<span>+</span></h2>
          </div>
          <div className="col-lg-4 col-sm-12">
            <p className="text-light mb-5">
              Citizens availing public services through eGov's Digital Public Goods (DPG)
            </p>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-md-12 empty-col d-lg-block d-none"></div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h3 className="fw-lighter text-white text-partner">1.1 Billion+</h3>
              <p className="text-lighter">Public services delivered</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h3 className="fw-lighter text-white text-partner">50+ partners</h3>
              <p className="text-lighter text-center">From technology, <br /> governments and NGOs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
