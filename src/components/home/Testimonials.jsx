
import { useEffect, useRef } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMessageSquare,
  FiStar
} from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Aarti Naganur",
    review:
      "Well kept apartments, with a gorgeous view of the lake and western ghats. Courteous staff who are extremely helpful with anything that is asked. Prompt cleaning every morning. The apartment is easily accessible from race course road, with delivery of all apps available.",
  },
  {
    id: 2,
    name: "PANDURANGA NARAYANA SWAMY",
    review:
      "The apartment is kept tidy, with a full fledged kitchen. The response with which our needs were attended is remarkable. Mr Taufiq the Manager was friendly and resourceful with his proactive attitude. For a day we could enjoy the hospitality of Mr Hakkim also.",
  },
  {
    id: 3,
    name: "Anju Iyer",
    review:
      "We had a very comfortable and peaceful stay with family at Aafiya Lakeview Service Apartments. Clean, spacious apartment with kitchen, refrigerator, washing machine, WiFi and all amenities. Special mention for Mr. Thoufeeq and Mr. Hakkim for the prompt service. Very courteous and warm reception. Highly recommended for staying with family.",
  },
  {
    id: 4,
    name: "Suren",
    review:
      "The room itself was spacious, beautifully decorated, and impeccably clean. The attention to detail was evident in every aspect of the decor, from the luxurious bedding to the thoughtful amenities provided.",
  },
  {
    id: 5,
    name: "Prabu Raman",
    review:
      "I recently had a pleasant stay at Aafiya Lakeview Apartments during a business trip. The comfortable rooms, convenient location, and attentive staff made my visit enjoyable. Highly recommend for business travellers. I wish to stay back with my family next time.",
  },
];

function Testimonials() {
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const scrollCards = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector(".aafiya-testimonial-card");
    if (!card) return;

    const gap = 24;
    const distance = card.getBoundingClientRect().width + gap;

    track.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const startAutoScroll = () => {
      window.clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        if (!track || track.matches(":hover")) return;

        const maxScroll = track.scrollWidth - track.clientWidth;

        if (track.scrollLeft >= maxScroll - 5) {
          track.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          const card = track.querySelector(".aafiya-testimonial-card");
          if (card) {
            track.scrollBy({
              left: card.getBoundingClientRect().width + 24,
              behavior: "smooth",
            });
          }
        }
      }, 5500);
    };

    startAutoScroll();

    return () => {
      window.clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="testimonials-area aafiya-testimonials-section">
      <div className="container">
        <div className="aafiya-testimonials-heading">
          <span className="aafiya-testimonials-eyebrow">
            GUEST EXPERIENCES
          </span>

          <h2>
            Stories From Our <span>Happy Guests</span>
          </h2>

          <p>
            Discover the experiences of guests who have enjoyed comfort,
            convenience and warm hospitality at Aafiya Lakeview.
          </p>

          <img
            src="/assets/img/underline.png"
            alt=""
            className="aafiya-testimonials-underline"
          />
        </div>

        <div className="aafiya-testimonials-toolbar">
          <span className="aafiya-testimonials-caption">
            <FiMessageSquare aria-hidden="true" />
            Guest reviews
          </span>

          <div className="aafiya-testimonials-controls">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              aria-label="Previous testimonials"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => scrollCards(1)}
              aria-label="Next testimonials"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="aafiya-testimonials-track"
          ref={trackRef}
          aria-label="Guest testimonials"
        >
          {testimonials.map((testimonial) => (
            <article
              className="aafiya-testimonial-card"
              key={testimonial.id}
            >
              <div className="aafiya-testimonial-card-top">
                <span className="aafiya-testimonial-quote">
                  <FiMessageSquare aria-hidden="true" />
                </span>

                <div
                  className="aafiya-testimonial-stars"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <FiStar
                      key={index}
                      aria-hidden="true"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>

              <p className="aafiya-testimonial-review">
                {testimonial.review}
              </p>

              <div className="aafiya-testimonial-divider" />

              <div className="aafiya-testimonial-author">
                <span className="aafiya-testimonial-avatar">
                  {testimonial.name.charAt(0).toUpperCase()}
                </span>

                <div className="aafiya-testimonial-author-info">
                  <h3>{testimonial.name}</h3>
                  <span>Guest Experience</span>
                </div>

                <FiMessageSquare
                  className="aafiya-testimonial-author-mark"
                  aria-hidden="true"
                />
              </div>
            </article>
          ))}
        </div>

        <div className="aafiya-testimonials-footer">
          <span className="aafiya-testimonials-footer-dot" />
          <p>Your comfort and experience matter to us</p>
          <span className="aafiya-testimonials-footer-dot" />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
