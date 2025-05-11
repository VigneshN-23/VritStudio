import { useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function ProjectsCarousel({ projects }) {
  const carouselRef = useRef(null);
  const innerRef = useRef(null);
  const [maxDrag, setMaxDrag] = useState(0);

  useLayoutEffect(() => {
    const updateDragWidth = () => {
      if (carouselRef.current && innerRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const scrollWidth = innerRef.current.scrollWidth;
        setMaxDrag(scrollWidth - containerWidth);
      }
    };

    updateDragWidth();
    window.addEventListener('resize', updateDragWidth);
    return () => window.removeEventListener('resize', updateDragWidth);
  }, [projects]);

  return (
    <section className="py-16 md:py-24 bg-dark-bg" id="featured-projects">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-display font-semibold mb-8 text-dark-text">
          Some Works
        </h2>

        <div
          ref={carouselRef}
          className="overflow-hidden"
        >
          <motion.div
            ref={innerRef}
            className="flex gap-4 cursor-grab"
            drag="x"
            dragConstraints={{ left: -maxDrag, right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-[90%] sm:w-[45%] md:w-[30%] aspect-square flex-shrink-0 rounded-lg overflow-hidden shadow-md bg-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
