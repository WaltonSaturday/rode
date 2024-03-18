'use client';

import React from 'react';
import SectionHeading from './Section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { FaPhone, FaPhoneFlip, FaRocketchat, FaStar } from 'react-icons/fa6';

export default function About() {
  // const { ref } = useSectionInView('About');

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>LETS WORK TOGETHER</SectionHeading>
      <p className="mb-3">
        Are you ready to take your business to new heights? Whether you're
        looking to increase brand visibility, drive more traffic to your
        website, or engage with your audience on a deeper level, I'm here to
        help you achieve your goals.
      </p>
      <div className="flex items-center justify-center p-6">
        <span className="text-3xl px-2">
          <FaStar />
        </span>
        <h2 className="text-xl font-semibold">Why Choose Me?</h2>
        <span className="text-3xl px-2">
          <FaStar />
        </span>
      </div>

      <p className="mb-3">
        With years of experience in the world of marketing, I bring a wealth of
        knowledge, creativity, and passion to every project. From developing
        tailored strategies to executing impactful campaigns, I'm committed to
        delivering results that exceed your expectations.
      </p>
      <div className="flex items-center justify-center p-6">
        <span className="text-3xl px-2">
          <FaRocketchat />
        </span>
        <h2 className="text-xl font-semibold">Let's Chat!</h2>
        <span className="text-3xl px-2">
          <FaRocketchat />
        </span>
      </div>

      <p className="mb-3">
        I'd love to learn more about your business and discuss how we can
        collaborate to achieve your objectives. Whether you're interested in
        social media management, content creation, digital marketing strategy,
        or e-mail marketing, I'm here to provide customized solutions that fit
        your needs and budget.
      </p>
      <div className="flex items-center justify-center p-6">
        <span className="text-3xl px-2">
          <FaPhone />
        </span>
        <h2 className="text-xl font-semibold">
          Schedule Your Consultation Today!
        </h2>
        <span className="text-3xl px-2">
          <FaPhoneFlip />
        </span>
      </div>

      <p className="mb-3">
        Don't wait any longer to take your business to the next level. Schedule
        your complimentary consultation now to get started on your journey
        towards success. Together, we can turn your vision into reality and
        unlock the full potential of your business.
      </p>
    </motion.section>
  );
}
