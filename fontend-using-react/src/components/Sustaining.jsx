import React from 'react';

const Sustaining = () => {
  return (
    <section className="sustaining-section fade-in-section is-visible">
      <div className="container text-center">
        <h2 className="sustaining-title">20 years of reimagining for citizens and<br /><strong>sustaining change</strong></h2>
        <p className="mt-4 mb-5 mx-auto">
          Technology is powerful, but is only one piece of the puzzle, when it comes to enhancing the quality of life for
          every citizen. To have sustainable impact at scale, the collective energy of local networks to solve local
          problems needs to be tapped into. Our partners & networks bring this collective energy to life. The ecosystem
          already exists; our task is to facilitate and amplify their efforts. For 20 years, we've been turning small
          steps into lasting, meaningful change, so that no citizen is left behind.
        </p>

        <div className="row justify-content-center gap-4 mb-4">
          <div className="col-md-5">
            <div className="video-card d-flex align-items-stretch position-relative">
              <div className="w-50 d-flex flex-column justify-content-center position-relative z-2">
                <div className="video-quote text-start my-auto py-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#a0aabf" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                    <path d="M14 11C14 8.5 15.5 7 18 7C19.5 7 21 8 21 10C21 12.5 19.5 14 18 14H17C17 15.5 18.5 17 21 17V19C16 19 14 16 14 11ZM5 11C5 8.5 6.5 7 9 7C10.5 7 12 8 12 10C12 12.5 10.5 14 9 14H8C8 15.5 9.5 17 12 17V19C7 19 5 16 5 11Z" />
                  </svg>
                  <p className="mb-2 fw-semibold">Leveraging technology for sustainable development</p>
                  <div className="d-flex align-items-center video-icon">
                    <div className="video-icon-inner"><i className="fas fa-play"></i></div>
                  </div>
                </div>
              </div>
              <div className="w-50">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} alt="Sustaining" />
              </div>
            </div>
          </div>
          {/* Second video card ... */}
        </div>

        <a href="#" className="btn btn-outline-navy rounded-pill px-5 py-2 mt-4">About Us</a>
      </div>
    </section>
  );
};

export default Sustaining;
