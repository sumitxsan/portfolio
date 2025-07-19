'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import AnimatedGradientText from '../ui/animated-gradient-text'; // Adjust as needed

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const ScrollRevealSection = () => {
  return (
    <motion.div
      className="mt-12 flex flex-col-reverse gap-8 md:flex-row md:justify-center md:gap-20 lg:gap-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Column */}
      <motion.div
        className="flex w-fit flex-col items-start gap-4"
        variants={itemVariants}
      >
        <p className="font-Silkscreen font-normal uppercase text-gray-400 md:mt-8 md:text-2xl">
          adel.g · software engineer
        </p>
        <div>
          <Link
            href="https://www.linkedin.com/in/adelguitoun/"
            target="_blank"
          >
            <AnimatedGradientText className="rounded-full px-5 py-2 text-lg hover:cursor-pointer">
              🤝 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-400" />
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Start a collaboration
              </span>
            </AnimatedGradientText>
          </Link>
        </div>
      </motion.div>

      {/* Right Column - Philosophy Badges */}
      <motion.div
        className="flex flex-wrap gap-2 md:flex-col"
        variants={containerVariants}
      >
        {[
          { text: 'Building...', className: 'text-gray-400' },
          { text: 'Well designed', bg: 'bg-celtic', textColor: 'text-oceangreen' },
          { text: 'well architected', bg: 'bg-downriver', textColor: 'text-dodgerblue' },
          { text: 'and scalable', bg: 'bg-antiquebronze', textColor: 'text-foreground' },
          { text: 'web apps', bg: 'bg-revolver', textColor: 'text-violet-400/85' },
        ].map((item, i) => (
          <motion.p
            key={i}
            className={cn(
              'w-fit rounded-md px-2 font-Silkscreen text-[18px] font-normal uppercase',
              item.bg || '',
              item.className || ''
            )}
            variants={itemVariants}
          >
            <span className={cn(item.textColor || '')}>{item.text}</span>
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ScrollRevealSection ;
