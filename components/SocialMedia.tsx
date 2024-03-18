'use client';

import React from 'react';
import SectionHeading from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function SocialMedia() {
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
      <SectionHeading>Social Media Marketing Overview</SectionHeading>
      <p className="mb-3">
        Social media has become an indispensable tool for small businesses
        seeking to establish a strong online presence, engage with their
        audience, and drive business growth.
      </p>
      <p className="mb-3">
        Compared to traditional advertising channels, social media marketing
        offers a cost-effective way for small businesses to promote their
        products or services. With minimal investment, businesses can create and
        share engaging content, run targeted advertising campaigns, and reach
        thousands of potential customers without breaking the bank.
      </p>
      <p className="mb-3">
        Social media enables businesses to engage directly with their audience
        in real-time, fostering meaningful relationships and building brand
        loyalty. By responding to comments, messages, and reviews promptly,
        businesses can demonstrate their commitment to customer satisfaction and
        create a positive brand image. Social media platforms offer advanced
        targeting options that allow businesses to reach specific demographics,
        interests, and behaviors. This precision targeting ensures that
        marketing efforts are directed towards the most relevant audience,
        increasing the likelihood of engagement, conversions, and return on
        investment (ROI).
      </p>
      <p className="mb-3">
        Maintaining a strong presence on social media helps small businesses
        build brand awareness and credibility. By sharing valuable content,
        showcasing their products or services, and engaging with their audience
        consistently, businesses can establish themselves as industry leaders
        and trusted authorities in their respective niches.
      </p>
    </motion.section>
  );
}
