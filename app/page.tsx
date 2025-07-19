import About from '@/components/about/About';
import Articles from '@/components/articles/Articles';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Reviews from '@/components/review/Reviews';
import Techs from '@/components/techs/Techs';
import Projects2 from '@/components/projects/Projects2';
import Approach from '@/components/Approach/Approach';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Techs />
      <Projects2 /> 
      <Approach />
      <Contact />
    </>
  );
}
