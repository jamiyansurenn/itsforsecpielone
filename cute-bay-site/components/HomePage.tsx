"use client";

import { FloatingBlobs } from "@/components/FloatingBlobs";
import { MusicToggle } from "@/components/MusicToggle";
import { SiteNav } from "@/components/SiteNav";
import { SparkleField } from "@/components/SparkleField";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";

export function HomePage() {
  return (
    <>
      <FloatingBlobs />
      <SparkleField />
      <SiteNav />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <HighlightsSection />
        <ContactSection />
      </main>
      <MusicToggle />
    </>
  );
}
