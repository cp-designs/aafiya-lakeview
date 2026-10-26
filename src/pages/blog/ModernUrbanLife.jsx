
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiChevronRight,
  FiClock,
  FiHome,
  FiMapPin,
  FiSearch,
} from "react-icons/fi";

import "../../styles/BlogDetails.css";

const BLOG_BASE_URL = "https://www.aafiyalakeview.com/";

const blogDetails = {
  title: "Why Studio Apartments Are Perfect for Modern Urban Life",
  image: "/assets/img/blog/2.webp",
  alt: "2 BHK King Studio Apartments Comfort with Practical Style - Aafiya",
  slug: "modern-urban-life-studio-apartments",
  category: "Apartments",
};

const relatedPosts = [
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
  {
    title: "Why 2 BHK Studio Apartments Are Ideal for Urban Families",
    image: "/assets/img/blog/4.webp",
    slug: "2bhk-studio-homes-for-urban-families",
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
              <img src={post.image} alt={post.title} loading="lazy" />
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
        <h3>Looking for a Comfortable Stay?</h3>
        <p>
          Discover comfortable and convenient serviced apartment options at
          Aafiya Lakeview.
        </p>
        <a
          href="https://aafiyalakeview.bookingjini.in"
          target="_blank"
          rel="noreferrer"
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
      <h2>Why Studio Apartments Are Perfect for Modern Urban Life</h2>

      <p>
        Studio apartments have become very popular among urban dwellers. Cities
        are growing smaller, housing prices are rising, and the conditions of
        life are constantly changing; thus, small but trendy houses are what
        the world requires at the present moment. Studio apartments are a great
        fit with such requirements as they provide a combination of comfort,
        affordability, and contemporary design. Studio apartments offer you
        everything to live a good life in this city, regardless of whether you
        are a young professional, a student, or just a person who loves the
        minimalist lifestyle.
      </p>

      <h3>Efficient Use of Space</h3>

      <p>
        The main advantage of a studio apartment is its smart, space-saving
        design. Each square meter is planned with functionality in mind. Most
        units include:
      </p>

      <ul>
        <li>
          <strong>Living Area, Sofa, and Coffee Table</strong> - a comfortable
          place to hang out, entertain, or even a small home office.
        </li>
        <li>
          <strong>
            Compact Kitchen with Gas Induction Stove, Refrigerator, and Storage
            Cabinets
          </strong>{" "}
          – Perfect for preparing meals without clutter.
        </li>
        <li>
          <strong>Multifunctional Furniture</strong> - Foldable dining tables,
          sofa-beds, or wall-mounted shelves are the most useful.
        </li>
        <li>
          <strong>Wardrobes &amp; Hidden Storage</strong> – smartly designed to
          avoid the mess and maintain an organized look.
        </li>
      </ul>

      <p>
        With open floor layouts and versatile furniture, even a compact studio
        is practical, stylish, and nice to live in.
      </p>

      <h3>Affordable Urban Living</h3>

      <p>
        Since property prices continue to increase in urban areas, the ability
        is an important factor in leading people to studio apartments. They can
        easily fit within a smaller budget than bigger apartments, which makes
        them a viable option when a person prefers not to spend too much money,
        as long as they stay in Prime City Places. This affordability enables
        the family members to spend the money they earn on traveling,
        recreation, or any other aspect of life.
      </p>

      <h3>Low Maintenance, High Convenience</h3>

      <p>
        Modern life provides very little time for continuous cleaning and
        maintenance. Studio apartments overcome this issue by being simple to
        maintain. A small space requires less time for work, so that citizens
        can focus more on work, holidays, or social activities. This "is less
        high" approach appeals to professionals with particularly busy programs.
      </p>

      <h3>Encourages a Minimalist Lifestyle</h3>

      <p>
        Studio apartments naturally promote minimalism. Since the space is
        limited, residents just have to keep what they really need and
        appreciate. It not only helps in the decline but also creates a more
        desired and stress-free environment. In a world full of distractions
        and excess, the studio can live, wonderfully updated.
      </p>

      <h3>Perfect for Connectivity and Location</h3>

      <p>
        Urban life is in range. Studio apartments are usually in well-connected
        or central neighborhoods, close to workplaces, schools, shopping malls,
        and entertainment centres. This most important condition means less
        time and more time spent enjoying the city.
      </p>

      <h3>Stylish and Modern Living</h3>

      <p>
        Studio apartments no longer look traditional and dull but are made to
        look fancy with stylish designs. Open Plan design, natural lighting,
        and modern features make them attractive to those who appreciate modern
        aesthetics. With a little creativity, even compact rooms can feel good.
      </p>

      <h3>Conclusion</h3>

      <p>
        Studio apartments are the right reflection of modern city life - smart,
        practical, and stylish. They provide an affordable way to enjoy Prime
        City places, embracing a dislocated, minimal lifestyle. With low
        maintenance needs, skilled layouts, and modern designs, they are ideal
        for anyone who places significance on both convenience and comfort. In
        today's bustling cities, choosing a studio apartment is more than just
        a housing decision - it is a lifestyle upgrade.
      </p>
    </div>
  );
}

export default function ModernUrbanLife() {
  return (
    <div className="aafiya-blog-details-page">
      <section className="aafiya-blog-details-banner">
        <div className="aafiya-blog-details-container">
          <span className="aafiya-blog-details-eyebrow">
            AAFIYA LAKEVIEW BLOG
          </span>

          <h1 id="banner-color">{blogDetails.title}</h1>

          <nav className="aafiya-blog-details-breadcrumb" aria-label="Breadcrumb">
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
                    title="2 BHK King Studio Apartments Comfort with Practical Style - Aafiya"
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
