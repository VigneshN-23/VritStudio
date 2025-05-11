import { useEffect } from "react";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { projects } from "../../data";
import { motion } from "framer-motion";

// Page transition animation
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Heading animation variants
const headingVariants = {
  initial: { opacity: 0, y: 20 },
  in: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export default function Projects() {
  // Scroll to project if there's a hash in the URL
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 600); // Wait for animation to complete
      }
    }
  }, []);

  return (
    <motion.section
      className="py-16 md:py-24"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-display font-semibold mb-16"
          variants={headingVariants}
        >
          Projects
        </motion.h2>
        <ProjectsGrid projects={projects} />
      </div>
    </motion.section>
  );
}
