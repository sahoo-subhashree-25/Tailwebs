import React from 'react';

const BoldApproaches = () => {
  return (
    <section className="bold-approaches fade-in-section is-visible">
      <div className="container">
        <div className="bold-card">
          <div className="row">
            <div className="col-lg-5 mb-4">
              <h2 className="text-approach mb-5 fw-light ">
                Big problems need<br />
                <span className="text-approach-bold" >bold approaches</span>
              </h2>

              <ul className="nav nav-pills pill-nav flex-column" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-health-tab" data-bs-toggle="pill" data-bs-target="#pills-health" type="button" role="tab" aria-controls="pills-health" aria-selected="true">Public Health</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-finance-tab" data-bs-toggle="pill" data-bs-target="#pills-sanitation" type="button" role="tab" aria-controls="pills-sanitation" aria-selected="false">Public Finance</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-urban-tab" data-bs-toggle="pill" data-bs-target="#pills-urban" type="button" role="tab" aria-controls="pills-urban" aria-selected="false">Local Governance</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-water-tab" data-bs-toggle="pill" data-bs-target="#pills-gov" type="button" role="tab" aria-controls="pills-gov" aria-selected="false">Water & Sanitation</button>
                </li>
              </ul>
            </div>
            <div className="col-lg-7">
              <div className="tab-content" id="pills-tabContent">
                {/* Public Health */}
                <div className="tab-pane fade show active" id="pills-health" role="tabpanel" aria-labelledby="pills-health-tab">
                  <div className="row h-100 g-2">
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#4bb5cb', backgroundImage: "url('/img/icu.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">210+</h3>
                          <p className="mb-0">Cities LIVE with 10BedICU across India</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#1a8ffc', backgroundImage: "url('/img/covid-vaccine-1.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">2 Bn</h3>
                          <p className="mb-0">COVID-19 vaccination certificates issued globally</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Public Finance */}
                <div className="tab-pane fade" id="pills-sanitation" role="tabpanel" aria-labelledby="pills-finance-tab">
                  <div className="row h-100 g-2">
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#4bb5cb', backgroundImage: "url('/img/public-img1.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">210+</h3>
                          <p className="mb-0 pe-4">Cities LIVE with 10BedICU across India</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#1a8ffc', backgroundImage: "url('/img/public-img2.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">2 Bn</h3>
                          <p className="mb-0">COVID-19 vaccination certificates issued globally</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Local Governance */}
                <div className="tab-pane fade" id="pills-urban" role="tabpanel" aria-labelledby="pills-urban-tab">
                  <div className="row h-100 g-2">
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#4bb5cb', backgroundImage: "url('/img/public-img1.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">350+</h3>
                          <p className="mb-0">Cities LIVE with 10BedICU across India</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#1a8ffc', backgroundImage: "url('/img/local-img1.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">3 Bn</h3>
                          <p className="mb-0">COVID-19 vaccination certificates issued globally</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Water & Sanitation */}
                <div className="tab-pane fade" id="pills-gov" role="tabpanel" aria-labelledby="pills-water-tab">
                  <div className="row h-100 g-2">
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#4bb5cb', backgroundImage: "url('/img/water.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">210+</h3>
                          <p className="mb-0">Cities LIVE with 10BedICU across India</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-6">
                      <div className="feature-card" style={{ backgroundColor: '#1a8ffc', backgroundImage: "url('/img/Truck-man.png')" }}>
                        <div className="content-wrapper">
                          <h3 className="fw-bold mb-0">2 Bn</h3>
                          <p className="mb-0">COVID-19 vaccination certificates issued globally</p>
                          <button className="btn btn-light rounded-pill btn-sm px-4 py-2 mt-2 read-btn">Read More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoldApproaches;
