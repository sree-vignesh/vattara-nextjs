// import Image from "next/image";

import FeaturesSection from "./components/Home/FeaturesSection";
import Hero from "./components/Home/Hero";
import VerifiedPropertiesSection from "./components/Home/VerifiedPropertiesSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen ">
        <Hero />
      </section>

      {/* <hr className="border-gray-300" /> */}

      {/* Features Section */}
      <section className="min-h-screen flex items-center justify-center">
        <FeaturesSection />
      </section>

      <hr className="border-gray-300" />

      {/* Verified Properties Section */}
      <section className="min-h-screen flex items-center justify-center">
        <VerifiedPropertiesSection />
      </section>

      <hr className="border-gray-300" />
    </main>
  );
}
