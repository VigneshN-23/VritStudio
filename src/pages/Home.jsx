import { HeroSection } from '../components/HeroSection';
import { ProjectsCarousel } from '../components/ProjectsCarousel';
import { AboutSection } from '../components/AboutSection';
import { featuredProjects } from '../../data';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ProjectsCarousel projects={featuredProjects} />
      <AboutSection isHomepage={true} />
    </motion.div>
  );
}