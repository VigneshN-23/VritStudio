import { ContactSection } from '../components/ContactSection';
import { motion } from 'framer-motion';

// Page transition animation
const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function Contact() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <ContactSection />
    </motion.div>
  );
}