'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import rodeLogo from '@/public/rodeLogo.png';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="z-[1] mb-26 max-w-[50rem] text-center sm:mb-36 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative px-4 w-screen max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={rodeLogo}
              alt="Rosalie"
              sizes="100vw"
              quality="95"
              priority={true}
              className="h-auto w-full   "
              width={800}
              height={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
