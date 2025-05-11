import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function ProjectsGrid({ projects, limit, showViewAll = false }) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Get unique categories
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // If limit is provided, only show that number of projects
  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <div>
      {!limit && (
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-black'
                }`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
      
      <AnimatePresence mode="wait">
        {displayProjects.length === 0 ? (
          <motion.div 
            className="text-center py-12 text-gray-500"
            key="no-projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            No projects found in this category.
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={activeFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {showViewAll && projects.length > limit && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects" className="btn btn-secondary">
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}