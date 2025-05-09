"use client";
import Experience from "@/components/sections/Experience/ExperienceSection";
import Contact from "@/components/sections/Contact/ContactSection";
import Hero from "@/components/sections/Hero/HeroSection";
import Projects from "@/components/sections/Projects/ProjectsSection";
import Skills from "@/components/sections/Skills/SkillsSection";
import ParticleBackground from "@/components/ParticleBackground";

export default function HomePage() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
