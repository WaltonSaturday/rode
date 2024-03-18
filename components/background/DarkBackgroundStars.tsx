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

const DarkBackgroundStars = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const createBubblePositions = (count: number, radius: number): Float32Array => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 2 * radius; // x-coordinate
    positions[i * 3 + 1] = Math.random() * radius - radius; // Random y-coordinate within [-radius, 0]
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2 * radius; // z-coordinate
  }
  return positions;
};

export default DarkBackgroundStars;
