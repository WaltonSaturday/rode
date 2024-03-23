/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        parisienne: ['Parisienne', 'sans-serif'],
        playfair: ['Playfair', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#F1F1F2',
        secondary: '#2a2a2a',
        light1: '#eae4e6', // Haupthintergrund leicht pink grau

        light2: '#d1c3c8', // Hintergrund hervorgehoben
        light3: '#d1c3c8', // Hintergrund Hover

        dark1: '#323232', // Haupthintergrund sehr dunkel

        dark2: '#232323', // Hintergrund hervorgehoben grau
        dark3: '#373737', // Hintergrund Hover hellgrau
      },
      colors: {
        primary: 'rgb(22, 24, 35)',
        secondary: '#cccccc',
        dark1: '#f0f0f0', // Hauptcolor
        dark2: '#dddddd', // Color light gray
        dark3: '#a994a9', // Color Hover
        light1: '#b4a0a2', // Hauptcolor pink
        light2: '#323232', // Color light gray
        light3: '#aba0a6', // Color Hover

        psycho:
          'text-9xl font-semibold bg-gradient-to-r bg-clip-text  text-transparent from-indigo-500 via-purple-500 to-indigo-500 animate-text',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
