
import { useState } from "react";
import {
  FiWifi,
  FiTv,
  FiWind,
  FiBatteryCharging,
  FiShield,
  FiRefreshCw,
  FiDroplet,
  FiActivity,
  FiCoffee,
  FiPlayCircle,
  FiTruck,
  FiLayers,
  FiHome,
  FiCheck,
  FiX,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiMonitor,
  FiStar,
  FiLock,
  FiUsers,
} from "react-icons/fi";

import "../styles/TwoBHK.css";

const galleryImages = [
  "/assets/img/1b/1.webp",
  "/assets/img/1b/2.webp",
  "/assets/img/1b/3.webp",
  "/assets/img/1b/4.webp",
  "/assets/img/1b/5.webp",
  "/assets/img/1b/6.webp",
  "/assets/img/2b/3.webp",
  "/assets/img/2b/4.webp",
  "/assets/img/2b/5.webp",
  "/assets/img/2b/6.webp",
  "/assets/img/2b/7.webp",
  "/assets/img/2b/8.webp",
  "/assets/img/2b/9.webp",
  "/assets/img/2b/10.webp",
  "/assets/img/2b/11.webp",
  "/assets/img/2b/12.webp",
  "/assets/img/3b/1.webp",
  "/assets/img/3b/2.webp",
  "/assets/img/3b/3.webp",
  "/assets/img/2b/2.webp",
  "/assets/img/2b/1.jpeg",
];

const specifications = [
  ["Room Size", "800 sq.ft"],
  ["Max. Occupancy", "4 Adults"],
  ["Price", "₹ 5,500 (Including Tax)"],
  ["Living Room", "One"],
  ["Bedroom", "Two"],
  ["Bathroom", "Two"],
  ["Kitchen", "One"],
  ["View", "Lake View"],
];

const amenities = [
  { name: "Wifi", icon: FiWifi },
  { name: "TV", icon: FiTv },
  { name: "AC", icon: FiWind },
  { name: "Power Backup", icon: FiBatteryCharging },
  { name: "24/7 Security", icon: FiShield },
  { name: "Laundry / Washing Machine", icon: FiRefreshCw },
  { name: "Lake View", icon: FiDroplet },
  { name: "Walking Area", icon: FiActivity },
  { name: "Gym", icon: FiUsers },
  { name: "Cafe Area", icon: FiCoffee },
  { name: "Recreation Room", icon: FiPlayCircle },
  { name: "Car Parking", icon: FiTruck },
  { name: "Lift", icon: FiLayers },
  { name: "Lakeview Sitting Lounge", icon: FiHome },
];

const facilityGroups = [
  {
    title: "Living Room",
    icon: FiHome,
    items: [
      "3+1 SEATER SOFA",
      "TEAPOY",
      "LED TV WITH CABLE CONNECTION",
    ],
  },
  {
    title: "Comforts",
    icon: FiWind,
    items: [
      "AIR CONDITIONAL ROOM",
      "FAN",
      "LINENS",
      "DUVET",
      "TOWELS",
      "KETTEL FOR HOT WATER",
    ],
  },
  {
    title: "FURNITURE",
    icon: FiLayers,
    items: ["COTS", "SIDE TABLE", "WARDROBE"],
  },
  {
    title: "CLOTHING AND LAUNDRY",
    icon: FiRefreshCw,
    items: [
      "IRON BOX WITH BOARD (ON REQUEST)",
      "WASHING MACHINE",
    ],
  },
  {
    title: "REST ROOM",
    icon: FiDroplet,
    items: ["HEAD SHOWER", "GEYSER", "TOILETRIES"],
  },
  {
    title: "ENTERTAINMENT",
    icon: FiMonitor,
    items: ["TV", "SATELITE CHANNEL", "FREE WIFI"],
  },
  {
    title: "GETTING AROUND",
    icon: FiTruck,
    items: [
      "FREE PARKING",
      "WALKING TRACK",
      "CYCLING TRACK",
      "CHILDREN'S PLAY AREA",
    ],
  },
  {
    title: "KITCHEN",
    icon: FiCoffee,
    items: [
      "MICROWAVE",
      "GAS STOVE WITH GAS CONNECTION",
      "REFRIDGERATOR",
      "DISHES AND DINING UTENSILS",
    ],
  },
  {
    title: "OUTDOOR",
    icon: FiMapPin,
    items: ["LAKEVIEW", "BOAT HOUSE"],
  },
];

