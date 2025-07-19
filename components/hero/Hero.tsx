import { cn } from '@/lib/utils';
import AnimatedGradientText from '../ui/animated-gradient-text';
import AnimatedGridPattern from '../ui/animated-grid-pattern';
import Link from 'next/link';
import HeroText from '../ui/HeroText';
import ScrollRevealSection from '../ui/ScrollRevealSection';

const Hero = () => {
  return (
    <section className="relative px-6 pb-44" style={{ contain: 'layout' }}>
      <HeroText />

      <ScrollRevealSection />

      <div className="pointer-events-none absolute top-0 -z-20 size-full overflow-hidden opacity-50 [mask-image:radial-gradient(900px_circle_at_top,#000,transparent)]">
        <AnimatedGridPattern
          numSquares={120}
          maxOpacity={0.2}
          duration={5}
          repeatDelay={1}
          colors={[
            'rgba(60, 177, 121, 1)',
            'rgba(157, 91, 210, 1)',
            'rgba(205, 43, 49, 1)',
            'rgba(189, 75, 0, 1)',
            'rgba(247, 206, 0, 1)',
            'rgba(250, 147, 78, 1)',
            'rgba(54, 158, 255, 1)',
          ]}
          className="inset-x-[4.5px] inset-y-[-30%] h-[150%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(#000_50%,transparent)]">
        <div className="grid-pattern pointer-events-none absolute inset-0" />
      </div>
    </section>
  );
};
export default Hero;
