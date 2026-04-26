import React from 'react';

const Header = () => {
  const menuGroups = [
    { title: "About Us", id: "mobAbout", items: ["Who We Are", "Our Impact", "Our Approach", "Our People", "Awards & Recognition", "Work with us", "Contact Us"] },
    { title: "Areas of work", id: "mobAreas", items: ["Health", "Sanitation", "Public Finance", "Urban Governance", "Education"] },
    { title: "Products & Solutions", id: "mobProducts", items: ["DIGIT", "Solutions Hub"] },
    { title: "Our Platform", id: "mobPlatform", items: ["Architecture", "Features"] },
    { title: "Ecosystem", id: "mobEcosystem", items: ["Partners", "Case Studies"] },
    { title: "Resources", id: "mobResources", items: ["Articles", "Reports"] }
  ];

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <div className="container d-flex justify-content-center justify-content-lg-end align-items-center">
          <a href="#">Events</a>
          <a href="#">Contact us</a>
          <div className="ms-4 dropdown d-inline-block lang-dropdown">
            <span className="dropdown-toggle" style={{ cursor: 'pointer', color: 'var(--accent-blue)', fontWeight: 600 }} id="langSelected">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" width="16" className="me-1" id="langFlag" />
              <span id="langText" className="fw-bold fs-sm">English</span>
              <i className="fas fa-caret-down ms-1 lang-dropdown-icon"></i>
            </span>
            <ul className="dropdown-menu dropdown-menu-end shadow border-0" style={{ minWidth: '140px', borderRadius: '8px' }}>
              <li><a className="dropdown-item py-2 fw-semibold text-primary" href="#"><img src="https://flagcdn.com/w20/za.png" width="16" className="me-2" alt="Afrikaans" /> Afrikaans</a></li>
              <li><a className="dropdown-item py-2 fw-semibold text-primary" href="#"><img src="https://flagcdn.com/w20/gb.png" width="16" className="me-2" alt="English" /> English</a></li>
              <li><a className="dropdown-item py-2 fw-semibold text-primary" href="#"><img src="https://flagcdn.com/w20/fr.png" width="16" className="me-2" alt="French" /> French</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/img/logo.png" alt="eGov Foundation" className="egov-logo" />
          </a>

          {/* Mobile Right Icons */}
          <div className="d-flex align-items-center d-lg-none mobile-menu">
            <a href="#" className="text-dark me-3 fs-12"><i className="fas fa-search"></i></a>
            <button className="navbar-toggler border-0 shadow-none px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileNav">
              <i className="fas fa-bars fs-12 text-dark "></i>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="collapse navbar-collapse d-none d-lg-block" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-center">
              {menuGroups.map((group, idx) => (
                <li key={idx} className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    {group.title}
                    <svg className="nav-arrow" width="21" height="10" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <ul className="dropdown-menu">
                    {group.items.map((item, i) => (
                      <li key={i}><a className="dropdown-item" href="#">{item}</a></li>
                    ))}
                  </ul>
                </li>
              ))}
              <li className="nav-item ms-lg-3 d-none d-lg-block">
                <a className="nav-link" href="#"><i className="fas fa-search"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div className="offcanvas offcanvas-start w-100" tabIndex="-1" id="mobileNav" aria-labelledby="mobileNavLabel">
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
          <img src="/img/logo.png" alt="eGov Foundation" className="egov-logo" style={{ width: '100px' }} />
          <div className="d-flex align-items-center">
            {/* Language Switcher */}
            <div className="dropdown me-3">
              <span className="dropdown-toggle d-flex align-items-center" id="mobileLangDropdown" data-bs-toggle="dropdown"
                style={{ cursor: 'pointer', color: '#1577dd', fontWeight: 700, fontSize: '16px' }}>
                <img src="https://flagcdn.com/w20/gb.png" alt="English" width="18" className="me-1" />
                <span>ENG</span>
                <i className="fas fa-caret-down ms-1"></i>
              </span>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow">
                <li><a className="dropdown-item" href="#">English</a></li>
                <li><a className="dropdown-item" href="#">Hindi</a></li>
              </ul>
            </div>
            {/* Close Button */}
            <button type="button" className="mobile-close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="offcanvas-body p-0">
          <div className="accordion mobile-accordion" id="accordionMobile">
            {menuGroups.map((group, idx) => (
              <div key={idx} className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${group.id}`}>
                    {group.title}
                  </button>
                </h2>
                <div id={group.id} className="accordion-collapse collapse" data-bs-parent="#accordionMobile">
                  <div className="accordion-body">
                    <ul className="mobile-sub-nav">
                      {group.items.map((item, i) => (
                        <li key={i}><a href="#">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
