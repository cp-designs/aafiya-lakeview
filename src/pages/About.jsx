
import { FiPlay, FiArrowRight, FiCircle } from "react-icons/fi";
import { useState } from "react";

const ABOUT_VIDEO_URL = "https://www.youtube.com/embed/NoQ07KgZKXg";

const apartmentBenefits = [
  "Choose a service apartment in Coimbatore or nearby with easy access to public transport and convenient taxi availability. Look for secure parking facilities to ensure your car's safety, allowing you to relax and unwind with peace of mind.",

  "The service apartment you choose should also be close to malls, markets, and other amenities. Residents typically stay for varying durations, whether for short stays of one day or monthly, or for longer periods up to one year.",

  "Staying in a serviced apartment offers a customized experience. Special requests like pre-arranged secure parking and stocked kitchen cupboards enhance your stay. Choose an apartment with top safety standards, including closed-circuit cameras and alarms, for a secure environment.",

  "Compare services when choosing a nearby serviced apartment. Seek 24/7 concierge, security, and maintenance. When choosing a service apartment in Gandhipuram or near Coimbatore railway station, consider affordable options like Qhouse with rentals below ₹5,000 on Trichy Rd.",
];

function About() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <main className="aafiya-about-page">
      {/* Page Banner */}
      <section className="aafiya-about-banner">
        <div className="container">
          <div className="aafiya-about-banner-content">
            <span className="aafiya-about-banner-eyebrow">
              WELCOME TO AAFIYA LAKEVIEW
            </span>

            <h1 id="banner-color">
              About Aafiya Lakeview Apartments
            </h1>

            <nav aria-label="Breadcrumb">
              <ol className="aafiya-about-breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="aafiya-about-intro-section">
        <div className="container">
          <div className="aafiya-about-section-heading">
            <span className="aafiya-about-eyebrow">EXPLORE AAFIYA</span>

            <h2>We are cool to give you pleasure</h2>

            <img
              src="/assets/img/underline.png"
              alt=""
              aria-hidden="true"
              className="aafiya-about-underline"
            />
          </div>

          <div className="row align-items-center g-5">
            {/* Video Image */}
            <div className="col-lg-6">
              <div className="aafiya-about-video-card">
                <img
                  src="/assets/img/about-us.jpg"
                  alt="Aafiya Lakeview serviced apartments in Coimbatore"
                  loading="lazy"
                />

                <div className="aafiya-about-video-overlay">
                  <button
                    type="button"
                    className="aafiya-about-play-button"
                    onClick={() => setIsVideoOpen(true)}
                    aria-label="Play Aafiya Lakeview introduction video"
                  >
                    <FiPlay />
                  </button>

                  <span>Discover Aafiya Lakeview</span>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="col-lg-6">
              <div className="aafiya-about-intro-copy">
                <span className="aafiya-about-copy-eyebrow">
                  COMFORT. CONVENIENCE. CARE.
                </span>

                <h2>
                  Why Choose Aafiya Lakeview Serviced Apartments in Coimbatore
                </h2>

                <img
                  src="/assets/img/underline.png"
                  alt=""
                  aria-hidden="true"
                  className="aafiya-about-copy-underline"
                />

                <p>
                  Aafiya Lakeview service apartments in Coimbatore offer a
                  comfortable stay with rentals below ₹7,000 and ₹10,000,
                  and options below ₹5,000 on Trichy Rd. Are serviced
                  apartments cheaper than hotels, whether for a short or
                  long stay?
                </p>

                <p>
                  Ranging from Rooms Mini Studio Apartment-Lakeview, 1BHK
                  Studio Apartment-Lakeview, and 2BHK Kings Studio Apartment
                  in Trichy Rd, near Government Hospital Road, Coimbatore.
                  With modern facilities, our compact serviced apartments
                  in Coimbatore are apt for corporate guests, while the
                  larger apartments are the preferred choice of stay for
                  families. Our service apartments ensure homely comfort.
                </p>

                <a
                  href="/contact-us"
                  className="aafiya-about-contact-button"
                >
                  Contact Us <FiArrowRight />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="aafiya-about-details">
            <p>
              Guests at Aafiya Lakeview Service Apartment can choose to
              order in and use the in-house kitchen. Couple this with
              service apartment-like services such as housekeeping, a
              front desk, car parking, laundry, and more. Aafiya Lakeview
              Service Apartment had an absolutely comfortable stay!
            </p>

            <p>
              Our goal is to provide our guests with an outstanding living
              environment. Our Aafiya Lakeview apartments are custom
              designed, featuring interiors and top-notch furnishing. They
              feature bedrooms with cozy beds, ample storage space,
              contemporary bathrooms with complimentary toiletries, a
              lounge, a dining room, and a kitchen. Our housekeeping staff
              goes over an extensive checklist to maintain cleaning and
              hygiene prior to your arrival.
            </p>

            <p>
              Our service apartments in Coimbatore are located near Race
              Course, Trichy Road, Railway Station, GH Hospital, KG
              Hospital, Restaurants, Banks &amp; ATMs, Ganga Hospital,
              Ramakrishna Hospital, Isha Yoga, and shopping hubs.
            </p>
          </div>

          {/* Apartment Benefits */}
          <div className="aafiya-about-benefits">
            <div className="aafiya-about-benefits-heading">
              <span className="aafiya-about-eyebrow">
                YOUR STAY, YOUR COMFORT
              </span>

              <h2>
                Choose a Serviced Apartment in Coimbatore: Convenience,
                Comfort, and Security
              </h2>

              <img
                src="/assets/img/underline.png"
                alt=""
                aria-hidden="true"
                className="aafiya-about-underline"
              />
            </div>

            <ul className="aafiya-about-benefits-list">
              {apartmentBenefits.map((benefit, index) => (
                <li key={index}>
                  <span className="aafiya-about-benefit-icon">
                    <FiCircle />
                  </span>

                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="aafiya-about-final-cta">
            <h2>Planning Your Stay in Coimbatore?</h2>

            <p>
              Contact Aafiya Lakeview to learn more about our serviced
              apartments.
            </p>

            <a href="/contact-us" className="aafiya-about-contact-button">
              Contact Us <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Certificate */}
      <section className="aafiya-about-certificate">
        <div className="container">
          <div className="aafiya-about-section-heading">
            <span className="aafiya-about-eyebrow">OUR RECOGNITION</span>
            <h2>Certificate</h2>

            <img
              src="/assets/img/underline.png"
              alt=""
              aria-hidden="true"
              className="aafiya-about-underline"
            />
          </div>

          <div className="aafiya-about-certificate-image">
            <img
              src="/assets/img/cer-1.jpg"
              alt="Aafiya Lakeview certificate"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="aafiya-about-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Aafiya Lakeview introduction video"
          onClick={() => setIsVideoOpen(false)}
        >
          <button
            type="button"
            className="aafiya-about-video-close"
            onClick={() => setIsVideoOpen(false)}
            aria-label="Close video"
          >
            &times;
          </button>

          <div
            className="aafiya-about-video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              src={`${ABOUT_VIDEO_URL}?autoplay=1&rel=0`}
              title="Aafiya Lakeview introduction video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default About;
