import { useEffect, useRef, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';

// Fade in animation variant
export const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Stagger children animation variant
export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Scale up animation variant
export const scaleVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Slide in animation variant
export const slideInVariant = (direction = "left") => {
  const x = direction === "left" ? -50 : direction === "right" ? 50 : 0;
  const y = direction === "up" ? 50 : direction === "down" ? -50 : 0;
  
  return {
    hidden: { opacity: 0, x, y },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
};

// Custom hook for animated sections on scroll
export function useScrollAnimation(threshold = 0.2) {
  const controls = useAnimation();
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold, rootMargin: '0px' }
    );
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, threshold, isInView]);
  
  return { ref, controls, isInView };
}

// Motion components for common elements
export const MotionHeading = ({ children, delay = 0, className }) => {
  return (
    <motion.h2
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.h2>
  );
};

export const MotionParagraph = ({ children, delay = 0, className }) => {
  return (
    <motion.p
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export const MotionImage = ({ src, alt, className }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      variants={scaleVariant}
      initial="hidden"
      animate="visible"
      className={className}
    />
  );
};

export const MotionContainer = ({ children, variant = "default", className }) => {
  const variants = 
    variant === "stagger" ? staggerContainerVariant : 
    variant === "scale" ? scaleVariant : 
    fadeInVariant;
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const MotionButton = ({ children, className, onClick }) => {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};