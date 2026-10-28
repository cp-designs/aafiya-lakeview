
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiGrid,
  FiList,
  FiSearch,
  FiSliders,
  FiX,
} from "react-icons/fi";


import "../styles/Blog.css";

const BLOG_BASE_URL = "https://www.aafiyalakeview.com/";

const blogPosts = [
  {
    id: 1,
    title:
      "A Guide to Finding Premium Apartments in Coimbatore Near Key City Areas",
    image: "/assets/img/blog/premium.png",
    alt: "Premium Apartments in Coimbatore Near Key City Areas",
    route: "/premium-apartments-in-coimbatore",
    category: "Apartments",
  },
  {
    id: 2,
    title:
      "Smart Travel in 2026: How to Find a Comfortable and Cost-Effective Stay",
    image:
      "/assets/img/blog/smart-travel-cost-effective-stay-coimbatore.jpeg",
    alt: "Smart Travel in 2026: Cost-Effective Stay in Coimbatore",
    route: "/smart-travel-2026-cost-effective-stay-coimbatore",
    category: "Travel Tips",
  },
  {
    id: 3,
    title: "The Growing Demand for 2BHK Service Apartments in Coimbatore",
    image:
      "/assets/img/blog/growing-demand-2bhk-service-apartments-coimbatore.jpeg",
    alt: "The Growing Demand for 2BHK Service Apartments in Coimbatore",
    route: "/growing-demand-2bhk-service-apartments-coimbatore",
    category: "2BHK Apartments",
  },
  {
    id: 4,
    title:
      "How to Choose the Right Service Apartment in Coimbatore for a Long Stay",
    image: "/assets/img/blog/monthly-rent-service-apartments.jpeg",
    alt: "How to Choose Service Apartments in Coimbatore for Long Stays",
    route: "/choose-right-service-apartment-coimbatore",
    category: "Travel Tips",
  },
  {
    id: 5,
    title:
      "Why Business Travellers Choose Service Apartments in Coimbatore Over Hotels",
    image:
      "/assets/img/blog/business-travel-service-apartments-coimbatore.jpeg",
    alt: "Why Business Travellers Choose Service Apartments in Coimbatore",
    route: "/business-travel-service-apartments-coimbatore",
    category: "Business Travel",
  },
  {
    id: 6,
    title:
      "Comfort Living Standard with Service Apartments in Coimbatore",
    image:
      "/assets/img/blog/comfort-living-standard-service-apartments-coimbatore.jpeg",
    alt: "Comfort Living Standard with Service Apartments in Coimbatore",
    route: "/comfort-living-standard-service-apartments-coimbatore",
    category: "Apartments",
  },
  {
    id: 7,
    title:
      "Affordable 1BHK Studio Apartment for Rent in Coimbatore: Budget-Friendly Options",
    image:
      "/assets/img/blog/affordable-1bhk-studio-apartment-for-rent-in-coimbatore3.jpeg",
    alt: "Affordable 1BHK Studio Apartment for Rent in Coimbatore",
    route: "/affordable-1bhk-studio-apartment-for-rent-in-coimbatore",
    category: "1BHK Apartments",
  },
  {
    id: 8,
    title:
      "What Makes a Service Apartment in Coimbatore the Perfect Accommodation Choice",
    image: "/assets/img/blog/comfortable-service-apartment-coimbatore.jpeg",
    alt: "Comfortable Service Apartment in Coimbatore",
    route: "/comfortable-service-apartment-coimbatore",
    category: "Apartments",
  },
  {
    id: 9,
    title: "Top Benefits of Choosing a Service Apartment for Your Stay",
    image: "/assets/img/blog/benefits-of-service-apartments-for-your-stay.png",
    alt: "Benefits of Service Apartments for Your Stay",
    route: "/benefits-of-service-apartments-for-your-stay",
    category: "Travel Tips",
  },
  {
    id: 10,
    title: "Explore the Lifestyle and Amenities at Aafiya Lakeview",
    image:
      "/assets/img/blog/aafiya-lakeview-lifestyle-amenities-coimbatore.png",
    alt: "Aafiya Lakeview Lifestyle and Amenities",
    route: "/aafiya-lakeview-lifestyle-amenities-coimbatore",
    category: "Aafiya Lakeview",
  },
  {
    id: 11,
    title: "Why Service Apartments Are Better Than Hotels for Long Stays",
    image:
      "/assets/img/blog/service-apartments-vs-hotels-long-stays-coimbatore.png",
    alt: "Service Apartments vs Hotels for Long Stays",
    route: "/service-apartments-vs-hotels-long-stays-coimbatore",
    category: "Travel Tips",
  },
  {
    id: 12,
    title:
      "1 BHK Apartments: Smart Choice for Comfortable Urban Living",
    image: "/assets/img/blog/1bhk-apartment-comfortable-urban-living.png",
    alt: "1 BHK Apartments for Comfortable Urban Living",
    route: "/1-bhk-apartments-smart-urban-living-choice",
    category: "1BHK Apartments",
  },
  {
    id: 13,
    title: "Luxury Apartment for Modern and Comfortable Living",
    image: "/assets/img/blog/luxury-apartment-in-coimbatore.png",
    alt: "Luxury Apartment in Coimbatore",
    route: "/living-luxury-apartments-coimbatore",
    category: "Apartments",
  },
  {
    id: 14,
    title:
      "The Benefits of Living in a Fully Furnished Service Apartment",
    image: "/assets/img/blog/8.webp",
    alt: "Fully Furnished Service Apartment",
    route: "/benefits-of-fully-furnished-service-apartment",
    category: "Apartments",
  },
  {
    id: 15,
    title: "Diwali Decoration Ideas for Apartments",
    image: "/assets/img/blog/7.webp",
    alt: "Diwali Decoration Ideas for Apartments",
    route: "/diwali-decoration-ideas-for-apartments",
    category: "Lifestyle",
  },
  {
    id: 16,
    title: "1 BHK Apartments Explained: From Features to Advantages",
    image: "/assets/img/blog/6.webp",
    alt: "1 BHK Apartments Explained",
    route: "/1-bhk-apartments-features-and-advantages",
    category: "1BHK Apartments",
  },
  {
    id: 17,
    title:
      "2 BHK King Studio Apartments: Blending Style with Practicality",
    image: "/assets/img/blog/5.webp",
    alt: "2 BHK King Studio Apartments",
    route: "/2-bhk-king-studio-apartments-smart-comfort-style",
    category: "2BHK Apartments",
  },
  {
    id: 18,
    title: "Why 2 BHK Studio Apartments Are Ideal for Urban Families",
    image: "/assets/img/blog/4.webp",
    alt: "2 BHK Studio Apartments for Urban Families",
    route: "/2bhk-studio-homes-for-urban-families",
    category: "2BHK Apartments",
  },
  {
    id: 19,
    title:
      "A Smart Living Option: Advantages of Choosing a 2 BHK King Studio Apartment",
    image: "/assets/img/blog/3.webp",
    alt: "Advantages of a 2 BHK King Studio Apartment",
    route: "/smart-living-benefits-2bhk-king-studio-apartment",
    category: "2BHK Apartments",
  },
  {
    id: 20,
    title: "Why Studio Apartments Are Perfect for Modern Urban Life",
    image: "/assets/img/blog/2.webp",
    alt: "Studio Apartments for Modern Urban Life",
    route: "/modern-urban-life-studio-apartments",
    category: "Apartments",
  },
  {
    id: 21,
    title:
      "Why Service Apartments Are Ideal for Business and Family Stays",
    image: "/assets/img/blog/1.webp",
    alt: "Service Apartments for Business and Family Stays",
    route: "/service-apartments-ideal-business-family-travel",
    category: "Business Travel",
  },
];

