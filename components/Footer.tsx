import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="z-10 mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} MatEhm. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      <p className="text-xs">
        <Link href="/legal">Legal/Imprint</Link>{' '}
        <Link href="/privacy">Privacy Policy</Link>
      </p>
    </footer>
  );
}
