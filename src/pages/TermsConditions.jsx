
import { Link } from "react-router-dom";
import "../styles/TermsConditions.css";

function TermsConditions() {
  return (
  <div className="terms-page">
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1 className="title" id="banner-color">
              Terms &amp; Conditions
            </h1>

            <ul className="page-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Terms &amp; Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="privacy-policy-content">
            <h2>Terms &amp; Conditions – Aafiya Lakeview Service Apartments</h2>

            <p>
              These Terms &amp; Conditions govern all bookings and stays at
              Aafiya Lakeview Service Apartments, located at 51 underasan Iyyar
              Layout, Trichy Road, near Government Hospital, Coimbatore. By
              booking or checking in, the guest agrees to the following terms.
            </p>

            <h3>1. Check-In / Check-Out</h3>
            <ul>
              <li>Check-in: 2:00 PM onwards</li>
              <li>Check-out: 11:00 AM</li>
              <li>
                Early check-in or late check-out is subject to availability and
                may be chargeable at Rs. 500 per started hour. Please request
                in advance.
              </li>
            </ul>

            <h3>2. Guest Eligibility &amp; Identification</h3>
            <ul>
              <li>
                Valid government-issued photo ID (Aadhaar, Passport, Driving
                Licence, or Voter ID) is mandatory for all guests at check-in.
              </li>
              <li>
                Aafiya Lakeview does not accommodate unmarried couples. Guests
                checking in as a couple must provide valid proof of relationship
                at check-in.
              </li>
              <li>
                Management reserves the right of admission and may refuse or
                withdraw accommodation without refund if this policy is
                violated.
              </li>
            </ul>

            <h3>3. Occupancy</h3>
            <ul>
              <li>1BHK apartments accommodate a maximum of 2 guests.</li>
              <li>2BHK apartments accommodate a maximum of 4 guests.</li>
              <li>
                Occupancy beyond the permitted limit is not allowed without
                prior approval and may attract additional charges.
              </li>
            </ul>

            <h3>4. Visitors</h3>
            <ul>
              <li>Visitors are permitted only until 10:00 PM.</li>
              <li>Visitors must always be accompanied by the registered guest.</li>
              <li>
                The registered guest is responsible for their visitors during
                the stay.
              </li>
            </ul>

            <h3>5. Children</h3>
            <p>
              Children of all ages are welcome. Parents or guardians are
              responsible for supervising children at all times and should not
              leave them unattended inside the apartment or common areas.
            </p>

            <h3>6. Smoking Policy</h3>
            <p>
              Aafiya Lakeview is a non-smoking property. Guests found smoking
              inside the apartment will be charged Rs. 1,000 towards
              deep-cleaning costs.
            </p>

            <h3>7. Pets</h3>
            <p>Pets are not permitted on the property.</p>

            <h3>8. Noise &amp; Conduct</h3>
            <ul>
              <li>Quiet hours are from 9:00 PM to 7:00 AM.</li>
              <li>Parties, loud gatherings, or disturbances are not permitted.</li>
              <li>
                Guests causing disturbance will receive one warning. Continued
                disruption may result in being asked to vacate without refund.
              </li>
              <li>
                Guests behaving in a disorderly manner while intoxicated may be
                refused continued accommodation.
              </li>
            </ul>

            <h3>9. Guest Belongings</h3>
            <p>
              Management is not responsible for the loss, theft, or damage of
              guests&apos; personal belongings, cash, jewellery, or valuables.
              Items found after checkout will be held for a reasonable period.
              Perishable and personal hygiene items will be discarded
              immediately.
            </p>

            <h3>10. Damage to Property</h3>
            <p>
              Guests are responsible for any damage caused to the apartment,
              furniture, fixtures, or equipment by themselves or their visitors.
              Repair, replacement, or specialised cleaning costs will be charged
              at actual cost.
            </p>

            <h3>11. Internet Use</h3>
            <p>
              Complimentary WiFi is provided for guest use. Any unlawful
              activity or installation of private routers/networks is strictly
              prohibited and may result in additional charges or cancellation
              of the booking.
            </p>

            <h3>12. Cancellation Policy</h3>
            <ul>
              <li>Free cancellation up to 14 days before check-in.</li>
              <li>
                Cancellations made 7–14 days before check-in receive a 50%
                refund of the nightly rate (cleaning fee excluded).
              </li>
              <li>
                Cancellations made less than 7 days before check-in, or early
                departures after check-in, are non-refundable.
              </li>
              <li>
                Bookings made through third-party platforms (Booking.com,
                Airbnb, MakeMyTrip, Agoda, etc.) are subject to their respective
                cancellation policies.
              </li>
            </ul>

            <h3>13. Right to Refuse Service</h3>
            <p>
              Aafiya Lakeview reserves the right to refuse or withdraw
              accommodation, without refund, for guests who violate these Terms
              &amp; Conditions, engage in unlawful activities, exceed occupancy
              limits, or pose a risk to staff or other guests.
            </p>

            <h3>14. Right to Amend</h3>
            <p>
              Aafiya Lakeview reserves the right to modify or update these Terms
              &amp; Conditions at any time without prior notice. Guests are
              encouraged to review this page periodically.
            </p>

            <h3>15. Website Information Accuracy</h3>
            <p>
              We strive to keep information on our website accurate and up to
              date. However, we do not guarantee that all content is free from
              errors and reserve the right to update or correct information at
              any time without prior notice.
            </p>

            <h3>16. Contact</h3>
            <p>
              If you have any questions regarding these Terms &amp; Conditions,
              please contact us:
            </p>

            <ul>
              <li>
                Phone: <a href="tel:+917305151950">+91 73051 51950</a>
              </li>
              <li>
                Address: 51 Sunderasan Iyyar Layout, Trichy Road, near
                Government Hospital, Coimbatore.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsConditions;
