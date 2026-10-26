
import { useState } from "react";
import {
  FiWifi,
  FiWind,
  FiShield,
  FiDroplet,
  FiCoffee,
  FiTv,
  FiTruck,
  FiHome,
  FiZap,
  FiArrowRight,
  FiCheck,
  FiX,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiCalendar,
  FiUsers,
  FiMapPin,
  FiMonitor,
  FiActivity ,
  FiLock,
  FiLayers,
} from "react-icons/fi";

import "../styles/OneBHK.css";

const galleryImages = [
  "/assets/img/3c/2.webp",
  "/assets/img/3c/3.webp",
  "/assets/img/3c/4.webp",
  "/assets/img/3c/5.webp",
  "/assets/img/3c/6.webp",
  "/assets/img/3c/7.webp",
  "/assets/img/3c/8.webp",
  "/assets/img/3c/9.webp",
  "/assets/img/2b/1.jpeg",
];

const specifications = [
  ["Room Size", "480 sq.ft"],
  ["Max. Occupancy", "2 Adults"],
  ["Price", "₹3,800 (Including Tax)"],
  ["Living Room", "One"],
  ["Bedroom", "One"],
  ["Bathroom", "One"],
  ["Kitchen", "One"],
  ["View", "Lake View"],
];

const amenities = [
  { name: "Wi-Fi", icon: FiWifi },
  { name: "Air Conditioning", icon: FiWind },
  { name: "Power Backup", icon: FiZap },
  { name: "24/7 Security", icon: FiShield },
  { name: "Lake View", icon: FiDroplet },
  { name: "Laundry / Washing Machine", icon: FiHome },
  { name: "Gym", icon: FiActivity  },
  { name: "Recreation Room", icon: FiTv },
  { name: "Cafe Area", icon: FiCoffee },
  { name: "Car Parking", icon: FiTruck },
  { name: "Lift", icon: FiLayers },
  { name: "Lakeview Sitting Lounge", icon: FiHome },
  { name: "Housekeeping", icon: FiCheck },
];

const facilityGroups = [
  {
    title: "Living Room",
    icon: FiHome,
    items: [
      "3 Seater Sofa",
      "Teapoy",
      "LED TV with Cable Connection",
    ],
  },
  {
    title: "Comforts",
    icon: FiWind,
    items: [
      "Air Conditioned Room",
      "Fan",
      "Linens",
      "Duvet",
      "Towels",
      "Kettle for Hot Water",
    ],
  },
  {
    title: "Furniture",
    icon: FiLayers,
    items: ["Cots", "Side Table", "Wardrobe"],
  },
  {
    title: "Clothing & Laundry",
    icon: FiHome,
    items: [
      "Iron Box with Board (On Request)",
      "Washing Machine",
    ],
  },
  {
    title: "Rest Room",
    icon: FiDroplet,
    items: ["Head Shower", "Geyser", "Toiletries"],
  },
  {
    title: "Entertainment",
    icon: FiMonitor,
    items: ["TV", "Satellite Channel", "Free Wi-Fi"],
  },
  {
    title: "Getting Around",
    icon: FiTruck,
    items: [
      "Free Parking",
      "Walking Track",
      "Cycling Track",
      "Children's Play Area",
    ],
  },
  {
    title: "Kitchen",
    icon: FiCoffee,
    items: [
      "Microwave",
      "Gas Stove with Gas Connection",
      "Refrigerator",
      "Dishes and Dining Utensils",
    ],
  },
  {
    title: "Outdoor",
    icon: FiMapPin,
    items: ["Lake View", "Boat House"],
  },
];

const faqs = [
  {
    question:
      "What is the price of a 1 BHK service apartment in Coimbatore?",
    answer:
      "Aafiya Lakeview offers a 1 BHK Mini Studio Apartment from ₹3,800 per day. The original page lists this price including tax. Monthly and long-term rental options are also available based on your stay duration.",
  },
  {
    question:
      "Is the 1 BHK studio apartment fully furnished?",
    answer:
      "Yes. The apartment includes a sofa, cot, side table, wardrobe, LED TV, linens, towels, air conditioning, washing machine and other listed amenities.",
  },
  {
    question:
      "Does the 1 BHK service apartment have a kitchen?",
    answer:
      "Yes. The kitchen includes a microwave, gas stove with gas connection, refrigerator, dishes and dining utensils.",
  },
  {
    question:
      "Is there parking available at the apartment?",
    answer:
      "Yes. The original page lists free car parking, Wi-Fi, lift access, power backup and 24/7 security.",
  },
];

