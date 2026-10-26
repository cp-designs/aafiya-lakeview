
import { useEffect, useRef } from "react";
import {
  FiHeart,
  FiBriefcase,
  FiBookOpen,
  FiArrowUpRight,
} from "react-icons/fi";

const stayPurposes = [
  {
    id: 1,
    title: "Medical Tourism",
    icon: FiHeart,
    number: "01",
    description:
      "Our beautiful service apartments for medical tourism are tailored to provide maximum comfort and convenience for a decent medical stay.",
  },
  {
    id: 2,
    title: "Corporate",
    icon: FiBriefcase,
    number: "02",
    description:
      "bilding When away from home for business, you won’t have to sacrifice the comforts of home when you stay with Aafiya",
  },
  {
    id: 3,
    title: "Internship / Student",
    icon: FiBookOpen,
    number: "03",
    description:
      "Today’s interns are the best and brightest of their peers. Our homestay offers a haven for aspirants, providing the ideal environment for focused preparation in competitive exams like NEET,NEXT UPSC,TNPSC.",
  },
];

function StayPurpose() {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const pausedRef = useRef(false);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frameId;
    let loopWidth = 0;

    const measureTrack = () => {
      loopWidth = track.scrollWidth / 2;
    };

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;

      const delta = Math.min(time - lastTimeRef.current, 40);
      lastTimeRef.current = time;

      if (!pausedRef.current && loopWidth > 0) {
        positionRef.current += delta * 0.025;

        if (positionRef.current >= loopWidth) {
          positionRef.current -= loopWidth;
        }

        track.style.transform = `translate3d(-${positionRef.current}px, 0, 0)`;
      }

      frameId = window.requestAnimationFrame(animate);
    };

    measureTrack();

    const resizeObserver = new ResizeObserver(measureTrack);
    resizeObserver.observe(track);

    frameId = window.requestAnimationFrame(animate);
    animationRef.current = frameId;

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      track.style.transform = "";
      positionRef.current = 0;
      lastTimeRef.current = 0;
    };
  }, []);

  const pauseMovement = () => {
    pausedRef.current = true;
  };

  const resumeMovement = () => {
    pausedRef.current = false;
  };

  const repeatedPurposes = [...stayPurposes, ...stayPurposes];

  return (
    <section className="bokking-area aafiya-purpose-section">
      <div className="aafiya-purpose-heading">
        <span className="aafiya-purpose-eyebrow">
          STAYS DESIGNED AROUND YOU
        </span>

        <h2>
          Every Stay Has a <span>Purpose</span>
        </h2>

        <p>
          Thoughtfully furnished spaces for healthcare visits, business trips
          and academic journeys in Coimbatore.
        </p>
      </div>

      <div
        className="aafiya-purpose-marquee"
        onMouseEnter={pauseMovement}
        onMouseLeave={resumeMovement}
        onFocusCapture={pauseMovement}
        onBlurCapture={resumeMovement}
        aria-label="Ways to stay at Aafiya Lakeview"
      >
        <div className="aafiya-purpose-track" ref={trackRef}>
          {repeatedPurposes.map((purpose, index) => {
            const PurposeIcon = purpose.icon;
            const isDuplicate = index >= stayPurposes.length;

            return (
              <article
                className="aafiya-purpose-card"
                key={`${purpose.id}-${index}`}
                aria-hidden={isDuplicate ? "true" : undefined}
              >
                <div className="aafiya-purpose-card-top">
                  <span className="aafiya-purpose-icon">
                    <PurposeIcon aria-hidden="true" />
                  </span>

                  <span className="aafiya-purpose-number">
                    {purpose.number}
                  </span>
                </div>

                <img
                  src="/assets/img/underline.png"
                  alt=""
                  className="aafiya-purpose-underline"
                />

                <h3>{purpose.title}</h3>

                <p>{purpose.description}</p>

                <div className="aafiya-purpose-card-footer">
                  <span>Aafiya Lakeview</span>
                  <FiArrowUpRight aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="aafiya-purpose-bottom">
        <span className="aafiya-purpose-bottom-dot" />
        <span>Comfort that fits your journey</span>
        <span className="aafiya-purpose-bottom-dot" />
      </div>
    </section>
  );
}

export default StayPurpose;
