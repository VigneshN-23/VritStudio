import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Animation variants
const containerVariants = {
  initial: { opacity: 0 },
  in: { 
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6
    }
  },
  out: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const childVariants = {
  initial: { y: 20, opacity: 0 },
  in: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export default function NotFound() {
  return (
    <motion.section 
      className="py-24 md:py-32"
      initial="initial"
      animate="in"
      exit="out"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h1 
          className="text-6xl font-display font-bold mb-6"
          variants={childVariants}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-2xl font-medium mb-8"
          variants={childVariants}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-gray-600 mb-8 max-w-md mx-auto"
          variants={childVariants}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div variants={childVariants}>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}