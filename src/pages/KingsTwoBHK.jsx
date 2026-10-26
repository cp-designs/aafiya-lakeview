
import { useEffect, useState } from "react";
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
  FiMonitor,
  FiTruck,
  FiLayers,
  FiHome,
  FiCheckCircle,
  FiX,
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
  FiArrowRight,
  FiCalendar,
  FiMapPin,
  FiUsers,
  FiStar,
  FiLock,
  FiSun,
  FiBox,
  FiPocket,
  FiMoon,
  FiMonitor as FiEntertainment,
} from "react-icons/fi";

import "../styles/KingsTwoBHK.css";

const ASSETS = "/assets/img";

const galleryImages = [
  {
    src: `${ASSETS}/3a/4.webp`,
    alt: "Apartments in near me",
  },
  {
    src: `${ASSETS}/3a/5.webp`,
    alt: "Near by apartment for rent",
  },
  {
    src: `${ASSETS}/3a/6.webp`,
    alt: "Furnished housing near me",
  },
  {
    src: `${ASSETS}/3a/7.webp`,
    alt: "Near apartments near me",
  },
  {
    src: `${ASSETS}/3a/8.webp`,
    alt: "Nearby rooms for rent",
  },
  {
    src: `${ASSETS}/3a/9.webp`,
    alt: "Bachelor room for rent near me",
  },
  {
    src: `${ASSETS}/3a/10.webp`,
    alt: "Residential apartments near me",
  },
  {
    src: `${ASSETS}/3a/11.webp`,
    alt: "Cheapest rooms for rent near me",
  },
  {
    src: `${ASSETS}/3a/12.webp`,
    alt: "Rental accommodation near me",
  },
  {
    src: `${ASSETS}/3a/13.webp`,
    alt: "Rental accommodation near me",
  },
  {
    src: `${ASSETS}/3a/14.webp`,
    alt: "Rental accommodation near me",
  },
  {
    src: `${ASSETS}/3a/17.webp`,
    alt: "Rental accommodation near me",
  },
  {
    src: `${ASSETS}/3a/1.webp`,
    alt: "Nearest apartments for rent",
  },
  {
    src: `${ASSETS}/3a/2.webp`,
    alt: "Efficiency apartments for rent near me",
  },
  {
    src: `${ASSETS}/3a/3.webp`,
    alt: "Efficiency apts near me",
  },
  {
    src: `${ASSETS}/2b/1.jpeg`,
    alt: "Rentals available near me",
  },
];

