import React, { useState, useEffect } from 'react';

const Sustaining = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const openVideo = (src, e) => {
    e.preventDefault();
    setVideoSrc(src + "?autoplay=1");
    setShowModal(true);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeVideo = () => {
    setVideoSrc('');
    setShowModal(false);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeVideo();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const videos = [
    {
      title: "Leveraging technology for sustainable development",
      src: "https://www.youtube.com/embed/LXb3EKWsInQ",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    },
    {
      title: "Digitising civic services for better life",
      src: "https://www.youtube.com/embed/tgbNymZ7vqY",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
    }
  ];

  return (
    <>
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
            {videos.map((video, idx) => (
              <div className="col-md-5" key={idx}>
                <div 
                  className="video-card d-flex align-items-stretch position-relative" 
                  onClick={(e) => openVideo(video.src, e)}
                >
                  <div className="w-50 d-flex flex-column justify-content-center position-relative z-2">
                    <div className="video-quote text-start my-auto py-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#a0aabf" xmlns="http://www.w3.org/2000/svg" className="mb-2">
                        <path d="M14 11C14 8.5 15.5 7 18 7C19.5 7 21 8 21 10C21 12.5 19.5 14 18 14H17C17 15.5 18.5 17 21 17V19C16 19 14 16 14 11ZM5 11C5 8.5 6.5 7 9 7C10.5 7 12 8 12 10C12 12.5 10.5 14 9 14H8C8 15.5 9.5 17 12 17V19C7 19 5 16 5 11Z" />
                      </svg>
                      <p className="mb-2 fw-semibold">{video.title}</p>
                      <div className="d-flex align-items-center video-icon">
                        <div className="video-icon-inner"><i className="fas fa-play"></i></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-50">
                    <img src={video.img} className="img-fluid h-100 w-100" style={{ objectFit: 'cover' }} alt="Video thumbnail" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a href="#" className="btn btn-outline-navy rounded-pill px-5 py-2 mt-4">About Us</a>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {showModal && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1060 }}
          onClick={closeVideo}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content bg-transparent border-0">
              <div className="modal-header border-0 pb-0">
                <button type="button" className="btn-close btn-close-white ms-auto" onClick={closeVideo}></button>
              </div>
              <div className="modal-body p-0">
                <div className="ratio ratio-16x9 bg-dark shadow-lg">
                  <iframe 
                    src={videoSrc} 
                    allowFullScreen 
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sustaining;