const relatedRooms = [
  {
    title: "Mini Studio Apartment- Lakeview- 1BHK",
    image: "/assets/img/mm1.png",
    price: "₹ 3,800",
    href: "/1bhk-mini-studio-apartment-coimbatore",
  },
  {
    title: "Kings Studio Apartment- 2BHK",
    image: "/assets/img/mm3.png",
    price: "₹ 5,000",
    href: "/2bhk-kings-studio-apartment-coimbatore",
  },
  {
    title: "Studio Apartment-Lakeview- 2BHK",
    image: "/assets/img/mm2.png",
    price: "₹ 5,500",
    href: "/2bhk-mini-studio-apartment-coimbatore",
  },
];

const faqs = [
  {
    question:
      "What should I consider when choosing a 2 BHK stay in Coimbatore?",
    answer:
      "Consider location, room space, facilities, accessibility and your planned duration of stay.",
  },
  {
    question:
      "Is a 2 BHK apartment good for a weekend stay in Coimbatore?",
    answer:
      "Yes, it can provide a comfortable and spacious base for a weekend visit.",
  },
  {
    question:
      "Can I choose between different 2 BHK apartments in Coimbatore?",
    answer:
      "Yes, Aafiya Lake View has different 2 BHK accommodation options, including Mini Studio and Kings Studio.",
  },
  {
    question:
      "Why choose Aafiya Lake View for a 2 BHK stay in Coimbatore?",
    answer:
      "It offers spacious apartment-style accommodation for families, couples, groups and other travellers.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="twobhk-section-heading">
      {eyebrow && (
        <span className="twobhk-heading-eyebrow">
          {eyebrow}
        </span>
      )}

      <h2>{title}</h2>

      <img
        src="/assets/img/underline.png"
        alt=""
        className="twobhk-heading-underline"
        aria-hidden="true"
      />

      {description && <p>{description}</p>}
    </div>
  );
}

