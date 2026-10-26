
import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlay,
  FiX,
  FiMapPin,
  FiWifi,
  FiHome,
  FiCalendar,
  FiShield,
  FiCoffee,
  FiEye,
  FiClock,
} from "react-icons/fi";

const VIDEO_URL =
  "https://www.aafiyalakeview.com/assets/img/pexels-cottonbro-6467633%20(2160p).mp4";

const features = [
  "We offer fully furnished apartments for rent in Coimbatore, including Lakeview 1BHK Studio Apartments, Lakeview 2BHK, and Kings Studio 2BHK serviced apartments.",
  "Enjoy a wonderful view of the magnificent city and Lakeview from our luxury service apartments in Coimbatore.",
  "Service apartments in Coimbatore consistently receive positive feedback from our visitors.",
  "Appreciate the flexibility of choosing between monthly and daily rental apartments.",
  "Each apartment is equipped with a kitchen and comfortable 1 BHK accommodations, ideal for extended stays.",
  "Fully furnished serviced accommodation with modern amenities, high-speed internet, a spacious living room, a dining area, a balcony, a kitchen with a microwave oven, and parking space is available.",
  "We offer convenient options for monthly rent, 1-day stays, and serviced rooms for rent.",
  "Presenting a smart alternative to hotel suites with luxurious 1 BHK flat rentals.",
  "We provide privacy, flexibility, and comfort for our guests to enjoy their stay.",
  "Prime location to access, and flexible stay options to choose from.",
  "Our premium service apartments in Coimbatore are ideal for short stays or extended vacations.",
];

const featureIcons = [
  FiHome,
  FiEye,
  FiCheckCircle,
  FiCalendar,
  FiCoffee,
  FiWifi,
  FiClock,
  FiShield,
  FiCheckCircle,
  FiMapPin,
  FiHome,
];

function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setVideoOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [videoOpen]);

  return (
    <>
      <section className="explore-area aafiya-about-section">
        <div className="container">
          <div className="row align-items-center aafiya-about-intro">
            {/* About Image and Video */}
            <div className="col-lg-6">
              <div className="aafiya-about-visual">
                <div className="aafiya-about-image-wrap">
                  <img
                    src="/assets/img/about-us.jpg"
                    alt="Premium Apartments in Coimbatore Near Key City Areas"
                    className="aafiya-about-image"
                    loading="lazy"
                    decoding="async"
                  />

                  <div className="aafiya-image-caption">
                    <span className="aafiya-caption-icon">
                      <FiMapPin aria-hidden="true" />
                    </span>
                    <span>
                      <strong>Aafiya Lakeview</strong>
                      <small>Service Apartments · Coimbatore</small>
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="aafiya-video-trigger"
                  onClick={() => setVideoOpen(true)}
                  aria-label="Play Discover Aafiya video"
                >
                  <span className="aafiya-video-play-icon">
                    <FiPlay aria-hidden="true" fill="currentColor" />
                  </span>

                  <span className="aafiya-video-trigger-text">
                    <small>GET TO KNOW US</small>
                    <strong>Discover Aafiya</strong>
                  </span>

                  <FiArrowRight
                    className="aafiya-video-trigger-arrow"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            {/* About Content */}
            <div className="col-lg-6">
              <div className="aafiya-about-copy">
                <span className="aafiya-about-eyebrow">
                  YOUR COMFORT, OUR PRIORITY
                </span>

                <h1>
                  Affordable Luxury at Aafiya Lakeview{" "}
                  <span className="services-text">
                    Service Apartments
                  </span>{" "}
                  in Coimbatore
                </h1>

                <img
                  src="/assets/img/underline.png"
                  alt=""
                  className="aafiya-about-accent"
                  aria-hidden="true"
                />

                <p>
                  Aafiya Lakeview Apartments offers premium, fully-furnished
                  service apartments in the heart of Coimbatore. Nestled beside
                  a stunning lake, this property provides guests with serene
                  lake views, a walking track, cycling paths, a kids&apos; play
                  zone, a basketball court, and access to lakeview restaurants
                  and a boathouse. With its close proximity to the racecourse,
                  Aafiya Lakeview ensures a tranquil and luxurious ambiance for
                  your stay.
                </p>

                <p>
                  Conveniently located on{" "}
                  <strong>
                    <a
                      href="/contact-us"
                      className="aafiya-location-link"
                    >
                      Trichy Road, near Government Hospital Road, Coimbatore
                    </a>
                  </strong>
                  , Aafiya Lakeview Service Apartments is among the finest
                  serviced residences in Coimbatore. It is well-connected to
                  major hospitals, business centers, shopping areas, and malls,
                  offering both comfort and accessibility for business and
                  leisure travelers alike.
                </p>

                <a href="/about-us" className="aafiya-about-cta">
                  Explore More
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="aafiya-about-features">
            <div className="aafiya-features-heading">
              <span className="aafiya-about-eyebrow">
                THE AAFIYA EXPERIENCE
              </span>

              <h2>Best Service Apartments in Coimbatore</h2>

              <p>
                Thoughtfully furnished spaces, flexible stays and everyday
                comfort for your time in Coimbatore.
              </p>
            </div>

            <div className="row aafiya-feature-grid">
              {features.map((feature, index) => {
                const FeatureIcon = featureIcons[index];

                return (
                  <div
                    className="col-lg-6 col-md-6 col-12"
                    key={feature}
                  >
                    <div className="aafiya-feature-item">
                      <span className="aafiya-feature-icon">
                        <FeatureIcon aria-hidden="true" />
                      </span>

                      <p>{feature}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="aafiya-features-footer">
              <span>
                <FiCheckCircle aria-hidden="true" />
                Comfort for short and extended stays
              </span>

              <a href="/about-us" className="aafiya-about-cta">
                Explore More
                <FiArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="aafiya-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Discover Aafiya video"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setVideoOpen(false);
            }
          }}
        >
          <div className="aafiya-video-modal-content">
            <button
              type="button"
              className="aafiya-video-close"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
              <FiX aria-hidden="true" />
            </button>

            <div className="aafiya-video-modal-heading">
              <span>DISCOVER AAFIYA</span>
              <h2>Your stay, your comfort</h2>
            </div>

            <video
              className="aafiya-video-player"
              src={VIDEO_URL}
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}

export default About;
