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

const createBubblePositions = (count: number, radius: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2 * radius; // x-coordinate
    positions[i * 3 + 1] = Math.random() * radius - radius; // Random y-coordinate within [-radius, 0]
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2 * radius; // z-coordinate
  }
  return positions;
};

const LightBackgroundBubbles: React.FC = () => {
  const ref = useRef<Points>(null);
  const [bubblePositions, setBubblePositions] = useState<Float32Array>(() =>
    createBubblePositions(500, 5)
  );

  useFrame(() => {
    const newPositions = bubblePositions.slice();
    for (let i = 0; i < bubblePositions.length; i += 3) {
      newPositions[i + 1] += 0.02; // Increase y-coordinate - Speed
      if (newPositions[i + 1] > 5) {
        newPositions[i + 1] = -5; // Reset y-coordinate
      }
    }
    setBubblePositions(newPositions);

    if (ref.current) {
      const positionAttribute = ref.current.geometry.attributes
        .position as BufferAttribute;
      positionAttribute.needsUpdate = true;
      for (let i = 0; i < newPositions.length; i++) {
        positionAttribute.setXYZ(
          i,
          newPositions[i * 3],
          newPositions[i * 3 + 1],
          newPositions[i * 3 + 2]
        );
      }
    }
  });

  return (
    <Points
      ref={ref}
      positions={bubblePositions}
      stride={3}
    >
      <PointMaterial
        transparent={false}
        color="#F6CDFA"
        size={0.1}
        sizeAttenuation={true}
        depthWrite={false}
        alpha={1}
      />
    </Points>
  );
};

export default LightBackgroundBubbles;
