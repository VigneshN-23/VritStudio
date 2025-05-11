import { Link } from 'react-router-dom';
import { hero } from '../../data';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold leading-tight tracking-tight mb-6">
              {hero.heading}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {hero.subheading}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={hero.ctaLink} className="btn btn-primary">
                {hero.cta}
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative rounded-lg overflow-hidden aspect-[4/3] shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <motion.img 
                src={hero.image} 
                alt="Hero image" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-16">
          <motion.a 
            href="#featured-projects"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  );
}