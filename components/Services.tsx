'use client';

import React from 'react';
import SectionHeading from './Section-heading';
import { projectsData, servicesData } from '@/lib/data';
import Project from './Project';
import { useSectionInView } from '@/lib/hooks';
import Service from './Service';

export default function Services() {
  // const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section
      // ref={ref}
      id="projects"
      className="z-10 scroll-mt-28 mb-28"
    >
      <SectionHeading>WHY WORK WITH A SOCIAL MEDIA MANAGER</SectionHeading>
      <div className="relative">
        {servicesData.map((service, index) => (
          <React.Fragment key={index}>
            <Service {...service} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