const roomSpecifications = [
  { label: "Room Size", value: "800 sq.ft" },
  { label: "Max. Occupancy", value: "4 Adults" },
  { label: "Price", value: "₹ 5,000 (Including Tax)" },
  { label: "Living Room", value: "One" },
  { label: "Bedroom", value: "Two" },
  { label: "Bathroom", value: "Two" },
  { label: "Kitchen", value: "One" },
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
    icon: FiSun,
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
    icon: FiEntertainment,
    items: ["TV", "SATELITE CHANNEL", "FREE WIFI"],
  },
  {
    title: "GETTING AROUND",
    icon: FiActivity,
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

const amenities = [
  { title: "Wifi", icon: FiWifi },
  { title: "TV", icon: FiTv },
  { title: "AC", icon: FiWind },
  { title: "Power Backup", icon: FiBatteryCharging },
  { title: "24/7 Security", icon: FiLock },
  { title: "Laundry / Washing Machine", icon: FiRefreshCw },
  { title: "Lake View", icon: FiDroplet },
  { title: "Walking Area", icon: FiActivity },
  { title: "Gym", icon: FiActivity },
  { title: "Cafe Area", icon: FiCoffee },
  { title: "Recreation Room", icon: FiMonitor },
  { title: "Car Parking", icon: FiTruck },
  { title: "Lift", icon: FiLayers },
  { title: "Lakeview Sitting Lounge", icon: FiHome },
];

const relatedRooms = [
  {
    image: `${ASSETS}/mm1.png`,
    alt: "Near me apartments",
    title: "Mini Studio Apartment- Lakeview- 1BHK",
    href: "/1bhk-mini-studio-apartment-coimbatore",
    price: "From ₹ 3,800 /- + Tax /Daily",
  },
  {
    image: `${ASSETS}/mm3.png`,
    alt: "Apartment nearby",
    title: "Kings Studio Apartment- 2BHK",
    href: "/2bhk-kings-studio-apartment-coimbatore",
    price: "From ₹ 5,000 /- + Tax/Daily",
  },
  {
    image: `${ASSETS}/mm2.png`,
    alt: "Studio room for rent near me",
    title: "Studio Apartment-Lakeview- 2BHK",
    href: "/2bhk-mini-studio-apartment-coimbatore/",
    price: "From ₹ 5,500 /- + Tax/Daily",
  },
];

const faqs = [
  {
    question: "Where can I find a 2 BHK apartment in Coimbatore?",
    answer:
      "Aafiya Lake View offers comfortable 2 BHK apartments for stays in Coimbatore.",
  },
  {
    question: "Can I book a 2 BHK apartment for a short stay in Coimbatore?",
    answer:
      "Yes, it is suitable for guests looking for a comfortable short-term stay.",
  },
  {
    question: "Is a 2 BHK apartment better than a hotel for families?",
    answer:
      "A 2 BHK apartment can provide more space and a home-like environment for families.",
  },
  {
    question: "Is the apartment suitable for group stays in Coimbatore?",
    answer:
      "Yes, a 2 BHK layout offers separate rooms and shared living space for groups.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="kings2-section-heading">
      {eyebrow && (
        <span className="kings2-eyebrow">{eyebrow}</span>
      )}

      <h2>{title}</h2>

      <img
        className="kings2-underline"
        src={`${ASSETS}/underline.png`}
        alt=""
      />

      {description && <p>{description}</p>}
    </div>
  );
}

function BookingWidget() {
  useEffect(() => {
    const scriptId = "kings2-bookingjini-widget-script";

    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");

    script.id = scriptId;
    script.src =
      "https://be-alpha.bookingjini.com/website-widget.js?hotel_id=8530&widget_type=horizontal&theme_color=%23f7921B&company_id=9320&redirect_base_url=https%3A%2F%2Faafiyalakeview.bookingjini.in&open_be_new_window=1&widget_status=1";
    script.async = true;
    script.defer = true;

    document
      .getElementById("kings2-booking-widget")
      ?.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
  <section className="kings2-booking-section">
  <div className="kings2-container">
    <SectionHeading
      eyebrow="PLAN YOUR STAY"
      title="Book Your Stay"
      description="Check availability and plan a comfortable stay at Aafiya Lakeview."
    />

    <div className="kings2-booking-card">
      <div className="kings2-booking-info">
        <span className="kings2-premium-icon">
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
        className="kings2-primary-button"
        href="https://aafiyalakeview.bookingjini.in"
        target="_blank"
        rel="noreferrer"
      >
        Check Availability <FiArrowRight />
      </a>
    </div>
  </div>
</section>
  );
}

function RoomOverview() {
  return (
    <section className="kings2-overview-section">
      <div className="kings2-container">
        <SectionHeading
          eyebrow="Our Rooms"
          title="Kings Studio Apartment- 2BHK"
        />

        <div className="kings2-overview-grid">
          <div className="kings2-main-image-wrap">
            <img
              className="kings2-main-image"
              src={`${ASSETS}/about-us.jpg`}
              alt="Studio Apartments in Coimbatore"
            />
          </div>

          <div className="kings2-overview-content">
            <span className="kings2-overview-label">
              Kings Studio Apartment
            </span>

            <h2>Kings Studio Apartment</h2>

            <div className="kings2-specifications">
              {roomSpecifications.map((spec) => (
                <div className="kings2-spec-card" key={spec.label}>
                  <div className="kings2-spec-label">
                    {spec.label}
                  </div>

                  <div className="kings2-spec-value">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoomGallery() {
  const [activeImage, setActiveImage] = useState(null);

  const showPrevious = () => {
    setActiveImage((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (activeImage === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveImage(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeImage]);

  return (
    <section className="kings2-gallery-section">
      <div className="kings2-container">
        <SectionHeading
          eyebrow="Gallery"
          title="Explore Our Apartment"
        />

        <div className="kings2-gallery-grid">
          {galleryImages.map((image, index) => (
            <button
              type="button"
              className="kings2-gallery-item"
              key={image.src}
              onClick={() => setActiveImage(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />

              <span className="kings2-gallery-zoom">
                <FiMaximize2 />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeImage !== null && (
        <div
          className="kings2-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Apartment image gallery"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="kings2-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="kings2-lightbox-top">
              <span>AAF IYA LAKEVIEW</span>

              <span className="kings2-lightbox-counter">
                {activeImage + 1} / {galleryImages.length}
              </span>

              <button
                type="button"
                onClick={() => setActiveImage(null)}
                aria-label="Close gallery"
              >
                <FiX />
              </button>
            </div>

            <button
              type="button"
              className="kings2-lightbox-prev"
              onClick={showPrevious}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </button>

            <img
              className="kings2-lightbox-image"
              src={galleryImages[activeImage].src}
              alt={galleryImages[activeImage].alt}
            />

            <button
              type="button"
              className="kings2-lightbox-next"
              onClick={showNext}
              aria-label="Next image"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function ApartmentFacilities() {
  return (
    <section className="kings2-facilities-section">
      <div className="kings2-container">
        <SectionHeading
          eyebrow="Apartment Facilities"
          title="Facilities Available in Our Apartment"
        />

        {facilityGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div
              className="kings2-facility-group"
              key={group.title}
            >
              <div className="kings2-facility-title">
                <span className="kings2-facility-icon">
                  <Icon />
                </span>

                <h3>{group.title}</h3>
              </div>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>
                    <FiCheckCircle />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Amenities() {
  return (
    <section className="kings2-amenities-section">
      <div className="kings2-container">
        <SectionHeading
          eyebrow="Amenities"
          title="Aafiya Lakeview’s Amenities"
        />

        <div className="kings2-amenities-grid">
          {amenities.map((amenity) => {
            const Icon = amenity.icon;

            return (
              <div
                className="kings2-amenity-card"
                key={amenity.title}
              >
                <span className="kings2-amenity-icon">
                  <Icon />
                </span>

                <h3>{amenity.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedRooms() {
  return (
    <section className="kings2-related-section">
      <div className="kings2-container">
        <SectionHeading
          eyebrow="Our Rooms"
          title="Elegant Comfort, Timeless Charm"
        />

        <div className="kings2-related-grid">
          {relatedRooms.map((room) => (
            <article
              className="kings2-related-card"
              key={room.title}
            >
              <a
                className="kings2-related-image"
                href={room.href}
                aria-label={room.title}
              >
                <img
                  src={room.image}
                  alt={room.alt}
                  loading="lazy"
                />

                <span className="kings2-related-arrow">
                  <FiArrowRight />
                </span>
              </a>

              <div className="kings2-related-content">
                <h3>
                  <a href={room.href}>{room.title}</a>
                </h3>

                <div
                  className="kings2-rating"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <FiStar key={index} />
                  ))}
                </div>

                <p className="kings2-room-price">{room.price}</p>

                <a
                  href="/contact-us"
                  className="kings2-book-link"
                >
                  Book Online <FiArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="kings2-faq-section">
      <div className="kings2-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="kings2-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div className="kings2-faq-item" key={faq.question}>
                <h3>
                  <button
                    type="button"
                    className={`kings2-faq-question ${
                      isOpen ? "is-open" : ""
                    }`}
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span>{faq.question}</span>

                    <span className="kings2-faq-toggle">
                      <FiChevronDown />
                    </span>
                  </button>
                </h3>

                {isOpen && (
                  <div className="kings2-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function KingsTwoBHK() {
  return (
    <div className="kings2-page">
      <section className="kings2-page-banner">
        <div className="kings2-container">
          <span className="kings2-banner-eyebrow">
            AAFIYA LAKEVIEW
          </span>

          <h1>2BHK Kings Studio Apartments in Coimbatore</h1>

          <nav className="kings2-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Room</span>
            <span>/</span>
            <span>Kings Studio Apartment- 2BHK</span>
          </nav>
        </div>
      </section>

      <BookingWidget />

      <RoomOverview />

      <RoomGallery />

      <ApartmentFacilities />

      <Amenities />

      <RelatedRooms />

      <FAQ />
    </div>
  );
}

export default KingsTwoBHK;
