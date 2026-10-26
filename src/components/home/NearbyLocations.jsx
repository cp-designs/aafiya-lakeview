
import {
  FiMapPin,
  FiNavigation,
  FiArrowUpRight,
  FiActivity,
  FiTruck,
  FiShoppingBag,
  FiCreditCard,
  FiHeart,
  FiCompass,
  FiMap,
} from "react-icons/fi";

const nearbyLocations = [
  {
    id: 1,
    name: "Race Course",
    distance: "50 meters",
    icon: FiActivity,
    category: "Leisure & Recreation",
    modal: "staticBackdrop",
  },
  {
    id: 2,
    name: "Trichy Road",
    distance: "50 meters",
    icon: FiNavigation,
    category: "Main Road",
    modal: "staticBackdrop-2",
  },
  {
    id: 3,
    name: "Railway Station",
    distance: "200 meters",
    icon: FiTruck,
    category: "Transport",
    modal: "staticBackdrop-3",
  },
  {
    id: 4,
    name: "GH Hospital",
    distance: "100 meters",
    icon: FiHeart,
    category: "Healthcare",
    modal: "staticBackdrop-4",
  },
  {
    id: 5,
    name: "KG Hospital",
    distance: "200 meters",
    icon: FiActivity,
    category: "Healthcare",
    modal: "staticBackdrop-5",
  },
  {
    id: 6,
    name: "Shops & Restaurants",
    distance: "50 meters",
    icon: FiShoppingBag,
    category: "Shopping & Dining",
    modal: "staticBackdrop-6",
  },
  {
    id: 7,
    name: "Banks & ATMs",
    distance: "50 meters",
    icon: FiCreditCard,
    category: "Everyday Essentials",
    modal: "staticBackdrop-7",
  },
  {
    id: 8,
    name: "Ganga Hospital",
    distance: "(5.6 km) 15 min",
    icon: FiHeart,
    category: "Healthcare",
    modal: "staticBackdrop-8",
  },
  {
    id: 9,
    name: "Ramakrishna Hospital",
    distance: "4.2 km 11 min",
    icon: FiActivity,
    category: "Healthcare",
    modal: "staticBackdrop-9",
  },
  {
    id: 10,
    name: "Isha yoga",
    distance: "30km 1hr",
    icon: FiCompass,
    category: "Spiritual Destination",
    modal: "staticBackdrop-10",
  },
];

function NearbyLocations() {
  return (
    <section
      className="bokking-area aafiya-nearby-section"
      id="booking-page"
    >
      <div className="container">
        <div className="aafiya-nearby-heading">
          <span className="aafiya-nearby-eyebrow">
            EXPLORE THE NEIGHBOURHOOD
          </span>

          <h2>
            Everything You Need,
            <span> Just Around the Corner</span>
          </h2>

          <p>
            Discover convenient access to healthcare, transport, shopping
            and leisure when you stay at Aafiya Lakeview.
          </p>

          <img
            src="/assets/img/underline.png"
            alt=""
            className="aafiya-nearby-underline"
          />
        </div>

        <div className="row aafiya-nearby-grid">
          {nearbyLocations.map((location, index) => {
            const LocationIcon = location.icon;

            return (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12"
                key={location.id}
              >
                <article className="aafiya-nearby-card">
                  <div className="aafiya-nearby-card-top">
                    <span className="aafiya-nearby-icon">
                      <LocationIcon aria-hidden="true" />
                    </span>

                    <span className="aafiya-nearby-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <span className="aafiya-nearby-category">
                    {location.category}
                  </span>

                  <h3>{location.name}</h3>

                  <div className="aafiya-nearby-distance">
                    <FiMapPin aria-hidden="true" />
                    <span>{location.distance}</span>
                  </div>

                  <a
                    href={`#${location.modal}`}
                    className="aafiya-nearby-link"
                    data-bs-toggle="modal"
                    data-bs-target={`#${location.modal}`}
                    aria-label={`View details for ${location.name}`}
                  >
                    <span>Explore location</span>
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                </article>
              </div>
            );
          })}
        </div>

        <div className="aafiya-nearby-footer">
          <span className="aafiya-nearby-footer-icon">
            <FiMap aria-hidden="true" />
          </span>

          <p>
            Stay connected to the places that matter during your visit
            to Coimbatore.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NearbyLocations;
