'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '@/context/theme-context';
import THREE, {
  BufferAttribute,
  BufferGeometry,
  MeshStandardMaterial,
} from 'three';
import DarkBackgroundStars from './DarkBackgroundStars';
import LightBackgroundBubbles from './LightBackgroundBubbles';

const Background = () => {
  const { theme } = useTheme(); // Retrieve the current theme

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          {theme === 'dark' ? (
            <DarkBackgroundStars />
          ) : (
            <LightBackgroundBubbles />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background;
