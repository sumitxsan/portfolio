import { motion } from 'framer-motion';
import { ComponentType } from 'react';

import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

// Define a generic HOC type for components with any props
const StarWrapper = <P extends object>(Component: ComponentType<P>, idName: string) => {
  const HOC = (props: P) => {
    return (
      <motion.section
        variants={staggerContainer(0.2, 0)} // You can pass your stagger values here
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

  return HOC;
};

export default StarWrapper;
