
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

const BLOG_BASE_URL = "https://www.aafiyalakeview.com/";

const blogDetails = {
  title: "Why 2 BHK Studio Apartments Are Ideal for Urban Families",
  image: "/assets/img/blog/4.webp",
  alt: "2 BHK King Studio Apartments Comfort with Practical Style - Aafiya",
  slug: "2bhk-studio-homes-for-urban-families",
  category: "Apartment Guide",
};

const relatedPosts = [
  {
    title: "2 BHK King Studio Apartments: Blending Style with Practicality",
    image: "/assets/img/blog/5.webp",
    slug: "2-bhk-king-studio-apartments-smart-comfort-style",
  },
  {
    title: "1 BHK Apartments Explained: From Features to Advantages",
    image: "/assets/img/blog/6.webp",
    slug: "1-bhk-apartments-features-and-advantages",
  },
  {
    title: "The Benefits of Living in a Fully Furnished Service Apartment",
    image: "/assets/img/blog/8.webp",
    slug: "benefits-of-fully-furnished-service-apartment",
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
            <a
              className="aafiya-blog-sidebar-post"
              href={`${BLOG_BASE_URL}${post.slug}`}
              key={post.slug}
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
              />

              <span>
                <strong>{post.title}</strong>
                <span className="aafiya-blog-sidebar-read">
                  Read Article <FiArrowRight />
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="aafiya-blog-sidebar-card aafiya-blog-sidebar-cta">
        <span className="aafiya-blog-sidebar-cta-icon">
          <FiHome />
        </span>

        <h3>Find Your Ideal Apartment</h3>

        <p>
          Discover convenient and comfortable apartment living at Aafiya
          Lakeview, Coimbatore.
        </p>

        <a
          href="https://www.aafiyalakeview.com/"
          target="_blank"
          rel="noreferrer"
          className="aafiya-blog-sidebar-button"
        >
          Explore Aafiya Lakeview <FiArrowRight />
        </a>
      </div>
    </aside>
  );
}

function BlogArticleContent() {
  return (
    <div className="aafiya-blog-article-content">
      <h2>Why 2 BHK Studio Apartments Are Ideal for Urban Families</h2>

      <p>
        In today's fast-moving cities, finding the right house is more than
        securing just four walls – it's about creating a balance between
        space, comfort, and strength. Among many available housing options,
        2 BHK Studio Apartments have emerged as one of the most practical
        options for urban families. These apartments are designed to meet
        the developed lifestyle of the inhabitants of the city, offering a
        mix of style, functionality, and modern features.
      </p>

      <h3>Perfect Balance of Space and Comfort</h3>

      <p>
        A 2 BHK studio apartment gives the family the space it can live in
        without being congested or excessively spacious. Two bedrooms, a
        living area, a kitchen, and bathrooms allow parents to have privacy
        and at the same time, give the children their own space. These
        apartments will have an easy size compared to the smaller ones;
        unlike the smaller units, they can serve growing needs.
      </p>

      <h3>Affordable Yet Stylish</h3>

      <p>
        There is a high cost attached to city living, and 2 BHK studio
        apartments are relatively affordable and, at the same time, modern.
        Families are free to spend their time in a well-designed house that
        does not sacrifice style. These apartments have a chic and
        contemporary feel due to open layout, sleek interior, and efficient
        use of space without being expensive.
      </p>

      <h3>Easy Maintenance</h3>

      <p>
        In cities, families like theirs tend to work, go to schools and
        colleges, and there is not much time to have intensive maintenance.
        A 2 BHK studio flat poses less maintenance costs than the bigger
        independent houses. The small but useful designs allow people to
        spend less time cleaning and organizing things in the house and more
        time together as a family.
      </p>

      <h3>Convenient Amenities</h3>

      <p>
        The majority of the 2 BHK studio apartments in the modern era are
        located within gated communities or residential complexes that are
        fitted with basic facilities such as parking, security, power
        back-up, and recreation areas. This allows families to have added
        convenience, child safety, and the ability to access leisure
        activities – all within walking distance.
      </p>

      <p>
        Most of these apartments are also strategically located near
        hospitals, railway stations, race course areas, theatres, shopping
        malls, and popular tourist spots like boat houses and parks, making
        life more accessible and enjoyable for the whole family.
      </p>

      <h3>Sustainable Living</h3>

      <p>
        As cities become more crowded, permanent housing solutions are
        important. 2 BHK Studio Apartments encourage the efficient use of
        space, energy, and resources. Many developments also integrate
        environmentally friendly practices such as harvesting of rainwater,
        solar energy, and green landscape – promoting a healthy lifestyle
        for the family.
      </p>

      <h3>Conclusion</h3>

      <p>
        The ideal option available to urban families who want comfort at a
        reasonable price and convenience is 2 BHK studio apartments. They
        not only offer the appropriate space ratio but also match the
        contemporary city lifestyle. These homes combine style with
        functionality to provide a supportive home that allows families to
        grow, interact, and live in the city center.
      </p>
    </div>
  );
}

export default function TwoBHKStudioUrbanFamilies() {
  return (
    <div className="aafiya-blog-details-page">
      <section className="aafiya-blog-details-banner">
        <div className="aafiya-blog-details-container">
          <span className="aafiya-blog-details-eyebrow">
            AAFIYA LAKEVIEW BLOG
          </span>

          <h1 id="banner-color">{blogDetails.title}</h1>

          <nav
            className="aafiya-blog-details-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              <FiHome /> Home
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
                    title={blogDetails.alt}
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
