
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
  title: "Diwali Decoration Ideas for Apartments",
  image: "/assets/img/blog/7.webp",
  alt: "Diwali Decoration Ideas for Apartments",
  category: "Festival Guide",
  readingTime: "Decoration Ideas",
};

const relatedPosts = [
  {
    title: "The Benefits of Living in a Fully Furnished Service Apartment",
    image: "/assets/img/blog/8.webp",
    slug: "benefits-of-fully-furnished-service-apartment",
  },
  {
    title: "1 BHK Apartments: Smart Choice for Comfortable Urban Living",
    image: "/assets/img/blog/1bhk-apartment-comfortable-urban-living.png",
    slug: "1-bhk-apartments-smart-urban-living-choice",
  },
  {
    title: "Luxury Apartment for Modern and Comfortable Living",
    image: "/assets/img/blog/luxury-apartment-in-coimbatore.png",
    slug: "living-luxury-apartments-coimbatore",
  },
];

function DiwaliDecorationSidebar() {
  return (
    <aside className="aafiya-blog-details-sidebar">
      <div className="aafiya-blog-sidebar-card">
        <h3 className="aafiya-blog-sidebar-heading">
          <FiBookOpen aria-hidden="true" />
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

        <h3>Enjoy Comfortable Apartment Living</h3>

        <p>
          Discover a comfortable stay and convenient apartment living at
          Aafiya Lakeview, Coimbatore.
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

function DiwaliArticleContent() {
  return (
    <div className="aafiya-blog-article-content">
      <h2>Diwali Decoration Ideas for Apartments</h2>

      <p>
        Diwali is a festival of lights and is a time of celebration of joy,
        togetherness and positivity. You can always make it festive and lively,
        even an apartment, using your innovative ideas of decoration. An
        apartment can also shine during Diwali with a blend of traditional and
        modern styles.
      </p>

      <h3>Brighten Up with Diyas and Candles</h3>

      <p>
        The gentle light of diyas is the best thing that captures the spirit of
        Diwali. Put them in your front door, balconies and windowsills to emit
        warmth and emotions. To create a contemporary effect, use diyas with
        fragrant candles or tea lights on decorative stands to add a festive
        atmosphere to the interior.
      </p>

      <h3>Rangoli at the Entrance</h3>

      <p>
        At the entrance, greet your guests by putting a Rangoli in a colourful
        pattern. You may apply conventional powders, flower petals or even
        eco-friendly stencils to apply patterns in a quick and beautiful way.
        It will also be interesting to add diyas to the rangoli.
      </p>

      <h3>Fairy Lights and Lanterns</h3>

      <p>
        The simplest method of turning your apartment into a shining paradise
        is with fairy lights. Cover them with railings, with curtains, or with
        the balcony. To have a different appearance, paper lanterns or hanging
        kandils in bright colors are added to provide a youthful appearance of
        festivity.
      </p>

      <h3>Festive Corners with Flowers</h3>

      <p>
        Flowers make an immediate difference and make people happier. Dress
        your puja area, dining table, and living area with garlands of marigolds
        or rose petals. Serve them in brass bowls of water and candles floating
        in water to serve as a dignified appearance.
      </p>

      <h3>Traditional Touch with Torans</h3>

      <p>
        decorate your apartment doors with mango leaf torans, beads or
        marigolds. Not only do they indicate prosperity, but they also render
        the space friendly and celebratory.
      </p>

      <h3>Create a Cosy Diwali Ambience</h3>

      <p>
        Create the feel of a festive atmosphere with little details such as
        colored cushions, bright table runners, and traditional decorative
        pieces. The mood can be lifted by burning sticks of incense or
        essential oils with relaxing scents such as sandalwood or jasmine.
      </p>

      <h3>Eco-Friendly Choices</h3>

      <p>
        While decorating, opt for eco-friendly materials. Use clay diyas,
        natural flowers, or reusable décor instead of plastic. This way, you
        can enjoy the celebrations while being kind to the environment.
      </p>

      <h3>Conclusion</h3>

      <p>
        Diwali is all about bringing light, warmth, and happiness into your
        home. With simple yet creative decorations like diyas, rangoli, fairy
        lights, and flowers, even a compact apartment can radiate festive
        charm. By adding a mix of tradition and modern style—and keeping it
        eco-friendly—you can create a cozy and welcoming atmosphere for your
        loved ones. This Diwali, let your apartment glow with positivity, joy,
        and the true spirit of celebration.
      </p>
    </div>
  );
}

export default function DiwaliDecorationIdeas() {
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
                    Apartment Living
                  </span>
                </div>

                <DiwaliArticleContent />

                <div className="aafiya-blog-details-back">
                  <Link to="/service-apartment-blog">
                    <FiArrowRight aria-hidden="true" />
                    Back to All Blogs
                  </Link>
                </div>
              </div>
            </article>

            <DiwaliDecorationSidebar />
          </div>
        </div>
      </section>
    </main>
  );
}
