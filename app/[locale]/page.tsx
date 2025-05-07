'use client'
import Experience from '@/components/sections/Experience/ExperienceSection';
import Contact from '@/components/sections/Contact/ContactSection';
import Hero from '@/components/sections/Hero/HeroSection';
import Projects from '@/components/sections/Projects/ProjectsSection';
import Skills from '@/components/sections/Skills/SkillsSection';
 
export default function HomePage() {
  return (
    <div className="mt-30">
    <Hero/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    </div>
  );
}