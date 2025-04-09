'use client'
import About from '@/components/sections/About/AboutSection';
import Contact from '@/components/sections/Contact/ContactSection';
import Hero from '@/components/sections/Hero/HeroSection';
import Projects from '@/components/sections/Projects/ProjectsSection';
import Skills from '@/components/sections/Skills/SkillsSection';
 
export default function HomePage() {
  return (
    <>
    <Hero/>
    <Skills/>
    <Projects/>
    <About/>
    <Contact/>
    </>
  );
}