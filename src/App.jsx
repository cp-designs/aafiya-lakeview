
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";

import Hero from "./components/home/Hero";
import Rooms from "./components/home/Rooms";
import About from "./components/home/About";
import StayPurpose from "./components/home/StayPurpose";
import NearbyLocations from "./components/home/NearbyLocations";
import Testimonials from "./components/home/Testimonials";
import FAQ from "./components/home/FAQ";
import Footer from "./components/home/Footer";

import AboutPage from "./pages/About";
import Gallery from "./pages/Gallery";
import OneBHK from "./pages/OneBHK";
import TwoBHK from "./pages/TwoBHK";
import KingsTwoBHK from "./pages/KingsTwoBHK";
import RulesRegulations from "./pages/RulesRegulations";
import BlogPage from "./pages/Blog";
import Contact from "./pages/Contact";

// Blog detail pages
import ModernUrbanLife from "./pages/blog/ModernUrbanLife";
import PremiumApartments from "./pages/blog/PremiumApartments";
import SmartTravel2026 from "./pages/blog/SmartTravel2026";
import GrowingDemand2BHK from "./pages/blog/GrowingDemand2BHK";
import ChooseRightServiceApartment from "./pages/blog/ChooseRightServiceApartment";
import BusinessTravelServiceApartments from "./pages/blog/BusinessTravelServiceApartments";
import ComfortLivingStandard from "./pages/blog/ComfortLivingStandard";
import Affordable1BHKStudio from "./pages/blog/Affordable1BHKStudio";
import PerfectServiceApartmentChoice from "./pages/blog/PerfectServiceApartmentChoice";
import BenefitsOfServiceApartment from "./pages/blog/BenefitsOfServiceApartment";
import AafiyaLakeviewLifestyle from "./pages/blog/AafiyaLakeviewLifestyle";
import ServiceApartmentsVsHotels from "./pages/blog/ServiceApartmentsVsHotels";
import OneBHKComfortableUrbanLiving from "./pages/blog/OneBHKComfortableUrbanLiving";
import LuxuryApartmentCoimbatore from "./pages/blog/LuxuryApartmentCoimbatore";
import FullyFurnishedServiceApartment from "./pages/blog/FullyFurnishedServiceApartment";
import DiwaliDecorationIdeas from "./pages/blog/DiwaliDecorationIdeas";
import OneBHKFeaturesAdvantages from "./pages/blog/OneBHKFeaturesAdvantages";
import TwoBHKKingStudioApartments from "./pages/blog/TwoBHKKingStudioApartments";
import TwoBHKStudioUrbanFamilies from "./pages/blog/TwoBHKStudioUrbanFamilies";
import SmartLivingBenefits2BHKKingStudio from "./pages/blog/SmartLivingBenefits2BHKKingStudio";
import ServiceApartmentsBusinessFamily from "./pages/blog/ServiceApartmentsBusinessFamily";
import TermsConditions from "./pages/TermsConditions";


import "./styles/Home.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className="aafiya-main-content">
        <Hero />
        <Rooms />
        <About />
        <StayPurpose />
        <NearbyLocations />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function AboutRoutePage() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}

