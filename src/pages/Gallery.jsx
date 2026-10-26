
import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import {
  FiX,
  FiZoomIn,
  FiGrid,
  FiImage,
  FiCoffee,
  FiMoon,
  FiHome,
  FiDroplet,
  FiArrowUpRight,
} from "react-icons/fi";

const galleryCategories = [
  { label: "All Photos", value: "all", icon: FiGrid },
  { label: "Reception / Parking", value: "reception", icon: FiHome },
  { label: "Living Room", value: "living", icon: FiImage },
  { label: "Bedroom", value: "bedroom", icon: FiMoon },
  { label: "Toilet & Kitchen", value: "toilet", icon: FiDroplet },
  { label: "Cafe / Lakeview", value: "cafe", icon: FiCoffee },
  { label: "Gym", value: "gym", icon: FiArrowUpRight },
];

const galleryImages = [
  { src: "/assets/img/3c/2.webp", category: "bedroom", alt: "Aafiya Lakeview apartment bedroom" },
  { src: "/assets/img/3c/3.webp", category: "bedroom", alt: "Comfortable apartment bedroom" },
  { src: "/assets/img/3c/4.webp", category: "bedroom", alt: "Elegant serviced apartment bedroom" },
  { src: "/assets/img/3c/5.webp", category: "living", alt: "Aafiya Lakeview living room" },
  { src: "/assets/img/3c/6.webp", category: "living", alt: "Apartment living room interior" },
  { src: "/assets/img/3c/7.webp", category: "living", alt: "Spacious apartment living area" },
  { src: "/assets/img/3c/8.webp", category: "living", alt: "Modern living room interior" },
  { src: "/assets/img/3c/9.webp", category: "toilet", alt: "Apartment bathroom interior" },
  { src: "/assets/img/3c/10.webp", category: "living", alt: "Aafiya serviced apartment interior" },
  { src: "/assets/img/1b/1.webp", category: "living", alt: "One bedroom apartment living area" },
  { src: "/assets/img/1b/2.webp", category: "living", alt: "One bedroom serviced apartment" },
  { src: "/assets/img/1b/3.webp", category: "living", alt: "Apartment interior at Aafiya Lakeview" },
  { src: "/assets/img/1b/4.webp", category: "living", alt: "Comfortable apartment interior" },
  { src: "/assets/img/1b/5.webp", category: "living", alt: "Serviced apartment living space" },
  { src: "/assets/img/1b/6.webp", category: "living", alt: "Modern apartment living space" },
  { src: "/assets/img/2b/2.webp", category: "toilet", alt: "Apartment kitchen and bathroom area" },
  { src: "/assets/img/2b/3.webp", category: "living", alt: "Two bedroom apartment living room" },
  { src: "/assets/img/2b/4.webp", category: "living", alt: "Two bedroom serviced apartment interior" },
  { src: "/assets/img/2b/5.webp", category: "living", alt: "Spacious two bedroom apartment" },
  { src: "/assets/img/2b/6.webp", category: "living", alt: "Aafiya Lakeview apartment interior" },
  { src: "/assets/img/2b/7.webp", category: "bedroom", alt: "Two bedroom apartment bedroom" },
  { src: "/assets/img/2b/8.webp", category: "bedroom", alt: "Premium apartment bedroom" },
  { src: "/assets/img/2b/9.webp", category: "bedroom", alt: "Serviced apartment bedroom interior" },
  { src: "/assets/img/2b/10.webp", category: "bedroom", alt: "Comfortable apartment bedroom" },
  { src: "/assets/img/2b/11.webp", category: "bedroom", alt: "Elegant bedroom interior" },
  { src: "/assets/img/2b/12.webp", category: "bedroom", alt: "Aafiya Lakeview bedroom" },
  { src: "/assets/img/3b/1.webp", category: "living", alt: "Three bedroom apartment living room" },
  { src: "/assets/img/3b/2.webp", category: "living", alt: "Three bedroom apartment interior" },
  { src: "/assets/img/3b/3.webp", category: "living", alt: "Spacious serviced apartment" },
  { src: "/assets/img/gallery/image 7.webp", category: "reception", alt: "Aafiya Lakeview reception and parking" },
  { src: "/assets/img/gallery/image 8.webp", category: "reception", alt: "Aafiya Lakeview apartment exterior" },
  { src: "/assets/img/gallery/image 6.webp", category: "cafe", alt: "Cafe and Lakeview surroundings" },
  { src: "/assets/img/gallery/image 9.webp", category: "reception", alt: "Aafiya Lakeview property exterior" },
  { src: "/assets/img/gallery/image 13.webp", category: "living", alt: "Apartment living space" },
  { src: "/assets/img/gallery/image 10.webp", category: "reception", alt: "Aafiya Lakeview property" },
  { src: "/assets/img/gallery/image 11.webp", category: "reception", alt: "Serviced apartment exterior" },
  { src: "/assets/img/gallery/66.webp", category: "cafe", alt: "Cafe and Lakeview view" },
  { src: "/assets/img/2b/1.jpeg", category: "toilet", alt: "Apartment kitchen area" },
  { src: "/assets/img/3a/16.webp", category: "toilet", alt: "Apartment bathroom interior" },
];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeFilter);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="aafiya-gallery-page">
      <section className="aafiya-gallery-banner">
        <div className="aafiya-gallery-banner-overlay" />
        <div className="container aafiya-gallery-banner-content">
          <span className="aafiya-gallery-eyebrow">
            WELCOME TO AAFIYA LAKEVIEW
          </span>
          <h1>Aafiya Lakeview Service Apartments | Gallery</h1>
          <div className="aafiya-gallery-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      <section className="aafiya-gallery-section">
        <div className="container">
          <div className="aafiya-gallery-heading">
            <span className="aafiya-gallery-kicker">OUR GALLERY</span>
            <h2>Lakeview Elegance, Serene Retreat</h2>
            <img
              src="/assets/img/underline.png"
              alt=""
              className="aafiya-gallery-underline"
            />
            <p>
              Explore our thoughtfully designed spaces, relaxing interiors
              and the comfort of staying at Aafiya Lakeview.
            </p>
          </div>

          <div className="aafiya-gallery-filters" aria-label="Filter gallery images">
            {galleryCategories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  key={category.value}
                  type="button"
                  className={
                    activeFilter === category.value ? "active" : ""
                  }
                  onClick={() => setActiveFilter(category.value)}
                  aria-pressed={activeFilter === category.value}
                >
                  <Icon aria-hidden="true" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          <div className="aafiya-gallery-grid">
            {filteredImages.map((image) => (
              <button
                className="aafiya-gallery-card"
                type="button"
                key={image.src}
                onClick={() => setSelectedImage(image)}
                aria-label={`View ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
                <span className="aafiya-gallery-card-overlay">
                  <span className="aafiya-gallery-zoom">
                    <FiZoomIn />
                  </span>
                  <span className="aafiya-gallery-card-caption">
                    {galleryCategories.find(
                      (category) => category.value === image.category
                    )?.label}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="aafiya-gallery-empty">
              No images are available in this category yet.
            </div>
          )}

          <div className="aafiya-gallery-count">
            Showing <strong>{filteredImages.length}</strong> photos
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="aafiya-gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="aafiya-gallery-lightbox-close"
            aria-label="Close image preview"
            onClick={() => setSelectedImage(null)}
          >
            <FiX />
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />

          <p>{selectedImage.alt}</p>
        </div>
      )}
    </main>
  );
}

export default Gallery;