const relatedRooms = [
  {
    title: "Mini Studio Apartment – Lakeview – 1BHK",
    image: "/assets/img/mm1.png",
    price: "₹3,800",
    href: "/1bhk-mini-studio-apartment-coimbatore",
  },
  {
    title: "Kings Studio Apartment – 2BHK",
    image: "/assets/img/mm3.png",
    price: "₹5,000",
    href: "/2bhk-kings-studio-apartment-coimbatore",
  },
  {
    title: "Studio Apartment – Lakeview – 2BHK",
    image: "/assets/img/mm2.png",
    price: "₹5,500",
    href: "/2bhk-mini-studio-apartment-coimbatore",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  return (
    <div
      className={`onebhk-section-heading ${
        align === "left" ? "onebhk-heading-left" : ""
      }`}
    >
      <span className="onebhk-heading-eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      <img
        src="/assets/img/underline.png"
        alt=""
        className="onebhk-heading-underline"
        aria-hidden="true"
      />

      {description && <p>{description}</p>}
    </div>
  );
}

function OneBHK() {
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
    <main className="onebhk-page">
      {/* PAGE BANNER */}
      <section className="onebhk-banner">
        <div className="onebhk-container">
          <span className="onebhk-eyebrow">
            AAFIYA LAKEVIEW
          </span>

          <h1>1BHK Mini Studio Apartments in Coimbatore</h1>

          <div className="onebhk-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Rooms</span>
            <span>/</span>
            <span>Mini Studio Apartment Lakeview</span>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section className="onebhk-booking-section">
        <div className="onebhk-container">
          <SectionHeading
            eyebrow="PLAN YOUR STAY"
            title="Book Your Stay"
            description="Check availability and plan a comfortable stay at Aafiya Lakeview."
          />

          <div className="onebhk-booking-card">
            <div className="onebhk-booking-info">
              <span className="onebhk-premium-icon">
                <FiCalendar />
              </span>

              <div>
                <strong>Ready for your stay?</strong>
                <p>
                  Choose your dates and check availability online.
                </p>
              </div>
            </div>

            <a
              className="onebhk-primary-button"
              href="https://aafiyalakeview.bookingjini.in"
              target="_blank"
              rel="noreferrer"
            >
              Check Availability <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* ROOM OVERVIEW */}
      <section className="onebhk-room-section">
        <div className="onebhk-container">
          <SectionHeading
            eyebrow="OUR ROOMS"
            title="1 BHK Mini Studio Apartments in Coimbatore"
            description="Short-term, monthly and long-term rental options are available."
            align="left"
          />

          <div className="onebhk-overview">
            <div className="onebhk-main-image-wrap">
              <img
                className="onebhk-main-image"
                src="/assets/img/about-us.jpg"
                alt="Aafiya Lakeview studio apartment"
              />

              <div className="onebhk-image-caption">
                <FiMapPin />
                <span>Comfortable Lakeview Stay</span>
              </div>
            </div>

            <div className="onebhk-overview-content">
              <span className="onebhk-small-label">
                LAKEVIEW COLLECTION
              </span>

              <h3>
                1BHK Mini Studio Apartment – Lakeview
              </h3>

              <p className="onebhk-description">
                A furnished studio apartment designed for a
                comfortable stay, with a bedroom, living room,
                kitchen, bathroom and lake view.
              </p>

              <div className="onebhk-specifications">
                {specifications.map(([label, value]) => (
                  <div
                    className="onebhk-spec-row"
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
                className="onebhk-primary-button onebhk-full-button"
              >
                Book This Apartment <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="onebhk-gallery-section">
        <div className="onebhk-container">
          <SectionHeading
            eyebrow="TAKE A LOOK AROUND"
            title="Apartment Gallery"
            description="Explore the apartment spaces and interiors."
          />

          <div className="onebhk-gallery-grid">
            {galleryImages.map((image, index) => (
              <button
                className={`onebhk-gallery-item onebhk-gallery-item-${index + 1}`}
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`View apartment photo ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`Aafiya Lakeview apartment ${index + 1}`}
                />

                <span className="onebhk-gallery-zoom">
                  <FiMaximize2 />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="onebhk-amenities-section">
        <div className="onebhk-container">
          <SectionHeading
            eyebrow="COMFORT & CONVENIENCE"
            title="Aafiya Lakeview Amenities"
            description="Facilities listed for a convenient apartment stay."
          />

          <div className="onebhk-amenities-grid">
            {amenities.map(({ name, icon: Icon }) => (
              <div
                className="onebhk-amenity-card"
                key={name}
              >
                <span className="onebhk-amenity-icon">
                  <Icon />
                </span>

                <h3>{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="onebhk-facilities-section">
        <div className="onebhk-container">
          <SectionHeading
            eyebrow="INSIDE YOUR STAY"
            title="Apartment Facilities"
            description="Explore the facilities listed for the apartment."
          />

          <div className="onebhk-facilities-grid">
            {facilityGroups.map(({ title, icon: Icon, items }) => (
              <article
                className="onebhk-facility-card"
                key={title}
              >
                <div className="onebhk-facility-heading">
                  <span className="onebhk-facility-icon">
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
      <section className="onebhk-related-section">
        <div className="onebhk-container">
          <SectionHeading
            eyebrow="FIND YOUR SPACE"
            title="Elegant Comfort, Timeless Charm"
          />

          <div className="onebhk-related-grid">
            {relatedRooms.map((room) => (
              <article
                className="onebhk-related-card"
                key={room.title}
              >
                <a
                  href={room.href}
                  className="onebhk-related-image"
                >
                  <img src={room.image} alt={room.title} />
                  <span className="onebhk-related-image-icon">
                    <FiArrowRight />
                  </span>
                </a>

                <div className="onebhk-related-content">
                  <h3>
                    <a href={room.href}>{room.title}</a>
                  </h3>

                  <div
                    className="onebhk-stars"
                    aria-label="5 stars"
                  >
                    ★★★★★
                  </div>

                  <p>
                    From <strong>{room.price}</strong> + tax / daily
                  </p>

                  <a
                    className="onebhk-text-link"
                    href="https://aafiyalakeview.bookingjini.in"
                    target="_blank"
                    rel="noreferrer"
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
      <section className="onebhk-faq-section">
        <div className="onebhk-container onebhk-faq-container">
          <SectionHeading
            eyebrow="NEED TO KNOW?"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our apartment."
          />

          <div className="onebhk-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  className="onebhk-faq-item"
                  key={faq.question}
                >
                  <button
                    type="button"
                    className={`onebhk-faq-question ${
                      isOpen ? "is-open" : ""
                    }`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="onebhk-faq-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="onebhk-faq-question-text">
                      {faq.question}
                    </span>

                    <span className="onebhk-faq-toggle">
                      <FiChevronDown />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="onebhk-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PREMIUM GALLERY LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="onebhk-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Apartment photo viewer"
          onClick={() => setActiveImage(null)}
        >
          <div className="onebhk-lightbox-topbar">
            <div className="onebhk-lightbox-brand">
              <FiHome />
              <span>AAF IYA LAKEVIEW</span>
            </div>

            <span className="onebhk-lightbox-counter">
              {String(activeImage + 1).padStart(2, "0")}
              <span> / </span>
              {String(galleryImages.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              className="onebhk-lightbox-close"
              onClick={() => setActiveImage(null)}
              aria-label="Close gallery"
            >
              <FiX />
            </button>
          </div>

          <button
            type="button"
            className="onebhk-lightbox-arrow onebhk-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            <FiChevronLeft />
          </button>

          <img
            className="onebhk-lightbox-image"
            src={galleryImages[activeImage]}
            alt={`Apartment gallery image ${activeImage + 1}`}
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="onebhk-lightbox-arrow onebhk-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <FiChevronRight />
          </button>

          <div className="onebhk-lightbox-bottom">
            <span>
              <FiMaximize2 />
              Apartment Gallery
            </span>
            <span>
              Use arrows to explore photos
            </span>
          </div>
        </div>
      )}
    </main>
  );
}

export default OneBHK;
