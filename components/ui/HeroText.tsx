'use client';

import { motion } from 'framer-motion';

const HeroText = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="pt-48"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h1
        className="h1-bold flex flex-col items-start md:items-center"
        variants={container}
      >
        <motion.span variants={child}>Crafting</motion.span>
        <motion.span variants={child}>memorable user &</motion.span>
        <motion.span variants={child}>developer experiences</motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default HeroText;
