import About from '@/components/about/About';
import Articles from '@/components/articles/Articles';
import Contact from '@/components/contact/Contact';
import Hero from '@/components/hero/Hero';
import ProjectsSection from '@/components/projects/ProjectsSection';
import Reviews from '@/components/review/Reviews';
import Techs from '@/components/techs/Techs';
import Projects2 from '@/components/projects/Projects2';
import Approach from '@/components/Approach/Approach';
import Contact2 from '@/components/contact/Contact2';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Approach />
      <Techs />
      <Projects2 /> 
      <Contact2 />
    </>
  );
}
