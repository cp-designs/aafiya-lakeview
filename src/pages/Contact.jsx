
import { useState } from "react";
import {
  FiPhoneCall,
  FiMapPin,
  FiSend,
  FiHome,
} from "react-icons/fi";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    msg_subject: "",
    message: "",
    captcha: "",
  });

  const [captchaNumbers, setCaptchaNumbers] = useState({
    first: 0,
    second: 0,
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const generateCaptcha = () => {
    setCaptchaNumbers({
      first: Math.floor(Math.random() * 10) + 1,
      second: Math.floor(Math.random() * 10) + 1,
    });
  };

  // Generate initial CAPTCHA
  useState(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expectedAnswer =
      captchaNumbers.first + captchaNumbers.second;

    if (Number(formData.captcha) !== expectedAnswer) {
      setStatus({
        type: "error",
        message: "Incorrect CAPTCHA answer. Please try again.",
      });

      setFormData((previous) => ({
        ...previous,
        captcha: "",
      }));

      generateCaptcha();
      return;
    }

    setStatus({
      type: "error",
      message:
        "Your form is ready, but the contact backend is not connected yet.",
    });

    setFormData({
      name: "",
      email: "",
      phone_number: "",
      msg_subject: "",
      message: "",
      captcha: "",
    });

    generateCaptcha();
  };

  return (
    <>
      {/* Page Banner */}
      <section className="aafiya-contact-banner">
        <div className="aafiya-contact-container">
          <h1>Contact Us | Aafiya Lakeview Apartments</h1>

          <div className="aafiya-contact-breadcrumb">
            <a href="/">
              <FiHome />
              Home
            </a>

            <span>/</span>

            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="aafiya-contact-info">
        <div className="aafiya-contact-container">
          <div className="aafiya-contact-info-grid">
            <div className="aafiya-contact-info-card">
              <div className="aafiya-contact-icon">
                <FiPhoneCall />
              </div>

              <h3>Call Us</h3>

              <a href="tel:+917305151950">
                Tel. +91 7305151950
              </a>
            </div>

            <div className="aafiya-contact-info-card">
              <div className="aafiya-contact-icon">
                <FiMapPin />
              </div>

              <h3>Location</h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Aafiya+Lakeview+Apartments+Coimbatore"
                target="_blank"
                rel="noreferrer"
              >
                51 Sunderasan Iyyar Layout, Trichy Road, near
                Government Hospital, Coimbatore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="aafiya-contact-main">
        <div className="aafiya-contact-container">
          <div className="aafiya-contact-form-wrapper">
            <div className="aafiya-contact-section-title">
              <img
                src="/assets/img/aafiya-logo-new.png"
                alt="Aafiya Lakeview Logo"
              />

              <h2>Drop us a message for any query</h2>

              <p>
                Have a question? Fill out the form below and
                get in touch with our team.
              </p>
            </div>

            {status.message && (
              <div
                className={`aafiya-contact-alert ${
                  status.type === "success"
                    ? "success"
                    : "error"
                }`}
                role="alert"
              >
                {status.message}
              </div>
            )}

            <form
              className="aafiya-contact-form"
              onSubmit={handleSubmit}
            >
              <div className="aafiya-contact-form-grid">
                <div className="aafiya-contact-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="aafiya-contact-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="aafiya-contact-field">
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Your Phone (Optional)"
                    value={formData.phone_number}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                <div className="aafiya-contact-field">
                  <input
                    type="text"
                    name="msg_subject"
                    placeholder="Your Subject"
                    value={formData.msg_subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="aafiya-contact-field full-width">
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="aafiya-contact-field captcha-field">
                  <label htmlFor="captcha">
                    Solve this: {captchaNumbers.first} +{" "}
                    {captchaNumbers.second} = ?
                  </label>

                  <input
                    type="number"
                    name="captcha"
                    id="captcha"
                    placeholder="Your Answer"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="aafiya-contact-submit full-width">
                  <button type="submit">
                    Send Message
                    <FiSend />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="aafiya-contact-map">
        <iframe
          title="Aafiya Lakeview Apartments Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.6003669012734!2d76.97224421023951!3d10.993507089123572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591ab69c59a5%3A0x690a5edb9de709f1!2sAafiya%20Lakeview%20Apartments!5e0!3m2!1sen!2sin!4v1779173571629!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default Contact;
