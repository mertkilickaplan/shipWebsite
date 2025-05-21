import React, { Suspense, lazy } from "react";
import "./App.css";
import CookieBanner from "./CookieBanner";

const HeroSection = lazy(() => import("./HeroSection"));
const ValueSection = lazy(() => import("./ValueSection"));
const WaitlistSection = lazy(() => import("./WaitlistSection"));
const WhyShipSection = lazy(() => import("./WhyShipSection"));
const StepsSection = lazy(() => import("./StepsSection"));
const SocialSection = lazy(() => import("./SocialSection"));
const MarqueeSection = lazy(() => import("./MarqueeSection"));
const PremiumSection = lazy(() => import("./PremiumSection"));
const ContactSection = lazy(() => import("./ContactSection"));

function App() {
  return (
    <>
      <CookieBanner />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <ValueSection />
          <WaitlistSection />
          <WhyShipSection />
          <StepsSection />
          <SocialSection />
          <MarqueeSection />
          <PremiumSection />
          <ContactSection />
        </Suspense>
      </main>
    </>
  );
}

export default App;
