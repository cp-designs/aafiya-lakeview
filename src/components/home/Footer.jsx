
import {
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiPhone,
  FiMapPin,
  FiArrowUp,
  FiBookOpen,
  FiArrowUpRight,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/service-apartment-gallery" },
  { label: "Rooms", href: "/1bhk-mini-studio-apartment-coimbatore" },
  { label: "Contact Us", href: "/contact-us" },
];

const roomLinks = [
  {
    label: "Mini Studio Apartment – Lakeview – 1BHK",
    href: "/1bhk-mini-studio-apartment-coimbatore",
  },
  {
    label: "Kings Studio Apartment – 2BHK",
    href: "/2bhk-kings-studio-apartment-coimbatore",
  },
  {
    label: "Studio Apartment – Lakeview – 2BHK",
    href: "/2bhk-mini-studio-apartment-coimbatore",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="aafiya-footer">
      <div className="aafiya-footer-main">
        <div className="container">
          <div className="row g-4">
            {/* Brand and Description */}
            <div className="col-lg-4 col-md-6">
              <div className="aafiya-footer-brand">
                <a
                  href="/"
                  className="aafiya-footer-logo"
                  aria-label="Aafiya Lakeview Home"
                >
                  <img
                    src="/assets/img/aafiya-logo-new.png"
                    alt="Aafiya Lakeview Service Apartment"
                    loading="lazy"
                  />
                </a>

                <p className="aafiya-footer-description">
                  Aafiya Lakeview Service Apartment offers budget-friendly
                  1BHK, 2BHK, and King 2BHK studio apartments in Coimbatore.
                  Conveniently located and easily accessible.
                </p>

                <div className="aafiya-footer-socials">
                  <a
                    href="https://www.facebook.com/people/Aafiya-Lakeview/pfbid02AR3vzkeCiEmoxSPPdbGFfH78C9oRMbR1FdULYRn7M6AaT1r798UBiFr781VypmGul/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Aafiya Lakeview on Facebook"
                  >
                    <FiFacebook />
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCgflhobVY0y7gdQgrLbbdUQ"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Aafiya Lakeview on YouTube"
                  >
                    <FiYoutube />
                  </a>

                  <a
                    href="https://www.instagram.com/aafiyalakeviewapartments/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit Aafiya Lakeview on Instagram"
                  >
                    <FiInstagram />
                  </a>
                </div>

                <a
                  href="/terms-and-conditions"
                  className="aafiya-footer-terms"
                >
                  Terms &amp; Conditions
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="aafiya-footer-widget">
                <h3 className="aafiya-footer-title">Useful Links</h3>

                <ul className="aafiya-footer-links">
                  {usefulLinks.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>
                        <span className="aafiya-footer-link-arrow">›</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Room Links */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="aafiya-footer-widget">
                <h3 className="aafiya-footer-title">Our Rooms</h3>

                <ul className="aafiya-footer-links aafiya-footer-room-links">
                  {roomLinks.map((room) => (
                    <li key={room.href}>
                      <a href={room.href}>
                        <span className="aafiya-footer-link-arrow">›</span>
                        {room.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-lg-3 col-md-6">
              <div className="aafiya-footer-widget">
                <h3 className="aafiya-footer-title">Contact Information</h3>

                <ul className="aafiya-footer-contact">
                  <li>
                    <span className="aafiya-footer-contact-icon">
                      <FiPhone />
                    </span>

                    <div>
                      <span className="aafiya-footer-label">Call Us</span>
                      <a href="tel:+917305151950">+91 73051 51950</a>
                    </div>
                  </li>

                  <li>
                    <span className="aafiya-footer-contact-icon">
                      <FiMapPin />
                    </span>

                    <div>
                      <span className="aafiya-footer-label">Visit Us</span>
                      <p>
                        51 Sunderasan Iyyar Layout, Trichy Road, near
                        Government Hospital, Coimbatore
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="aafiya-footer-bottom">
        <div className="container">
          <div className="aafiya-footer-bottom-inner">
            <p>
              © {currentYear} <strong>Aafiya Lakeview.</strong> All rights
              reserved.
            </p>

            <p>
              Powered by{" "}
              <a
                href="https://creativepoint.in/"
                target="_blank"
                rel="noreferrer"
              >
                Creative Point
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=7305151950"
        className="aafiya-footer-float aafiya-footer-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Aafiya Lakeview on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {/* Floating Catalogue */}
      <a
        href="/assets/img/main.pdf"
        className="aafiya-footer-float aafiya-footer-catalogue"
        target="_blank"
        rel="noreferrer"
        aria-label="View Aafiya Lakeview catalogue"
      >
        <FiBookOpen />
      </a>

      {/* Back to Top */}
      <button
        type="button"
        className="aafiya-footer-back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