function TwoBHK() {
  const [activeImage, setActiveImage] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const showPrevious = () => {
    setActiveImage((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === null
        ? null
        : (current + 1) % galleryImages.length
    );
  };

  return (
    <main className="twobhk-page">
      {/* PAGE BANNER */}
      <section className="twobhk-banner">
        <div className="twobhk-container">
          <span className="twobhk-eyebrow">
            AAFIYA LAKEVIEW
          </span>

          <h1>
            2BHK Best Studio Apartment in Coimbatore | Lakeview
          </h1>

          <div className="twobhk-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Room</span>
            <span>/</span>
            <span>Studio Apartment-Lakeview</span>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="twobhk-booking-section">
        <div className="twobhk-container">
          <SectionHeading
            title="For Booking"
            description="Plan your stay at Aafiya Lakeview."
          />

          <div className="twobhk-booking-card">
            <div className="twobhk-booking-info">
              <span className="twobhk-premium-icon">
                <FiCalendar />
              </span>

              <div>
                <strong>Book Your Stay</strong>
                <p>
                  Check availability for your preferred dates.
                </p>
              </div>
            </div>

            <a
              href="https://aafiyalakeview.bookingjini.in"
              target="_blank"
              rel="noreferrer"
              className="twobhk-primary-button"
            >
              Check Availability <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ROOM DETAILS */}
      <section className="twobhk-room-section">
        <div className="twobhk-container">
          <SectionHeading
            eyebrow="OUR ROOMS"
            title="Studio Apartment-Lakeview- 2BHK"
          />

          <div className="twobhk-overview">
            <div className="twobhk-main-image-wrap">
              <img
                src="/assets/img/about-us.jpg"
                alt="Studio Apartments in Coimbatore"
                className="twobhk-main-image"
              />

              <div className="twobhk-image-caption">
                <FiMapPin />
                <span>Studio Apartment - Lakeview</span>
              </div>
            </div>

            <div className="twobhk-overview-content">
              <span className="twobhk-small-label">
                LAKEVIEW COLLECTION
              </span>

              <h3>Studio Apartment-Lakeview - 2BHK</h3>

              <div className="twobhk-specifications">
                {specifications.map(([label, value]) => (
                  <div
                    className="twobhk-spec-row"
                    key={label}
                  >
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <a
                href="https://aafiyalakeview.bookingjini.in"
                target="_blank"
                rel="noreferrer"
                className="twobhk-primary-button twobhk-full-button"
              >
                Book This Apartment <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="twobhk-gallery-section">
        <div className="twobhk-container">
          <SectionHeading
            eyebrow="EXPLORE OUR SPACE"
            title="Apartment Gallery"
            description="Explore the apartment interiors and living spaces."
          />

          <div className="twobhk-gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`twobhk-gallery-item twobhk-gallery-item-${index + 1}`}
                onClick={() => setActiveImage(index)}
                aria-label={`View apartment photo ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Aafiya Lakeview 2BHK apartment ${index + 1}`}
                  loading="lazy"
                />

                <span className="twobhk-gallery-zoom">
                  <FiMaximize2 />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="twobhk-amenities-section">
        <div className="twobhk-container">
          <SectionHeading
            eyebrow="COMFORT & CONVENIENCE"
            title="Aafiya Lakeview’s Amenities"
            description="Explore the amenities available for your stay."
          />

          <div className="twobhk-amenities-grid">
            {amenities.map(({ name, icon: Icon }) => (
              <article
                className="twobhk-amenity-card"
                key={name}
              >
                <span className="twobhk-amenity-icon">
                  <Icon />
                </span>

                <h3>{name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="twobhk-facilities-section">
        <div className="twobhk-container">
          <SectionHeading
            eyebrow="INSIDE YOUR STAY"
            title="Apartment Facilities"
            description="Everything listed for a comfortable apartment stay."
          />

          <div className="twobhk-facilities-grid">
            {facilityGroups.map(({ title, icon: Icon, items }) => (
              <article
                className="twobhk-facility-card"
                key={title}
              >
                <div className="twobhk-facility-heading">
                  <span className="twobhk-facility-icon">
                    <Icon />
                  </span>

                  <h3>{title}</h3>
                </div>

                <ul>
                  {items.map((item) => (
                    <li key={item}>
                      <FiCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED ROOMS */}
      <section className="twobhk-related-section">
        <div className="twobhk-container">
          <SectionHeading
            eyebrow="OUR ROOMS"
            title="Elegant Comfort, Timeless Charm"
          />

          <div className="twobhk-related-grid">
            {relatedRooms.map((room) => (
              <article
                className="twobhk-related-card"
                key={room.title}
              >
                <a
                  href={room.href}
                  className="twobhk-related-image"
                >
                  <img src={room.image} alt={room.title} />

                  <span className="twobhk-related-image-icon">
                    <FiArrowRight />
                  </span>
                </a>

                <div className="twobhk-related-content">
                  <h3>
                    <a href={room.href}>{room.title}</a>
                  </h3>

                  <div
                    className="twobhk-stars"
                    aria-label="5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar key={star} />
                    ))}
                  </div>

                  <span className="twobhk-room-price">
                    From {room.price} /- + Tax /Daily
                  </span>

                  <a
                    href="/contact-us"
                    className="twobhk-text-link"
                  >
                    Book Online <FiArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="twobhk-faq-section">
        <div className="twobhk-container twobhk-faq-container">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Answers to common questions about our 2 BHK stay."
          />

          <div className="twobhk-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  className="twobhk-faq-item"
                  key={faq.question}
                >
                  <button
                    type="button"
                    className={`twobhk-faq-question ${
                      isOpen ? "is-open" : ""
                    }`}
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                  >
                    <span className="twobhk-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="twobhk-faq-question-text">
                      {faq.question}
                    </span>

                    <span className="twobhk-faq-toggle">
                      <FiChevronDown />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="twobhk-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM IMAGE LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="twobhk-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Apartment photo viewer"
          onClick={() => setActiveImage(null)}
        >
          <div className="twobhk-lightbox-topbar">
            <div className="twobhk-lightbox-brand">
              <FiHome />
              <span>AAFIYA LAKEVIEW</span>
            </div>

            <span className="twobhk-lightbox-counter">
              {String(activeImage + 1).padStart(2, "0")}
              <span> / </span>
              {String(galleryImages.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              className="twobhk-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close gallery"
            >
              <FiX />
            </button>
          </div>

          <button
            type="button"
            className="twobhk-lightbox-arrow twobhk-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <FiChevronLeft />
          </button>

          <img
            className="twobhk-lightbox-image"
            src={galleryImages[activeImage]}
            alt={`Apartment gallery image ${activeImage + 1}`}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="twobhk-lightbox-arrow twobhk-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <FiChevronRight />
          </button>

          <div className="twobhk-lightbox-bottom">
            <span>
              <FiMaximize2 />
              Apartment Gallery
            </span>

            <span>Use arrows to explore photos</span>
          </div>
        </div>
      )}
    </main>
  );
}

export default TwoBHK;
