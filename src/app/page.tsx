import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import Faqs from "./faqs";
import Testimonials from "./testimonials";
import Pricing from "./pricing";
import Footer from "./footer";
import Cta from "./cta";
import Features from "./features";
import HeroSection from "./hero-section";
import Navbar from "./navbar";
import FeatureSection from "./features-v2";
import FAQSection from "./faqs-v2";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        {/* <Testimonials /> */}
        <Pricing />
        <FAQSection />
        <Cta />
        <Footer />
      </div>
    </main>
  );
}
