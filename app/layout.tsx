import Header from '@/components/Header';
import './globals.css';

import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/Theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import BackgroundThree from '@/components/background/BackgroundThree';
import Background from '@/components/background/Background';
import HeaderV2 from '@/components/HeaderV2';

export const metadata = {
  title: 'Social Media',
  description: 'Let me be your social media manager',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
    >
      <body
        // className="dark:bg-gradient-to-r  dark:from-pink-300 dark:via-purple-300 dark:to-fuchsia-300 bg-size-400 animation-gradient opacity-90  text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#040309] dark:text-gray-50 dark:text-opacity-90"
        className="bg-pink-200 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#040309] dark:text-gray-50 dark:text-opacity-90"
        // className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <StarsCanvas /> */}
            <Background />
            {/* <BackgroundThree /> */}
            <Header />
            {/* <HeaderV2 /> */}
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
