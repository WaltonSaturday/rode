'use client';

import React from 'react';
import SectionHeading from './Section-heading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="z-10 scroll-mt-28 mb-28"
    >
      <SectionHeading>Current project</SectionHeading>
      <div className="relative">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
