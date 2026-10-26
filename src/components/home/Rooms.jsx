
import { useEffect, useRef, useState } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiExternalLink,
  FiCalendar,
  FiMapPin,
} from "react-icons/fi";

const BOOKING_WIDGET_URL =
  "https://be-alpha.bookingjini.com/website-widget.js?hotel_id=8530&widget_type=horizontal&theme_color=%23f7921B&company_id=9320&redirect_base_url=https%3A%2F%2Faafiyalakeview.bookingjini.in&open_be_new_window=1&widget_status=1";

const rooms = [
  {
    id: 1,
    name: "Mini Studio Apartment-Lakeview - 1BHK",
    type: "1 BHK · Mini Studio",
    price: "₹3,800",
    suffix: "+ tax / night",
    image: "/assets/img/3c/7.webp",
    alt: "Mini Studio Apartment Lakeview 1BHK",
    href: "/1bhk-mini-studio-apartment-coimbatore",
  },
  {
    id: 2,
    name: "Kings Studio Apartment- 2BHK",
    type: "2 BHK · Kings Studio",
    price: "₹5,000",
    suffix: "+ tax / night",
    image: "/assets/img/3a/7.webp",
    alt: "Kings Studio Apartment 2BHK",
    href: "/2bhk-kings-studio-apartment-coimbatore",
  },
  {
    id: 3,
    name: "Studio Apartment-Lakeview- 2BHK",
    type: "2 BHK · Lakeview",
    price: "₹5,500",
    suffix: "+ tax / night",
    image: "/assets/img/1b/4.webp",
    alt: "Studio Apartment Lakeview 2BHK",
    href: "/2bhk-mini-studio-apartment-coimbatore",
  },
];

function Rooms() {
  const bookingContainerRef = useRef(null);
  const [bookingError, setBookingError] = useState(false);

  useEffect(() => {
    const container = bookingContainerRef.current;

    if (!container) return;

    let active = true;
    let timer;

    setBookingError(false);

    const script = document.createElement("script");
    script.id = "bookingjini-website-widget-script";
    script.src = BOOKING_WIDGET_URL;
    script.async = true;

    script.onload = () => {
      if (!active) return;

      timer = window.setTimeout(() => {
        if (!active) return;

        const hasWidget =
          container.querySelector("iframe") ||
          container.querySelector("form") ||
          container.querySelector("input") ||
          container.querySelector("[class*='booking']");

        if (!hasWidget) {
          setBookingError(true);
        }
      }, 5000);
    };

    script.onerror = () => {
      if (active) setBookingError(true);
    };

    container.appendChild(script);

    return () => {
      active = false;
      window.clearTimeout(timer);
      script.remove();
      container.innerHTML = "";
    };
  }, []);

  return (
    <section className="our-rooms-area aafiya-rooms-section">
      <div className="container">
        {/* Booking Section */}
        <div className="aafiya-booking-section">
          <div className="aafiya-section-heading">
            <span className="aafiya-eyebrow">PLAN YOUR STAY</span>

            <h2>For Booking</h2>

            <img src="/assets/img/underline.png" alt="" />

            <p>
              Choose your dates and plan a comfortable stay at Aafiya
              Lakeview Apartments.
            </p>
          </div>

          <div className="booking-widget-box" ref={bookingContainerRef}>
            {bookingError && (
              <div className="aafiya-booking-fallback">
                <div className="aafiya-booking-fallback-icon">
                  <FiCalendar aria-hidden="true" />
                </div>

                <span>Ready to plan your stay?</span>

                <p>
                  Online booking is temporarily unavailable here. Continue
                  to our official booking page to check your stay options.
                </p>

                <a
                  href="https://aafiyalakeview.bookingjini.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Booking Page
                  <FiExternalLink aria-hidden="true" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Rooms Heading */}
        <div className="aafiya-section-heading aafiya-rooms-heading">
          <span className="aafiya-eyebrow">STAY YOUR WAY</span>

          <h2>Elegant Comfort, Timeless Charm</h2>

          <img src="/assets/img/underline.png" alt="" />

          <p>
            Discover thoughtfully designed apartments for your stay in
            Coimbatore.
          </p>
        </div>

        {/* Room Cards */}
        <div className="row aafiya-room-grid">
          {rooms.map((room) => (
            <div
              className="col-lg-4 col-md-6 col-12 mb-4"
              key={room.id}
            >
              <article className="aafiya-room-card">
                <a
                  className="aafiya-room-image"
                  href={room.href}
                  aria-label={`View ${room.name}`}
                >
                  <img
                    src={room.image}
                    alt={room.alt}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="aafiya-room-type">
                    <FiMapPin aria-hidden="true" />
                    {room.type}
                  </span>

                  <span
                    className="aafiya-room-arrow"
                    aria-hidden="true"
                  >
                    <FiArrowUpRight />
                  </span>
                </a>

                <div className="aafiya-room-details">
                  <h3>
                    <a href={room.href}>{room.name}</a>
                  </h3>

                  <div className="aafiya-room-bottom">
                    <div className="aafiya-room-price">
                      <strong>{room.price}</strong>
                      <span>{room.suffix}</span>
                    </div>

                    <a className="aafiya-room-link" href={room.href}>
                      View Details
                      <FiArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
