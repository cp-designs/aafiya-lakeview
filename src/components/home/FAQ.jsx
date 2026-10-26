
import { useState } from "react";

const faqs = [
  {
    question: "What are Aafiya Lakeview Apartments in Coimbatore?",
    answer:
      "Aafiya Lakeview Apartments is a premium serviced apartment in central Coimbatore, offering comfortable stays with lake views and modern amenities.",
  },
  {
    question: "Where is Aafiya Lakeview Apartments located?",
    answer:
      "Aafiya Lakeview Apartments is located in Sundaresa Iyer Layout, near Trichy Road and Government Hospital Road in Coimbatore.",
  },
  {
    question: "Is Aafiya Lakeview a good place to stay in Coimbatore?",
    answer:
      "Aafiya Lakeview offers serviced apartments with facilities such as Wi-Fi, air conditioning, parking, kitchen facilities and lake views, making it suitable for different types of stays.",
  },
  {
    question: "Does Aafiya Lakeview offer lake view apartments in Coimbatore?",
    answer:
      "Yes. Aafiya Lakeview offers apartments with lake views, including studio apartment options with a lake view.",
  },
  {
    question: "Is Aafiya Lakeview suitable for family stays in Coimbatore?",
    answer:
      "Yes. Family rooms and spacious apartment options make Aafiya Lakeview suitable for families visiting Coimbatore.",
  },
  {
    question: "Does Aafiya Lakeview offer serviced apartments in Coimbatore?",
    answer:
      "Yes. Aafiya Lakeview provides serviced apartment accommodation with facilities designed for comfortable short and extended stays.",
  },
  {
    question: "Does Aafiya Lakeview have 1BHK apartments?",
    answer:
      "Yes. Aafiya Lakeview has 1BHK apartment options suitable for couples, individuals and small families.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-area pt-100 pb-100">
      <div className="container">
        <div className="section-title">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>

          <img
            src="/assets/img/underline.png"
            alt=""
            className="underline-img"
          />
        </div>

        <div className="faq-accordion">
          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const headingId = `faq-heading-${index + 1}`;
              const panelId = `faq-panel-${index + 1}`;

              return (
                <div className="accordion-item" key={faq.question}>
                  <h2 className="accordion-header" id={headingId}>
                    <button
                      className={`accordion-button ${
                        isOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                    >
                      {index + 1}. {faq.question}
                    </button>
                  </h2>

                  <div
                    id={panelId}
                    className={`accordion-collapse collapse ${
                      isOpen ? "show" : ""
                    }`}
                    aria-labelledby={headingId}
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
