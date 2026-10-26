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

const relatedPosts = [
  {
    title:
      "A Guide to Finding Premium Apartments in Coimbatore Near Key City Areas",
    image: "/assets/img/blog/premium.png",
    link: "/premium-apartments-in-coimbatore",
  },
  {
    title: "The Growing Demand for 2BHK Service Apartments in Coimbatore",
    image:
      "/assets/img/blog/growing-demand-2bhk-service-apartments-coimbatore.jpeg",
    link: "/growing-demand-2bhk-service-apartments-coimbatore",
  },
  {
    title: "Affordable 1BHK Studio Apartment for Rent in Coimbatore",
    image:
      "/assets/img/blog/affordable-1bhk-studio-apartment-for-rent-in-coimbatore3.jpeg",
    link: "/affordable-1bhk-studio-apartment-for-rent-in-coimbatore",
  },
];

function PerfectServiceApartmentSidebar() {
  return (
    <aside className="aafiya-blog-details-sidebar">
      <div className="aafiya-blog-sidebar-card">
        <h3 className="aafiya-blog-sidebar-heading">
          <FiBookOpen />
          Recent Articles
        </h3>

        <div className="aafiya-blog-sidebar-posts">
          {relatedPosts.map((post) => (
            <article
              className="aafiya-blog-sidebar-post"
              key={post.link}
            >
              <Link
                to={post.link}
                className="aafiya-blog-sidebar-post-image"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                />
              </Link>

              <div className="aafiya-blog-sidebar-post-content">
                <h4>
                  <Link
                    to={post.link}
                    className="aafiya-blog-sidebar-read"
                  >
                    {post.title}
                  </Link>
                </h4>

                <Link
                  to={post.link}
                  className="aafiya-blog-sidebar-read-more"
                >
                  Read Article <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="aafiya-blog-sidebar-card aafiya-blog-sidebar-cta">
        <span className="aafiya-blog-sidebar-cta-icon">
          <FiHome />
        </span>

        <h3>Experience Comfortable Living</h3>

        <p>
          Explore furnished service apartments in Coimbatore for a comfortable
          and convenient stay.
        </p>

        <a
          href="https://aafiyalakeview.bookingjini.in"
          target="_blank"
          rel="noopener noreferrer"
          className="aafiya-blog-sidebar-button"
        >
          Book Your Stay <FiArrowRight />
        </a>
      </div>
    </aside>
  );
}

export default function PerfectServiceApartmentChoice() {
  const title =
    "What Makes a Service Apartment in Coimbatore the Perfect Accommodation Choice?";

  return (
    <main className="aafiya-blog-details-page">
      <section className="aafiya-blog-details-banner">
        <div className="aafiya-blog-details-container">
          <div className="aafiya-blog-details-banner-content">
            <span className="aafiya-blog-details-eyebrow">
              AAFIYA LAKEVIEW BLOG
            </span>

            <h1>{title}</h1>

            <nav
              className="aafiya-blog-details-breadcrumb"
              aria-label="Breadcrumb"
            >
              <Link to="/">Home</Link>
              <FiChevronRight />
              <Link to="/service-apartment-blog">Blog</Link>
              <FiChevronRight />
              <span>{title}</span>
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
                    src="/assets/img/blog/comfortable-service-apartment-coimbatore.jpeg"
                    alt="Explore the Lifestyle and Amenities at Aafiya Lakeview"
                    title="Explore the Lifestyle and Amenities at Aafiya Lakeview"
                  />
                </div>

                <div className="aafiya-blog-details-meta">
                  <span>
                    <FiBookOpen />
                    Accommodation Guide
                  </span>

                  <span>
                    <FiClock />
                    5 min read
                  </span>

                  <span>
                    <FiMapPin />
                    Coimbatore
                  </span>
                </div>

                <div className="aafiya-blog-article-content">
                  <h2>{title}</h2>

                  <p>
                    The way people travel and stay has evolved dramatically in
                    recent years. Whether you're on a business trip, relocating
                    to a new city, or planning an extended vacation, the type of
                    accommodation you choose can make or break your experience.
                    Service apartments in Coimbatore have emerged as the
                    preferred choice for modern travellers — offering the
                    perfect blend of comfort, convenience, and flexibility that
                    traditional hotels simply cannot match.
                  </p>

                  <h3>Home Away From Home</h3>

                  <div className="aafiya-blog-details-image aafiya-blog-inline-image">
                    <img
                      src="/assets/img/blog/aafiya-blog-2.jpeg"
                      alt="Home Away From Home - Service Apartment in Coimbatore"
                      title="Home Away From Home - Service Apartment in Coimbatore"
                      loading="lazy"
                    />
                  </div>

                  <p>
                    One of the most compelling reasons travellers choose service
                    apartments in Coimbatore is the unmatched sense of home they
                    provide. Unlike a hotel room, a service apartment comes fully
                    furnished with a spacious living area, a well-equipped
                    kitchen, a comfortable bedroom, and often even a washer and
                    dryer. You can cook your own meals, relax on your own sofa,
                    and truly settle in no matter how long your stay. This
                    home-like environment reduces travel fatigue and allows
                    guests to maintain their daily routines with ease.
                  </p>

                  <h3>Privacy &amp; Independence</h3>

                  <p>
                    Privacy is a luxury that{" "}
                    <a href="https://www.aafiyalakeview.com/">
                      service apartments in Coimbatore
                    </a>{" "}
                    offer by default. There are no unexpected housekeeping
                    interruptions, no crowded hotel lobbies, and no fixed meal
                    times to work around. You are completely in control of your
                    schedule and your space. Whether you prefer a quiet evening
                    in or an early start without disturbance, a serviced
                    apartment gives you the freedom to live on your own terms.
                    This level of independence is especially valued by long-stay
                    guests who want a peaceful, personal environment.
                  </p>

                  <h3>Experience Living Redefined</h3>

                  <div className="aafiya-blog-details-image aafiya-blog-inline-image">
                    <img
                      src="/assets/img/blog/aafiya-blog-1.jpeg"
                      alt="Experience Living Redefined - Luxury Service Apartment"
                      title="Experience Living Redefined - Luxury Service Apartment"
                      loading="lazy"
                    />
                  </div>

                  <p>
                    Step into a space where every detail is designed for your
                    comfort — from elegantly furnished rooms to fully equipped
                    kitchens, our serviced apartments bring the warmth of home
                    with the luxury of a hotel.
                  </p>

                  <h3>Conclusion</h3>

                  <p>
                    Service apartments have redefined what it means to stay
                    away from home. They offer a rare combination of space,
                    comfort, privacy, and flexibility that suits every type of
                    traveller from the solo business professional to the entire
                    relocating family. As more people seek meaningful,
                    stress-free experiences during their stays, it's no
                    surprise that service apartments continue to rise in
                    popularity. If you haven't yet experienced the difference,
                    it's time to make the switch because once you do, you'll
                    never look at accommodation the same way again.
                  </p>
                </div>

                <Link
                  to="/service-apartment-blog"
                  className="aafiya-blog-details-back"
                >
                  <FiArrowRight />
                  Back to All Blogs
                </Link>
              </div>
            </article>

            <PerfectServiceApartmentSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}