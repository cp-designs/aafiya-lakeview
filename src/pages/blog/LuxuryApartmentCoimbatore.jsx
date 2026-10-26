
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiChevronRight,
  FiClock,
  FiHome,
  FiMapPin,
} from "react-icons/fi";

import "../../styles/BlogDetails.css";

const blogDetails = {
  title: "Luxury Apartment for Modern and Comfortable Living",
  image: "/assets/img/blog/luxury-apartment-in-coimbatore.png",
  alt: "Luxury Apartment for Modern and Comfortable Living",
  category: "Apartment Living",
  readingTime: "Lifestyle Guide",
};

const relatedPosts = [
  {
    title: "1 BHK Apartments: Smart Choice for Comfortable Urban Living",
    image: "/assets/img/blog/1bhk-apartment-comfortable-urban-living.png",
    slug: "1-bhk-apartments-smart-urban-living-choice",
  },
  {
    title: "Explore the Lifestyle and Amenities at Aafiya Lakeview",
    image:
      "/assets/img/blog/aafiya-lakeview-lifestyle-amenities-coimbatore.png",
    slug: "aafiya-lakeview-lifestyle-amenities-coimbatore",
  },
  {
    title: "Why Service Apartments Are Better Than Hotels for Long Stays",
    image:
      "/assets/img/blog/service-apartments-vs-hotels-long-stays-coimbatore.png",
    slug: "service-apartments-vs-hotels-long-stays-coimbatore",
  },
];

const amenities = [
  {
    image: "/assets/img/blog/aafiya-lake-view-1.png",
    alt: "aafiya-lake-view-1",
    text: "Fully furnished living spaces",
  },
  {
    image: "/assets/img/blog/free-wifi-connection.png",
    alt: "free-wifi-connection",
    text: "High-speed internet connectivity",
  },
  {
    image: "/assets/img/blog/parking.png",
    alt: "parking",
    text: "Secure parking areas",
  },
  {
    image: "/assets/img/blog/aafiya-lake-view-2.png",
    alt: "aafiya-lake-view",
    text: "Housekeeping and maintenance services",
  },
  {
    image: "/assets/img/blog/fully-furnished-apartment.png",
    alt: "fully-furnished-apartment",
    text: "Power backup and security systems",
  },
];

