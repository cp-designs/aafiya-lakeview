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
  title:
    "A Guide to Finding Premium Apartments in Coimbatore Near Key City Areas",
  image: "/assets/img/blog/premium.png",
  alt: "Premium Apartments in Coimbatore Near Key City Areas",
  slug: "premium-apartments-in-coimbatore",
  category: "Apartments",
};

const relatedPosts = [
  {
    title: "Why Studio Apartments Are Perfect for Modern Urban Life",
    image: "/assets/img/blog/2.webp",
    slug: "modern-urban-life-studio-apartments",
  },
  {
    title: "1 BHK Apartments Explained: From Features to Advantages",
    image: "/assets/img/blog/6.webp",
    slug: "1-bhk-apartments-features-and-advantages",
  },
  {
    title: "2 BHK King Studio Apartments: Blending Style with Practicality",
    image: "/assets/img/blog/5.webp",
    slug: "2-bhk-king-studio-apartments-smart-comfort-style",
  },
];

function PremiumApartmentsContent() {
  return (
    <div className="aafiya-blog-article-content">
      <h2>
        A Guide to Finding Premium Apartments in Coimbatore Near Key City Areas
      </h2>

      <p>
        It is easier to find the right accommodation in Coimbatore when you
        consider comfort, convenience, and easy access to key parts of the city.
        You can stay in the{" "}
        <a
          href="https://www.aafiyalakeview.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          best apartments in Coimbatore
        </a>{" "}
        while travelling for work, medical visits, family visits, or an extended
        stay, which can be more comfortable than a hotel room.
      </p>

      <h3>Choose a Convenient Location</h3>

      <p>
        One of the most crucial criteria to consider when choosing an apartment
        is location. Living close to highways, hospitals, train stations,
        shopping centres, and commercial centres can greatly simplify your daily
        commute. Aafiya Lakeview is well connected to different important parts
        of the city via Trichy Road, as it is near Government Hospital Road. It
        is about 50 metres away from Race Course and near Coimbatore Railway
        Station and Government Hospital.
      </p>

      <h3>Look for Fully Furnished Apartments</h3>

      <p>
        When you are looking for a comfortable stay, it should not only give you
        a bed and bathroom. Fully equipped apartments with a living room,
        private kitchen, dining area, Wi-Fi, air conditioning, refrigerator,
        microwave and washing machine will make your stay more convenient, both
        for short and long periods of time.
      </p>

      <p>
        Aafiya Lakeview is offering 2BHK and 1BHK studio apartments, including a
        King 2BHK flat that can accommodate families, business travellers,
        medical visitors, and visitors who are staying for longer periods.
      </p>

      <h3>Consider Your Stay Duration</h3>

      <p>
        An apartment offers more flexibility than a typical hotel room,
        especially for those staying for several days or weeks. Guests can cook
        in their own kitchen, and housekeeping services and other facilities
        also enhance the convenience.
      </p>

      <p>
        Aafiya Lakeview offers guests accommodation for both short and longer
        stays, and offers room rentals both daily and monthly.
      </p>

      <h3>Choose Comfort Along With Accessibility</h3>

      <p>
        For travellers searching for{" "}
        <a
          href="https://www.aafiyalakeview.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>premium apartments in Coimbatore</strong>
        </a>
        , Aafiya Lakeview combines furnished accommodation with a peaceful
        lakeview setting, walking and cycling paths, convenient nearby
        facilities, and easy connectivity to key city locations.
      </p>

      <p>
        When choosing your next stay in Coimbatore, consider location, apartment
        size, facilities, privacy, and flexibility. These factors can help you
        find accommodation that feels comfortable and convenient throughout your
        visit.
      </p>
    </div>
  );
}

function PremiumApartmentsSidebar() {
  return (
    <aside className="aafiya-blog-details-sidebar">
      <div className="aafiya-blog-sidebar-card">
        <h3 className="aafiya-blog-sidebar-heading">
          <FiBookOpen />
          Related Articles
        </h3>

        <div className="aafiya-blog-sidebar-posts">
          {relatedPosts.map((post) => (
            <article
              className="aafiya-blog-sidebar-post"
              key={post.slug}
            >
              <Link
                to={`/${post.slug}`}
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
                    to={`/${post.slug}`}
                    className="aafiya-blog-sidebar-read"
                  >
                    {post.title}
                  </Link>
                </h4>

                <Link
                  to={`/${post.slug}`}
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

        <h3>Find Your Comfortable Stay</h3>

        <p>
          Explore furnished studio apartments and comfortable accommodation
          options at Aafiya Lakeview.
        </p>

        <a
          href="https://aafiyalakeview.bookingjini.in"
          target="_blank"
          rel="noopener noreferrer"
          className="aafiya-blog-sidebar-button"
        >
          Check Availability <FiArrowRight />
        </a>
      </div>
    </aside>
  );
}

export default function PremiumApartments() {
  const title = blogDetails.title;

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
            <main className="aafiya-blog-details-primary">
              <article className="aafiya-blog-details-article">
                <div className="aafiya-blog-details-image">
                  <img
                    src={blogDetails.image}
                    alt={blogDetails.alt}
                    title={blogDetails.title}
                  />
                </div>

                <div className="aafiya-blog-details-meta">
                  <span>
                    <FiBookOpen />
                    {blogDetails.category}
                  </span>

                  <span>
                    <FiClock />
                    Reading time: 4 min
                  </span>

                  <span>
                    <FiMapPin />
                    Coimbatore
                  </span>
                </div>

                <PremiumApartmentsContent />

                <Link
                  to="/service-apartment-blog"
                  className="aafiya-blog-details-back"
                >
                  <FiArrowRight />
                  Back to All Articles
                </Link>
              </article>
            </main>

            <PremiumApartmentsSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}