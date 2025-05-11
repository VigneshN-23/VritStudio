import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const slideLeftVariants = {
  enter: { x: '100%', opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: '-100%', opacity: 0, transition: { duration: 0.3 } }
};

const slideRightVariants = {
  enter: { x: '-100%', opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } }
};

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

export function ProjectsCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on load
    checkIsMobile();

    // Check on resize
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleDotClick = (index) => {
    const newDirection = index > activeIndex ? 1 : -1;
    setDirection(newDirection);
    setActiveIndex(index);
  };

  // Add navigation controls
  const navigateCarousel = (newDirection) => {
    const newIndex = newDirection === 'next'
      ? (activeIndex === projects.length - 1 ? 0 : activeIndex + 1)
      : (activeIndex === 0 ? projects.length - 1 : activeIndex - 1);

    setDirection(newDirection === 'next' ? 1 : -1);
    setActiveIndex(newIndex);
  };

  // Determine which animation variant to use
  const getVariants = () => {
    if (direction === 0) return fadeVariants;
    return direction > 0 ? slideLeftVariants : slideRightVariants;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="featured-projects">
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-baseline mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-display font-semibold mb-4 md:mb-0">
            Featured Projects
          </h2>
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/projects" className="text-gray-900 hover:text-gray-700 font-medium flex items-center">
              View all projects
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative">
          {/* Navigation arrows */}
          <motion.button 
            className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hidden md:block"
            onClick={() => navigateCarousel('prev')}
            aria-label="Previous slide"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button 
            className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hidden md:block"
            onClick={() => navigateCarousel('next')}
            aria-label="Next slide"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <motion.div 
            className="overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                variants={getVariants()}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <motion.div 
                    className="aspect-[16/9] overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.img 
                      src={projects[activeIndex].image} 
                      alt={projects[activeIndex].title} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  <div className="p-6 md:p-8">
                    <motion.div 
                      className="text-sm text-gray-500 mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {projects[activeIndex].category}
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-display font-medium mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {projects[activeIndex].title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {projects[activeIndex].description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      whileHover={{ x: 5 }}
                    >
                      <Link 
                        to={`/projects#${projects[activeIndex].id}`} 
                        className="text-black font-medium inline-flex items-center hover:underline"
                      >
                        View Project
                        <motion.svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 ml-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div 
            className="flex justify-center mt-8 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {projects.map((_, index) => (
              <motion.button 
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-black' : 'bg-gray-300'}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </motion.div>

          {/* Mobile navigation buttons */}
          {isMobile && (
            <motion.div 
              className="flex justify-between mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button 
                className="bg-gray-100 hover:bg-gray-200 rounded-sm py-2 px-4 text-sm font-medium text-black"
                onClick={() => navigateCarousel('prev')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Previous
              </motion.button>
              <motion.button 
                className="bg-gray-100 hover:bg-gray-200 rounded-sm py-2 px-4 text-sm font-medium text-black"
                onClick={() => navigateCarousel('next')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}