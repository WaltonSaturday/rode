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
        className="bg-light1 text-light3 relative pt-28 sm:pt-36 dark:bg-dark1 dark:text-dark1 dark:text-opacity-90"
        // className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* <StarsCanvas /> */}
            {/* <Background /> */}
            {/* <BackgroundThree /> */}
            {/* <Header /> */}
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
