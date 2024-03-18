'use client';

import React from 'react';
import SectionHeading from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Since 2006, my career has been immersed in the vibrant world of
        marketing. It all began with a groundbreaking opportunity to work
        alongside a Celebrity Lasik Eye surgeon in Silicon Valley, where I
        consistently exceeded goals and resonated with our target market month
        after month.
      </p>
      <p className="mb-3">
        After absorbing invaluable insights into marketing strategies, I
        transitioned into freelancing, embarking on a journey that has seen me
        collaborate with over 200 brands and services. Over the past decade,
        I've been fortunate to partner with a diverse range of enterprises
        spanning various industries, including technology, healthcare, finance,
        automotive, consumer electronics, hospitality, and consumer goods.
      </p>
      <p className="mb-3">
        My experiences include projects with Fortune 500 companies such as
        Google, Samsung, Microsoft, Airbnb, American Express, and Nike. Despite
        these noteworthy collaborations, I found my true calling in working with
        small businesses. Here, I've discovered that my contributions have a
        profound impact on marketing efforts, driving tangible results and
        fueling growth in these dynamic and evolving ventures.
      </p>
    </motion.section>
  );
}