const categories = [
  "All Posts",
  "Apartments",
  "1BHK Apartments",
  "2BHK Apartments",
  "Travel Tips",
  "Business Travel",
  "Lifestyle",
  "Aafiya Lakeview",
];

const POSTS_PER_PAGE = 9;

function BlogPageHeading() {
  return (
    <section className="aafiya-blog-banner">
      <div className="aafiya-blog-container">
        <span className="aafiya-blog-eyebrow">
          AAFIYA LAKEVIEW APARTMENTS
        </span>

        <h1>Blog</h1>

        <nav className="aafiya-blog-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <FiChevronRight aria-hidden="true" />
          <span>Blog</span>
        </nav>
      </div>
    </section>
  );
}

function BlogCard({ post, viewMode }) {
  const articleUrl = post.route;

  return (
<article
  className={`aafiya-blog-card ${
    viewMode === "list" ? "aafiya-blog-card-list" : ""
  }`}
>
  <Link
    to={articleUrl}
    className="aafiya-blog-card-image"
    aria-label={`Read ${post.title}`}
  >
    <img
      src={post.image}
      alt={post.alt}
      loading="lazy"
      onError={(event) => {
        event.currentTarget.style.visibility = "hidden";
      }}
    />

    <span className="aafiya-blog-image-icon" aria-hidden="true">
      <FiBookOpen />
    </span>
  </Link>

  <div className="aafiya-blog-card-content">
    <span className="aafiya-blog-category">
      {post.category}
    </span>

    <h2>
      <Link to={articleUrl}>{post.title}</Link>
    </h2>

    <Link
      to={articleUrl}
      className="aafiya-blog-read-more"
    >
      Read More
      <FiArrowRight aria-hidden="true" />
    </Link>
  </div>
</article>
  );
}

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [sortOrder, setSortOrder] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    let result = blogPosts.filter((post) => {
      const matchesSearch =
        !normalizedSearch ||
        post.title.toLowerCase().includes(normalizedSearch) ||
        post.category.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "All Posts" ||
        post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    if (sortOrder === "az") {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortOrder === "za") {
      result = [...result].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }

    return result;
  }, [searchTerm, selectedCategory, sortOrder]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const safeCurrentPage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  );

  const visiblePosts = filteredPosts.slice(
    (safeCurrentPage - 1) * POSTS_PER_PAGE,
    safeCurrentPage * POSTS_PER_PAGE
  );

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All Posts");
    setSortOrder("default");
    setCurrentPage(1);
  };

  return (
    <main className="aafiya-blog-page">
      <BlogPageHeading />

      <section className="aafiya-blog-main">
        <div className="aafiya-blog-container">
          <header className="aafiya-blog-section-heading">
            <span className="aafiya-blog-section-eyebrow">
              STORIES &amp; INSIGHTS
            </span>

            <h2>Explore Our Blog</h2>

            <p>
              Discover helpful insights, travel tips and comfortable
              accommodation ideas from Aafiya Lakeview Apartments.
            </p>

            
<img
  src="/assets/img/underline.png"
  alt=""
  className="aafiya-blog-heading-line"
/>

          </header>

          <div className="aafiya-blog-toolbar">
            <label className="aafiya-blog-search">
              <FiSearch aria-hidden="true" />

              <input
                type="search"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setCurrentPage(1);
                }}
                aria-label="Search blog articles"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setCurrentPage(1);
                  }}
                  aria-label="Clear search"
                >
                  <FiX />
                </button>
              )}
            </label>

            <div className="aafiya-blog-toolbar-right">
              <label className="aafiya-blog-sort">
                <FiSliders aria-hidden="true" />

                <select
                  value={sortOrder}
                  onChange={(event) => {
                    setSortOrder(event.target.value);
                    setCurrentPage(1);
                  }}
                  aria-label="Sort articles"
                >
                  <option value="default">Default order</option>
                  <option value="az">Title: A to Z</option>
                  <option value="za">Title: Z to A</option>
                </select>
              </label>

              <div
                className="aafiya-blog-view-toggle"
                aria-label="Blog display layout"
              >
                <button
                  type="button"
                  className={viewMode === "grid" ? "is-active" : ""}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  aria-pressed={viewMode === "grid"}
                >
                  <FiGrid />
                </button>

                <button
                  type="button"
                  className={viewMode === "list" ? "is-active" : ""}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  aria-pressed={viewMode === "list"}
                >
                  <FiList />
                </button>
              </div>
            </div>
          </div>

          <div className="aafiya-blog-filter-row">
            <div className="aafiya-blog-filter-label">
              <FiBookOpen aria-hidden="true" />
              <span>Categories</span>
            </div>

            <div className="aafiya-blog-categories">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  className={
                    selectedCategory === category ? "is-active" : ""
                  }
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="aafiya-blog-results">
            <p>
              Showing{" "}
              <strong>{visiblePosts.length}</strong> of{" "}
              <strong>{filteredPosts.length}</strong> articles
            </p>

            {(searchTerm || selectedCategory !== "All Posts") && (
              <button
                type="button"
                onClick={resetFilters}
                className="aafiya-blog-reset"
              >
                <FiX />
                Clear filters
              </button>
            )}
          </div>

          {visiblePosts.length > 0 ? (
            <div
              className={`aafiya-blog-grid ${
                viewMode === "list" ? "is-list-view" : ""
              }`}
            >
              {visiblePosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="aafiya-blog-empty">
              <span>
                <FiSearch />
              </span>

              <h3>No articles found</h3>

              <p>
                Try another keyword or choose a different category.
              </p>

              <button type="button" onClick={resetFilters}>
                <FiX />
                Clear filters
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <nav
              className="aafiya-blog-pagination"
              aria-label="Blog pagination"
            >
              <button
                type="button"
                disabled={safeCurrentPage === 1}
                onClick={() =>
                  setCurrentPage((page) => Math.max(1, page - 1))
                }
                aria-label="Previous page"
              >
                <FiChevronLeft />
              </button>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    type="button"
                    key={page}
                    className={
                      safeCurrentPage === page ? "is-active" : ""
                    }
                    onClick={() => {
                      setCurrentPage(page);
                      document
                        .querySelector(".aafiya-blog-main")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    aria-label={`Page ${page}`}
                    aria-current={
                      safeCurrentPage === page ? "page" : undefined
                    }
                  >
                    {page}
                  </button>
                )
              )}

              <button
                type="button"
                disabled={safeCurrentPage === totalPages}
                onClick={() =>
                  setCurrentPage((page) =>
                    Math.min(totalPages, page + 1)
                  )
                }
                aria-label="Next page"
              >
                <FiChevronRight />
              </button>
            </nav>
          )}

          <div className="aafiya-blog-bottom-note">
            <FiClock aria-hidden="true" />
            <p>
              Explore more about comfortable stays, service apartments and
              travel in Coimbatore.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;
