"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });
const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const Navigation = dynamic(() => import("./Navigation"), { ssr: false });
const Hero = dynamic(() => import("./Hero"), { ssr: false });
const Marquee = dynamic(() => import("./Marquee"), { ssr: false });
const Services = dynamic(() => import("./Services"), { ssr: false });
const Diagnostic = dynamic(() => import("./Diagnostic"), { ssr: false });
const Proof = dynamic(() => import("./Proof"), { ssr: false });
const Story = dynamic(() => import("./Story"), { ssr: false });
const Visit = dynamic(() => import("./Visit"), { ssr: false });
const Footer = dynamic(() => import("./Footer"), { ssr: false });

export default function ClientLayout() {
  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Diagnostic />
        <Proof />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
