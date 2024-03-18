import React from 'react';

import sameshapeImg from '@/public/sameshape.jpg';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import {
  FaBusinessTime,
  FaChartLine,
  FaCrown,
  FaRectangleAd,
  FaUsers,
} from 'react-icons/fa6';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    title: 'SameShape',
    description:
      'Social Shopping plattform. Connecting Content Creators and shoppers via their measurements and body shape.',
    tags: [
      'React',
      'Next.js',
      'Sanity',
      'Tailwind',
      'NextAuth',
      'Zustand',
      'Typescript',
      'Headless UI',
    ],
    imageUrl: sameshapeImg,
    link: 'https://www.sameshape.com/',
  },
] as const;

export const servicesData = [
  {
    title: 'Expertise and Strategy:',
    description:
      'Social media managers bring specialized expertise and strategic thinking to the table. They understand the nuances of different social media platforms, algorithms, and trends, allowing them to develop tailored strategies that align with the business`s goals and target audience.',
    icon: React.createElement(FaCrown),
  },
  {
    title: 'Audience Engagement:',
    description:
      'Building relationships with followers and customers is essential for fostering brand loyalty and driving repeat business. Social media managers actively engage with the audience, responding to comments, messages, and reviews, and cultivating a loyal community around the brand.',
    icon: React.createElement(FaUsers),
  },
  {
    title: 'Time Savings:',
    description:
      'Managing social media effectively requires time and consistency. By outsourcing social media management to a professional, small business owners can save valuable time that can be allocated to other core business activities, such as product development, customer service, or sales.',
    icon: React.createElement(FaBusinessTime),
  },
  {
    title: 'Analytics and Optimization:',
    description:
      'Social media managers use data and analytics to track the performance of social media campaigns and optimize strategies for better results. They analyze metrics such as engagement rates, reach, and conversions, identifying opportunities for improvement and making data-driven decisions to drive business growth.',
    icon: React.createElement(FaChartLine),
  },
  {
    title: 'Ad Campaign Management:',
    description:
      'Avertising on social media can be a highly effective way to reach target audiences and drive conversions. Social media managers have expertise in creating and managing ad campaigns, optimizing ad performance, and maximizing return on investment (ROI) to achieve business objectives effectively',
    icon: React.createElement(FaRectangleAd),
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Sanity',
  'Headless UI',
  'Framer Motion',
  'Zustand',
  'NextAuth',
  'Wordpress',
] as const;
