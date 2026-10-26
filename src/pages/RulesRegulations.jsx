
import {
  FiClock,
  FiUsers,
  FiHeart,
  FiUserCheck,
  FiSmile,
  FiCalendar,
  FiLayers,
  FiWind,
  FiWifi,
  FiSlash,
  FiVolume2,
  FiActivity,
  FiAlertCircle,
  FiTool,
  FiSearch,
  FiShield,
  FiXCircle,
  FiFileText,
  FiChevronRight,
  FiHome,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import "../styles/RulesRegulations.css";

const rules = [
  {
    number: 1,
    title: "Check-in/check-out",
    icon: FiClock,
    content: (
      <>
        <p>Check-in time : 2PM Onwards</p>
        <p>Check-out time : 11.00 AM</p>
      </>
    ),
  },
  {
    number: 2,
    title: "Maximum Occupancy",
    icon: FiUsers,
    content: (
      <>
        <p>Aafiya Lakeview Apartments HAVE 7 APARTMENTS WITH</p>
        <p>ONE BED ROOM Apartments -3 NOS (ONLY 2 PEOPLE CAN ACCOMIDATE)</p>
        <p>TWO BED ROOM Apartments -4 NOS (ONLY 4 PEOPLE CAN ACCOMIDATE)</p>
      </>
    ),
  },
  {
    number: 3,
    title: "Un Married Couples Are Not Allowed.",
    icon: FiHeart,
  },
  {
    number: 4,
    title: "Visitors",
    icon: FiUserCheck,
    content: (
      <p>
        No visitors after 10:00 p.m. Guests must notify the staff about their
        visitors. Visitors must be accompanied by the registered guest at all
        times. As a registered guest, you are responsible for your visitor at
        all times.
      </p>
    ),
  },
  {
    number: 5,
    title: "Children",
    icon: FiSmile,
    content: (
      <p>
        Children of all ages are welcomed. As the parents, guardians, or
        chaperones of children you are personally and legally responsible for
        and must supervise them at all times. For safety reasons, please do
        not leave children unattended in the apartments or allow them to roam
        the property unsupervised.
      </p>
    ),
  },
  {
    number: 6,
    title: "Early Check-in / Late Check-out",
    icon: FiCalendar,
    content: (
      <p>
        Please contact us to request an option. Rs: 500 every started hour
        WILL BE CHARGABLE.
      </p>
    ),
  },
  {
    number: 7,
    title: "Extra Linen Chargeable",
    icon: FiLayers,
    content: (
      <p>
        If you want to rent a Lenin, please let us know in advance to prepare
        it before check-in.
      </p>
    ),
  },
  {
    number: 8,
    title: "Extra Cleaning",
    icon: FiHome,
    content: (
      <p>
        Your booking already contains the final cleaning. If you would like to
        have extra cleaning during your stay, you can order (It contains the
        changing of the linens as well.)
      </p>
    ),
  },
  {
    number: 9,
    title: "Pets",
    icon: FiHeart,
    content: <p>Pets are not allowed</p>,
  },
  {
    number: 10,
    title: "Internet Use",
    icon: FiWifi,
    content: (
      <p>
        Aafiya Lakeview Apartments offers free fast WiFi. We strictly prohibit
        the guests from using the internet for illegal activities and using
        the installation of private networks or private routers. Any use of
        the WiFi network for illegal activities and use of private networks
        or routers can lead to fines and cancellation of the reservation.
      </p>
    ),
  },
  {
    number: 11,
    title: "No Smoking",
    icon: FiSlash,
    content: (
      <p>
        Smoking is strictly prohibited throughout the building, except in
        designated areas. Under Hungarian health rules, we are obliged to
        initiate legal proceedings if this has been violated. As the smoke
        immediately enters the other rooms through the ventilation system,
        smoking directly negatively affects the health of the other guests
        and therefore cannot be permitted in any circumstance. If anyone
        violates this policy, we will have to initiate legal proceedings,
        which will result in a minimum penalty of RS: 2000 and further
        damages. We urge our guests to follow smoking rules and ensure a
        pleasant stay for everyone
      </p>
    ),
  },
  {
    number: 12,
    title: "No In-apartment Party",
    icon: FiVolume2,
    content: (
      <p>
        Aafiya Lakeview Apartments enforces a No In-Apartment Party Policy to
        ensure we can protect our guests and neighbors at all times. No
        parties, loud disturbances, and/or noise nuisance are allowed or
        tolerated on these premises. In the event of a disturbance, one polite
        request (warning) will be given to reduce the noise. If our request
        is not followed, the guest will be asked to leave the apartment
        without refund. Registered guest(s) is responsible for all persons
        visiting. Non-Registered visitors are only permitted until 10:00 P.M.
        If found with more “people” not listed on the Guest Registration Form
        after 10:00 P.M. your stay will be considered a party. You will be
        ordered to vacate the premises without refund.
      </p>
    ),
  },
  {
    number: 13,
    title: "Quiet Hours",
    icon: FiVolume2,
    content: (
      <p>
        Quiet hours starts from 9 p.m. to 7am If you become aware of a
        disruptive guest, please contact staff immediately. Televisions,
        voices, or other devices must be kept at a respectful low level at
        all times. Doors should be opened and closed quietly. No congregating
        or running in halls.
      </p>
    ),
  },
  {
    number: 14,
    title: "Illness And Epidemics",
    icon: FiActivity,
    content: (
      <p>
        Aafiya Lakeview Apartments reserves the right to refuse accommodations
        to a guest arriving with a contagious disease. In cases where sickness
        occurs during the stay, please notify the staff. In the case of serious
        sickness, you may be requested to receive appropriate health care from
        a nearby healthcare facility. During epidemics, we are entitled to
        employ precautionary measures within our judgment or as required by
        local authorities. The cleanliness of our rooms is extremely important
        to our guests. If you bring any infestation into your room or onto our
        hotel premises, we may charge you for any and all costs and expenses,
        including immediate or urgent response requirements and loss of room
        revenue, that we deem necessary to address the infestation.
      </p>
    ),
  },
  {
    number: 15,
    title: "Damage or Theft Of Hotel Property",
    icon: FiTool,
    content: (
      <p>
        You are liable for any damage howsoever caused (whether by the
        deliberate, negligent, or reckless act) to the room (s), hotel’s
        premises, or property caused by you or any person in your party
        whether or not staying at the apartment during your stay. Guest Rooms
        found with waste strewn around, in complete disorder, and/or “trashed”
        will be subject to maintenance deep cleaning fee, administration fee,
        and/or third-party fees. We will make every effort to rectify any
        damage internally prior to contracting a specialist to make the
        repairs, and therefore will make every effort to keep any costs that
        the guest would incur to a minimum. DAMAGE TO APARTMENT: Damage to
        apartments, fixtures, furnishing, and equipment including the removal
        of electronic equipment, towels, artwork, kitchen equipment, etc. will
        be charged at 120% of full and new replacement value plus any shipping
        and handling charges. Any damage to the property, whether accidental
        or willful, is the responsibility of the registered guest for each
        particular room. In extreme cases, criminal charges will be pursued.
        Damage to mattresses and linen including; towels, mattress pads,
        sheets, bedspreads, blankets resulting from the use of body oils,
        make-up, and shoe polish, etc. will result in a charge for the special
        cleaning, repair, or replacement of the damaged article.
      </p>
    ),
  },
  {
    number: 16,
    title: "Lost & Found Policy",
    icon: FiSearch,
    content: (
      <p>
        Aafiya Lakeview Apartments assumes no liability for lost, misplaced,
        stolen, or damaged valuables or belongings. If you discover that you
        have left behind something of value to you, please contact us
        immediately and we will try to assist you in locating your lost item.
        Aafiya Lakeview Apartments is not responsible for any item left behind
        by a guest. However, any item, with the exception of perishable items,
        left behind by our guests and found after departure by Housekeeping
        will be collected and kept in a secure location for collection by the
        owner for up to fourteen (14) days. Reasonable effort will be made to
        notify the guest that an item has been found. Perishable items,
        underwear, and miscellaneous toiletries are discarded. Returning lost
        items has additional costs which depend on the charges of the mailing
        service. If the guest’s contact information is incorrect or the
        mailbox is full and we are unable to contact the guest during the
        fourteen (14) day holding period, the unclaimed item(s) are thrown
        away, given to local organizations, or disposed of accordingly by
        Aafiya Lakeview Apartments
      </p>
    ),
  },
  {
    number: 17,
    title: "Right To Refuse Service",
    icon: FiShield,
    content: (
      <p>
        Aafiya Lakeview Apartments has a zero-tolerance policy in which we
        will refuse to admit or refuse service or accommodation in our
        apartments or may remove a person, without refund, who refuses to
        abide by the reasonable standards and policies established by the
        Government of India and the owners for the operation and management
        of the apartments. Aafiya Lakeview Apartments will refuse service or
        evict a guest: for refusal or failure to pay for accommodations, is
        under the influence of alcohol, drugs, or any other intoxicating
        substance and acts in a disorderly fashion as to disturb the peace of
        other guests or is not in compliance with government laws; acts in a
        disorderly fashion as to disturb the peace of other guests; is unable
        to properly supervise their children or pets at all times, seeks to
        use the apartment for an unlawful purpose; seeks to bring into the
        apartment: an unlawfully possessed firearm; or something, including
        an explosive or hazardous or toxic substance, that is unlawful to
        possess and that may be dangerous to other persons; destroys, damages,
        defaces, or threatens harm to apartment property or guests; causes or
        permits persons to exceed the maximum allowable occupancy of
        apartments, refuses to abide by the reasonable standards or policies
        established by Aafiya Lakeview Apartments for the operation and
        management of our apartments.
      </p>
    ),
  },
  {
    number: 18,
    title: "Cancellation",
    icon: FiXCircle,
    content: (
      <p>
        Aafiya Lakeview Apartments is not responsible for weather conditions,
        personal emergencies, or schedule changes. In case of direct bookings:
        Free cancellation 14 days before check-in. After that, guests can
        cancel up to 7 days before check-in and get a 50% refund of the nightly
        rate, and the cleaning fee. If the guest cancels less than 7 days in
        advance or decides to leave early after check-in, the nights not spent
        are not refunded. Booking coming from an OTA: Please check your
        cancellation policy on the platform of the OTA (e.g. Airbnb,
        Booking.com,AGODA ,MAKEMY TRIP, ETC) or contact our staff.
      </p>
    ),
  },
  {
    number: 19,
    title: "Changes Or Modifications To The Apartment Policy/house Rules",
    icon: FiFileText,
    content: (
      <p>
        Aafiya Lakeview Apartments Reserves the right to amend, modify, change,
        cancel, vary or add to these Apartment Policies/House Rules or the
        arrangements and content featured on our website at any time without
        prior notice. Please check our website regularly for updates to
        Apartment Policy/House Rules. Any modification to these Hotel
        Policy/House Rules that occurs before your departure is considered a
        part of your reservations agreement with us.
      </p>
    ),
  },
  {
    number: 20,
    title: "Terms & Conditions",
    icon: FiFileText,
    content: (
      <p>
        Aafiya Lakeview Apartments makes its best efforts to ensure that all
        the information that appears on its website is accurate. However, no
        warranty, expressed or implied, is given that the information provided
        on this website is error-free. All Seasons Inn & Suites does not
        accept liability for any errors and/or omissions and reserves the
        right to change the information published at any time and without
        notice.
      </p>
    ),
  },
];

function RulesSectionHeading() {
  return (
    <div className="rules-section-heading">
      <span>Rules &amp; Regulations</span>
      <h2>Aafiya Lakeview Aparments</h2>
      <img
        src="/assets/img/underline.png"
        alt="underline"
        className="rules-underline"
      />
    </div>
  );
}

function RulesRegulations() {
  return (
    <main className="rules-page">
      {/* Page Title */}
      <section className="rules-page-banner">
        <div className="rules-container">
          <div className="rules-page-title-content">
            <span className="rules-page-eyebrow">
              AAFIYA LAKEVIEW APARTMENTS
            </span>

            <h1>Rules &amp; Regulations | Aafiya Lakeview Apartments</h1>

            <nav className="rules-breadcrumb" aria-label="Breadcrumb">
              <Link to="/">
                <FiHome />
                <span>Home</span>
              </Link>

              <FiChevronRight />

              <span>Rules &amp; Regulations</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Rules & Regulations */}
      <section className="rules-content-section">
        <div className="rules-container">
          <RulesSectionHeading />

          <div className="rules-list">
            {rules.map((rule) => {
              const RuleIcon = rule.icon;

              return (
                <article
                  className="rules-card"
                  key={rule.number}
                  id={`rule-${rule.number}`}
                >
                  <div className="rules-card-icon" aria-hidden="true">
                    <RuleIcon />
                  </div>

                  <div className="rules-card-content">
                    <div className="rules-card-title">
                      <span className="rules-number">
                        {String(rule.number).padStart(2, "0")}
                      </span>

                      <h2>
                        {rule.number}. {rule.title}
                      </h2>
                    </div>

                    {rule.content && (
                      <div className="rules-card-description">
                        {rule.content}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default RulesRegulations;
