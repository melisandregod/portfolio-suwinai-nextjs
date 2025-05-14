"use client";
import Experience from "@/components/sections/Experience/ExperienceSection";
import Contact from "@/components/sections/Contact/ContactSection";
import Hero from "@/components/sections/Hero/HeroSection";
import Projects from "@/components/sections/Projects/ProjectsSection";
import Skills from "@/components/sections/Skills/SkillsSection";
import ParticleBackground from "@/components/ParticleBackground";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";

export default function HomePage() {
  useEffect(() => {
    AOS.init(); // animation on scroll library
  }, []);
  return (
    <>
      <Toaster />
      <ParticleBackground />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
