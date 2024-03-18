import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';

import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import SectionDivider from '@/components/Section-divider';
import Skills from '@/components/Skills';
import SocialMedia from '@/components/SocialMedia';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 relative">
      <Intro />
      <SectionDivider />
      <SocialMedia />
      <Services />
      <About />
      <CallToAction />
      <Contact />
      <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
