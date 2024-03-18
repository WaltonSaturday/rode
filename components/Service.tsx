'use client';

import { useRef } from 'react';
import { projectsData, servicesData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

type ServiceProps = (typeof servicesData)[number];

export default function Service({ title, description, icon }: ServiceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
        position: 'relative', // Set position to relative, absolute, or fixed
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative"
    >
      <section className="bg-white/30 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] transition dark:text-white dark:bg-white/10 ">
        <div className="pt-2 pb-7 px-5  sm:pr-2 items-center sm:pt-10  flex flex-col h-full ">
          <p className="text-7xl pb-4">{icon}</p>
          <h3 className="text-2xl pb-4 font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
        </div>
      </section>
    </motion.div>
  );
}