function LuxuryApartmentSidebar() {
  return (
    <aside className="aafiya-blog-details-sidebar">
      <div className="aafiya-blog-sidebar-card">
        <h3 className="aafiya-blog-sidebar-heading">
          <FiBookOpen aria-hidden="true" />
          Related Articles
        </h3>

        <div className="aafiya-blog-sidebar-posts">
          {relatedPosts.map((post) => (
            <article className="aafiya-blog-sidebar-post" key={post.slug}>
              <Link
                to={`/${post.slug}`}
                className="aafiya-blog-sidebar-post-image"
                aria-label={post.title}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
              </Link>

              <div className="aafiya-blog-sidebar-post-content">
                <Link
                  to={`/${post.slug}`}
                  className="aafiya-blog-sidebar-read"
                >
                  {post.title}
                </Link>

                <Link
                  to={`/${post.slug}`}
                  className="aafiya-blog-sidebar-read-more"
                >
                  Read Article <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="aafiya-blog-sidebar-card aafiya-blog-sidebar-cta">
        <span className="aafiya-blog-sidebar-cta-icon">
          <FiHome aria-hidden="true" />
        </span>

        <h3>Experience Comfortable Living</h3>

        <p>
          Discover modern apartment living with comfort and convenience at
          Aafiya Lakeview.
        </p>

        <a
          href="https://www.aafiyalakeview.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="aafiya-blog-sidebar-button"
        >
          Explore Aafiya Lakeview <FiArrowRight aria-hidden="true" />
        </a>
      </div>
    </aside>
  );
}

function LuxuryApartmentArticleContent() {
  return (
    <div className="aafiya-blog-article-content">
      <h2>Luxury Apartment for Modern and Comfortable Living</h2>

      <p>
        The way of life in the modern world has changed. The modern individuals
        seek houses which are comfortable, convenient and a quiet environment.
        Staying in a well-designed apartment does not just provide a place to
        stay, but also a lifestyle that helps in meeting daily requirements.
        This is a primary cause of why a great number of individuals are
        searching for luxury apartments in Coimbatore, where the modern design
        and convenient life intersect.
      </p>

      <h3>Changing Lifestyle and Housing Needs</h3>

      <p>
        The city has brought about new housing demands. Professional workers,
        families and students tend to have homes in areas where the essential
        facilities, including workplaces, hospitals, shopping centers, and
        transport, are within a short walk. These needs are addressed in the
        modern apartments with the functional layouts, neat spaces and other
        necessary amenities that simplify and streamline daily life.
      </p>

      <h3>Spacious Living with Smart Design</h3>

      <p>
        One of the notable features of the luxury apartments is the spaciousness
        of the planning of the apartments. The rooms are large, the bedrooms
        are comfortable, there are well-equipped kitchens, and personal
        balconies, which would make the environment of the rooms pleasant and
        relaxing.
      </p>

      <h3>Convenience Lifestyle Amenities</h3>

      <p>
        Most of the modern apartments have a variety of facilities that
        facilitate a comfortable life. These facilities assist the residents
        in coping with their daily lives as well as provide relaxation and a
        convenient space.
      </p>

      <p>Some common features include:</p>

      <div className="amenities-service-apartment-gallery text-center mt-4">
        <div className="row">
          {amenities.map((amenity) => (
            <div
              className="col-md-6 col-lg-4 mb-4"
              key={amenity.alt}
            >
              <img
                src={amenity.image}
                alt={amenity.alt}
                className="img-fluid rounded shadow"
                loading="lazy"
              />

              <p className="mt-2">{amenity.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="amenity-highlight mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <img
              src="/assets/img/blog/service-apartment-in-coimbatore.png"
              alt="service-apartment-in-coimbatore"
              className="img-fluid rounded"
              loading="lazy"
            />
          </div>

          <div className="col-md-6">
            <h3>Peaceful Living Within the City</h3>

            <p>
              The second benefit of the luxury apartments in Coimbatore is the
              proximity to both the city and a calm place. The apartments in
              the proximity of large landmarks like hospitals, railway
              stations and business areas can enable the residents to travel
              without the need to go far, and enjoy a relaxing residential
              setting.
            </p>
          </div>
        </div>
      </div>

      <h3>Conclusion</h3>

      <p>
        A home with a comfortable facility is significant in having a balanced
        lifestyle. The apartments of the modern world are constructed in a way
        that ensures the desired balance between the space, comfort and the
        necessary facilities. This is the reason why lots of people are
        electing to construct{" "}
        <a
          href="https://www.aafiyalakeview.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          luxury apartments in Coimbatore
        </a>{" "}
        in order to experience a better and more practical living in the
        apartments.
      </p>
    </div>
  );
}

export default function LuxuryApartmentCoimbatore() {
  return (
    <main className="aafiya-blog-details-page">
      <section className="aafiya-blog-details-banner">
        <div className="aafiya-blog-details-container">
          <div className="aafiya-blog-details-banner-content">
            <span className="aafiya-blog-details-eyebrow">
              AAFIYA LAKEVIEW BLOG
            </span>

            <h1>{blogDetails.title}</h1>

            <nav
              className="aafiya-blog-details-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link to="/">Home</Link>

              <FiChevronRight aria-hidden="true" />

              <Link to="/service-apartment-blog">Blog</Link>

              <FiChevronRight aria-hidden="true" />

              <span>{blogDetails.title}</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="aafiya-blog-details-main">
        <div className="aafiya-blog-details-container">
          <div className="aafiya-blog-details-layout">
            <article className="aafiya-blog-details-primary">
              <div className="aafiya-blog-details-article">
                <div className="aafiya-blog-details-image">
                  <img
                    src={blogDetails.image}
                    alt={blogDetails.alt}
                    title={blogDetails.title}
                  />
                </div>

                <div className="aafiya-blog-details-meta">
                  <span>
                    <FiBookOpen aria-hidden="true" />
                    {blogDetails.category}
                  </span>

                  <span>
                    <FiClock aria-hidden="true" />
                    {blogDetails.readingTime}
                  </span>

                  <span>
                    <FiMapPin aria-hidden="true" />
                    Coimbatore
                  </span>
                </div>

                <LuxuryApartmentArticleContent />

                <div className="aafiya-blog-details-back">
                  <Link to="/service-apartment-blog">
                    <FiArrowRight aria-hidden="true" />
                    Back to All Blogs
                  </Link>
                </div>
              </div>
            </article>

            <LuxuryApartmentSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
