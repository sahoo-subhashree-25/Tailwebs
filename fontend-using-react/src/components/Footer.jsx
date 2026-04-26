import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container fade-in-section is-visible">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="pe-4">
              <img src="/img/logo.png" className="footer-logo" height="40" alt="footer logo" />
              <p className="small text-primary mt-3 fs-16">Catalysing digital transformation for public service delivery.</p>
              <div className="d-flex gap-3 mt-4 footer-social-links">
                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-4 fs-20 text-primary">Useful Links</h5>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled small">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Our Impact</a></li>
                  <li><a href="#">Platform</a></li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled small">
                  <li><a href="#">Campaign</a></li>
                  <li><a href="#">Donate</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-4 fs-20 text-primary">Subscribe Now</h5>
            <p className="small text-primary fs-16">Join our growing community and receive the latest updates.</p>
            <div className="input-group mt-3">
              <input type="email" className="form-control rounded-pill rounded-end-0 border-end-0 py-2 px-3 small" placeholder="Enter Email Id" />
              <button className="btn btn-warning text-white rounded-pill rounded-start-0" style={{ backgroundColor: '#ff8c00', borderColor: '#ff8c00' }} type="button">
                <i className="fa-solid fa-envelope"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bottom-footer mt-5 py-3">
        <div className="container d-flex justify-content-between small text-white">
          <span>©2024. eGov. All Rights Reserved.</span>
          <div>
            <a href="#" className="text-decoration-none text-white">Privacy Policy </a>
            <a href="#" className="text-decoration-none text-white ps-md-4 ps-2"> Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
