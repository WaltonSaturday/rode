import React, { useRef, useEffect, useState } from 'react';

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const c = canvasRef.current;
    const $ = c?.getContext('2d');
    if (!$ || !c) return;

    c.width = dimensions.width;
    c.height = 400; // Set the height to 400px

    $.beginPath();
    $.moveTo(0, 400); // Starting point at the bottom left
    $.lineTo(dimensions.width, 300); // Line to the bottom right with an upward angle
    $.lineTo(dimensions.width, 0); // Line to the top right corner
    $.lineTo(0, 0); // Line to the top left corner
    $.closePath();
    $.clip(); // Apply clipping path

    // ... rest of the animation loop
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="w-screen"
      style={{ height: '400px' }}
    />
  );
};

export default DynamicBackground;
