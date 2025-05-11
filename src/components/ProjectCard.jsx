import { motion } from 'framer-motion';

// Staggered animation variants for content
const contentVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export function ProjectCard({ project, index }) {
  return (
    <div id={project.id}>
      <motion.a 
        href={`#${project.id}`} 
        className="block group"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="aspect-[4/3] rounded-lg overflow-hidden mb-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div 
          className="text-sm text-gray-500 mb-1"
          variants={contentVariants}
          transition={{ delay: 0.1 }}
        >
          {project.category}
        </motion.div>
        <motion.h3 
          className="text-xl font-display font-medium mb-2"
          variants={contentVariants}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          variants={contentVariants}
          transition={{ delay: 0.3 }}
        >
          {project.shortDescription}
        </motion.p>
      </motion.a>
    </div>
  );
}