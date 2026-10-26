
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiHome,
  FiMapPin,
} from "react-icons/fi";

import "../../styles/BlogDetails.css";

const BLOG_BASE_URL = "https://www.aafiyalakeview.com/";

const blogDetails = {
  title: "Explore the Lifestyle and Amenities at Aafiya Lakeview",
  image:
    "/assets/img/blog/aafiya-lakeview-lifestyle-amenities-coimbatore.png",
  alt: "Explore the Lifestyle and Amenities at Aafiya Lakeview",
  slug: "aafiya-lakeview-lifestyle-amenities-coimbatore",
  category: "Lifestyle & Amenities",
};

const relatedPosts = [
  {
    title:
      "A Guide to Finding Premium Apartments in Coimbatore Near Key City Areas",
    image: "/assets/img/blog/premium.png",
    slug: "premium-apartments-in-coimbatore",
  },
  {
    title: "The Growing Demand for 2BHK Service Apartments in Coimbatore",
    image:
      "/assets/img/blog/growing-demand-2bhk-service-apartments-coimbatore.jpeg",
    slug: "growing-demand-2bhk-service-apartments-coimbatore",
  },
  {
    title: "Top Benefits of Choosing a Service Apartment for Your Stay",
    image: "/assets/img/blog/benefits-of-service-apartments-for-your-stay.png",
    slug: "benefits-of-service-apartments-for-your-stay",
  },
];

function BlogSidebar() {
  return (
    <aside className="aafiya-blog-details-sidebar">
      <div className="aafiya-blog-sidebar-card">
        <div className="aafiya-blog-sidebar-heading">
          <FiBookOpen />
          <h3>Recent Articles</h3>
        </div>

        <div className="aafiya-blog-sidebar-posts">
          {relatedPosts.map((post) => (
            <Link
              className="aafiya-blog-sidebar-post"
              to={`/${post.slug}`}
              key={post.slug}
            >
              <img src={post.image} alt={post.title} loading="lazy" />

              <span>
                <strong>{post.title}</strong>

                <span className="aafiya-blog-sidebar-read">
                  Read Article <FiArrowRight />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="aafiya-blog-sidebar-card aafiya-blog-sidebar-cta">
        <span className="aafiya-blog-sidebar-cta-icon">
          <FiHome />
        </span>

        <h3>Looking for a Comfortable Stay?</h3>

        <p>
          Discover comfortable and convenient serviced apartment options at
          Aafiya Lakeview.
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

function BlogArticleContent() {
  return (
    <div className="aafiya-blog-article-content">
      <h2>Explore the Lifestyle and Amenities at Aafiya Lakeview</h2>

      <p>
        Aafiya Lakeview is a choice when it comes to a perfect balance between
        comfort, convenience and peaceful living in Coimbatore. This{" "}
        <a href="https://www.aafiyalakeview.com/">service apartment</a> will
        provide the perfect short and long stay space, as it is designed to
        provide a comfortable but contemporary living.
      </p>

      <h3>Comfortable Living Spaces</h3>

      <p>
        All apartments in Aafiya Lakeview are carefully planned to give maximum
        comfort. The interiors are well-equipped with big rooms, comfortable
        beds, and a comfortable living room whether you opt to have a 1BHK or
        2BHK. The apartments are also well-ventilated, which means that natural
        light can be used to create a bright and comfortable environment.
      </p>

      <h3>Modern Amenities for Everyday Convenience</h3>

      <p>
        The amenities available to residents are numerous and can enable the
        residents to live an easy and stress-free life. Each apartment is
        equipped with a well-equipped kitchen, high-speed Internet, and basic
        appliances. Housekeeping, laundry and 24/7 security are some of the
        services that guarantee a comfortable stay.
      </p>

      <p>
        Other amenities like power outage, parking and access to elevators also
        improve further the overall living experience and therefore can
        accommodate families, professionals and travelers.
      </p>

      <h3>Environment and Lifestyle</h3>

      <p>
        Aafiya Lakeview is one of the outstanding features characterized by
        calm and refreshing environment. The property has beautiful scenery due
        to its location which has a scenic lake and a serene environment, free
        of urban commotion. The community members have access to walking trails,
        bike paths, and recreational areas within their areas, which encourages
        a healthy and relaxed lifestyle.
      </p>

      <h3>Prime Location Advantage</h3>

      <p>
        Aafiya Lakeview is strategically situated on Trichy Road, which is
        easily connectable to important places in Coimbatore. It is near
        hospitals, shopping malls, restaurants and transport stations such as
        the railway station. This connectivity has made sure that inhabitants
        are able to control their daily lives without any hustle.
      </p>

      <h3>Ideal for Every Type of Stay</h3>

      <p>
        Whether it is a business visit, medical visit or a family stay, Aafiya
        Lakeview can satisfy any of your requirements. It has flexible rental
        services, including daily and monthly payments, which provides freedom
        and privacy unavailable in the traditional hotels.
      </p>

      <h3>Conclusion</h3>

      <p>
        Aafiya Lakeview is a blend of modernity, serene setting, and convenient
        access to provide a diverse living experience. It is a great option to
        all those seeking comfortable and flexible Apartment in Coimbatore and
        lifestyle and convenience meet in Unity.
      </p>
    </div>
  );
}

export default function AafiyaLakeviewLifestyle() {
  return (
    <div className="aafiya-blog-details-page">
      <section className="aafiya-blog-details-banner">
        <div className="aafiya-blog-details-container">
          <span className="aafiya-blog-details-eyebrow">
            AAFIYA LAKEVIEW BLOG
          </span>

          <h1>{blogDetails.title}</h1>

          <nav
            className="aafiya-blog-details-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              <FiHome />
              Home
            </Link>

            <FiChevronRight />

            <Link to="/service-apartment-blog">Blog</Link>

            <FiChevronRight />

            <span>{blogDetails.title}</span>
          </nav>
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
                    <FiBookOpen /> {blogDetails.category}
                  </span>

                  <span>
                    <FiClock /> Reading time: 5 min
                  </span>

                  <span>
                    <FiMapPin /> Coimbatore
                  </span>
                </div>

                <BlogArticleContent />

                <div className="aafiya-blog-details-back">
                  <Link to="/service-apartment-blog">
                    <FiArrowRight /> Back to All Articles
                  </Link>
                </div>
              </article>
            </main>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}
