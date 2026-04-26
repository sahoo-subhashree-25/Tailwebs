import React from 'react';

const Supporters = () => {
  return (
    <section className="supporters fade-in-section is-visible mt-5">
      <div className="container">
        <h2 className="mb-5 fs-45 text-primary fw-300">Our <strong style={{ fontWeight: 700 }} className="fs-45">Supporters</strong></h2>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 w-100 px-lg-5">
          <img src="/img/co-develop.png" alt="Co-Develop" className="support-img" />
          <img src="/img/melinda.png" alt="Melinda Gates Foundation" className="support-img" />
          <img src="/img/tata-trusts.png" alt="Tata Trusts" className="support-img" />
          <img src="/img/global-fund.png" alt="Global Fund" className="support-img" />
          <img src="/img/nandan.png" alt="Nandan Nilekani" className="support-img" />
        </div>
      </div>
    </section>
  );
};

export default Supporters;