function GalleryRoutePage() {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

function OneBHKRoutePage() {
  return (
    <>
      <Header />
      <OneBHK />
      <Footer />
    </>
  );
}

function TwoBHKRoutePage() {
  return (
    <>
      <Header />
      <TwoBHK />
      <Footer />
    </>
  );
}

function KingsTwoBHKRoutePage() {
  return (
    <>
      <Header />
      <KingsTwoBHK />
      <Footer />
    </>
  );
}

function RulesRegulationsRoutePage() {
  return (
    <>
      <Header />
      <RulesRegulations />
      <Footer />
    </>
  );
}

function BlogRoutePage() {
  return (
    <>
      <Header />
      <BlogPage />
      <Footer />
    </>
  );
}

function BlogDetailRoutePage({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function ContactRoutePage() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Existing pages */}
        <Route path="/about-us" element={<AboutRoutePage />} />
        <Route path="/service-apartment-gallery" element={<GalleryRoutePage />} />

        <Route
          path="/1bhk-mini-studio-apartment-coimbatore"
          element={<OneBHKRoutePage />}
        />

        <Route
          path="/2bhk-mini-studio-apartment-coimbatore"
          element={<TwoBHKRoutePage />}
        />

        <Route
          path="/2bhk-kings-studio-apartment-coimbatore"
          element={<KingsTwoBHKRoutePage />}
        />

        <Route
          path="/rules-regulations"
          element={<RulesRegulationsRoutePage />}
        />

        {/* Blog listing */}
        <Route
          path="/service-apartment-blog"
          element={<BlogRoutePage />}
        />

        {/* Blog detail pages */}
        <Route
          path="/modern-urban-life-studio-apartments"
          element={
            <BlogDetailRoutePage>
              <ModernUrbanLife />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/premium-apartments-in-coimbatore"
          element={
            <BlogDetailRoutePage>
              <PremiumApartments />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/smart-travel-2026-cost-effective-stay-coimbatore"
          element={
            <BlogDetailRoutePage>
              <SmartTravel2026 />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/growing-demand-2bhk-service-apartments-coimbatore"
          element={
            <BlogDetailRoutePage>
              <GrowingDemand2BHK />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/choose-right-service-apartment-coimbatore"
          element={
            <BlogDetailRoutePage>
              <ChooseRightServiceApartment />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/business-travel-service-apartments-coimbatore"
          element={
            <BlogDetailRoutePage>
              <BusinessTravelServiceApartments />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/comfort-living-standard-service-apartments-coimbatore"
          element={
            <BlogDetailRoutePage>
              <ComfortLivingStandard />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/affordable-1bhk-studio-apartment-for-rent-in-coimbatore"
          element={
            <BlogDetailRoutePage>
              <Affordable1BHKStudio />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/comfortable-service-apartment-coimbatore"
          element={
            <BlogDetailRoutePage>
              <PerfectServiceApartmentChoice />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/benefits-of-service-apartments-for-your-stay"
          element={
            <BlogDetailRoutePage>
              <BenefitsOfServiceApartment />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/aafiya-lakeview-lifestyle-amenities-coimbatore"
          element={
            <BlogDetailRoutePage>
              <AafiyaLakeviewLifestyle />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/service-apartments-vs-hotels-long-stays-coimbatore"
          element={
            <BlogDetailRoutePage>
              <ServiceApartmentsVsHotels />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/1-bhk-apartments-smart-urban-living-choice"
          element={
            <BlogDetailRoutePage>
              <OneBHKComfortableUrbanLiving />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/living-luxury-apartments-coimbatore"
          element={
            <BlogDetailRoutePage>
              <LuxuryApartmentCoimbatore />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/benefits-of-fully-furnished-service-apartment"
          element={
            <BlogDetailRoutePage>
              <FullyFurnishedServiceApartment />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/diwali-decoration-ideas-for-apartments"
          element={
            <BlogDetailRoutePage>
              <DiwaliDecorationIdeas />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/1-bhk-apartments-features-and-advantages"
          element={
            <BlogDetailRoutePage>
              <OneBHKFeaturesAdvantages />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/2-bhk-king-studio-apartments-smart-comfort-style"
          element={
            <BlogDetailRoutePage>
              <TwoBHKKingStudioApartments />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/2bhk-studio-homes-for-urban-families"
          element={
            <BlogDetailRoutePage>
              <TwoBHKStudioUrbanFamilies />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/smart-living-benefits-2bhk-king-studio-apartment"
          element={
            <BlogDetailRoutePage>
              <SmartLivingBenefits2BHKKingStudio />
            </BlogDetailRoutePage>
          }
        />

        <Route
          path="/service-apartments-ideal-business-family-travel"
          element={
            <BlogDetailRoutePage>
              <ServiceApartmentsBusinessFamily />
            </BlogDetailRoutePage>
          }
        />
        <Route path="/contact-us" element={<ContactRoutePage />} />
        <Route
        path="/terms-and-conditions"
        element={
          <BlogDetailRoutePage>
            <TermsConditions />
          </BlogDetailRoutePage>
        }
      />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
