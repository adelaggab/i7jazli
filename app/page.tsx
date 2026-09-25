import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import ServicesGrid from "@/components/services-grid";
import AppFeatures from "@/components/app-features";
import BookingWalkthrough from "@/components/booking-walkthrough";
import Testimonials from "@/components/testimonials";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500 selection:text-white flex flex-col justify-between">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. How the service works */}
        <HowItWorks />

        {/* 3. Services */}
        <ServicesGrid />

        {/* 4. App features (with provider dashboard card) */}
        <AppFeatures />

        {/* 5. How the customer books */}
        <BookingWalkthrough />

        {/* 6. Testimonials & trust numbers */}
        <Testimonials />

        {/* 7. Final CTA */}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
