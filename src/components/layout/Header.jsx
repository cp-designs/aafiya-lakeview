
import { useState, useEffect } from "react";
import "./Header.css";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Gallery", href: "/service-apartment-gallery" },
];

const roomItems = [
  {
    label: "Mini Studio Apartment - Lakeview - 1BHK",
    href: "/1bhk-mini-studio-apartment-coimbatore",
  },
  {
    label: "Kings Studio Apartment - 2BHK",
    href: "/2bhk-kings-studio-apartment-coimbatore",
  },
  {
    label: "Studio Apartment - Lakeview - 2BHK",
    href: "/2bhk-mini-studio-apartment-coimbatore",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roomsOpen, setRoomsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setRoomsOpen(false);
  };

  return (
    <header
      className={`eorik-nav-style fixed-top aafiya-header ${
        isScrolled ? "is-scrolled" : "is-transparent"
      }`}
    >
      <div className="navbar-area">
        <div className="main-nav">
          <nav
            className="navbar navbar-expand-md navbar-light"
            aria-label="Main navigation"
          >
            <div className="container">
              <a
                className="navbar-brand"
                href="/"
                onClick={closeMenu}
                aria-label="Aafiya Lakeview home"
              >
                <img
                  src="/assets/img/aafiya-logo-new.png"
                  alt="Aafiya Lakeview Service Apartments"
                />
              </a>

              <button
                type="button"
                className={`aafiya-menu-toggle ${
                  menuOpen ? "is-active" : ""
                }`}
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                aria-expanded={menuOpen}
                aria-controls="aafiya-navbar"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <span />
                <span />
                <span />
              </button>

              <div
                id="aafiya-navbar"
                className={`collapse navbar-collapse mean-menu ${
                  menuOpen ? "show" : ""
                }`}
              >
                <ul className="navbar-nav m-auto">
                  {navigationItems.map((item) => (
                    <li className="nav-item" key={item.label}>
                      <a
                        className="dropdown-toggles nav-link"
                        href={item.href}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}

                  <li
                    className={`nav-item aafiya-rooms-item ${
                      roomsOpen ? "rooms-open" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="dropdown-toggles nav-link aafiya-rooms-toggle"
                      aria-expanded={roomsOpen}
                      aria-controls="aafiya-rooms-dropdown"
                      onClick={() => setRoomsOpen((open) => !open)}
                    >
                      Rooms
                      <svg
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        aria-hidden="true"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <ul
                      id="aafiya-rooms-dropdown"
                      className="dropdown-menu"
                    >
                      {roomItems.map((room) => (
                        <li className="nav-item" key={room.href}>
                          <a
                            className="nav-link"
                            href={room.href}
                            onClick={closeMenu}
                          >
                            {room.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a
                      className="dropdown-toggles nav-link"
                      href="/rules-regulations"
                      onClick={closeMenu}
                    >
                      Rules &amp; Regulations
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="dropdown-toggles nav-link"
                      href="/service-apartment-blog"
                      onClick={closeMenu}
                    >
                      Blog
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="dropdown-toggles nav-link"
                      href="/contact-us"
                      onClick={closeMenu}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>

                <div className="others-option">
                  <a
                    className="call-us"
                    href="tel:+917305151950"
                    aria-label="Call Aafiya Lakeview for reservations"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="19"
                      height="19"
                      aria-hidden="true"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18.8a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.05 8.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.69A2 2 0 0 1 22 16.92Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span className="reservation-text">
                      For Reservations
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
