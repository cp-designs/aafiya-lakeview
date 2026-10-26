
import { useEffect } from "react";

const slides = [
  
{
  id: 1,
  className: "slider-item-bg-1 mobile-tall-height",
  title: "Aafiya Lakeview Apartments",
  description:
    "Experience comfortable stays at Aafiya Lakeview Apartments in Coimbatore, with fully furnished rooms, modern amenities, and a relaxing lakeview atmosphere.",
},

  {
    id: 2,
    className: "slider-item-bg-2",
    title: "Aafiya Lakeview Apartments",
    description:
      "Aafiya Lakeview provides affordable service apartments in Coimbatore with fully furnished rooms, housekeeping, and 24/7 security near Trichy Road and Government Hospital Road.",
  },
  {
    id: 3,
    className: "slider-item-bg-3",
    title: "Aafiya Lakeview Apartments",
    description:
      "Comfortable 1BHK service apartments in Coimbatore with flexible stay options, ideal for families, short trips, and long stays.",
  },
  {
    id: 4,
    className: "slider-item-bg-4",
    title: "Aafiya Lakeview Apartments",
    description:
      "Fully furnished 2BHK service apartments in Coimbatore designed for family comfort and convenient city living.",
  },
  {
    id: 5,
    className: "slider-item-bg-5",
    title: "Aafiya Lakeview Apartments",
    description:
      "Premium King 2BHK service apartments in Coimbatore with spacious interiors, modern comfort, and beautiful city views at budget-friendly prices.",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Aafiya-Lakeview/pfbid02AR3vzkeCiEmoxSPPdbGFfH78C9oRMbR1FdULYRn7M6AaT1r798UBiFr781VypmGul/",
    icon: "bx bxl-facebook",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCgflhobVY0y7gdQgrLbbdUQ",
    icon: "bx bxl-youtube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aafiyalakeviewapartments/",
    icon: "bx bxl-instagram",
  },
];

function Hero() {
  useEffect(() => {
    let timer;
    let attempts = 0;
    let $slider;

    const initializeSlider = () => {
      const $ = window.jQuery;

      if (!$ || !$.fn || !$.fn.owlCarousel) {
        attempts += 1;

        if (attempts < 20) {
          timer = window.setTimeout(initializeSlider, 250);
        } else {
          console.error(
            "Hero slider: jQuery or Owl Carousel failed to load."
          );
        }

        return;
      }

      $slider = $(".eorik-slider");

      if (!$slider.length) return;

      if ($slider.hasClass("owl-loaded")) {
        $slider.trigger("destroy.owl.carousel");
        $slider.removeClass("owl-loaded");
        $slider.find(".owl-stage-outer").children().unwrap();
      }

      $slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        mouseDrag: true,
        touchDrag: true,
      });
    };

    initializeSlider();

    return () => {
      window.clearTimeout(timer);

      if ($slider?.length && $slider.hasClass("owl-loaded")) {
        $slider.trigger("destroy.owl.carousel");
      }
    };
  }, []);

  return (
    <section className="eorik-slider-area">
      <div className="eorik-slider owl-carousel owl-theme">
        {slides.map((slide) => (
          <div
            className={`eorik-slider-item ${slide.className}`}
            key={slide.id}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="eorik-slider-text overflow-hidden one eorik-slider-text-one">
                    {slide.title && <h2>{slide.title}</h2>}

                    {slide.description && (
                      <span>{slide.description}</span>
                    )}

                    {slide.title && (
                      <div className="slider-btn">
                        <a className="default-btn" href="/contact-us">
                          Book To Stay
                          <i className="flaticon-right"></i>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="white-shape">
        <img
          src="/assets/img/home-one/slider/white-shape.png"
          alt="Decorative white shape"
        />
      </div>

      <div className="social-link">
        <ul>
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                aria-label={`Visit our ${social.name} page`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon} aria-hidden="true"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
