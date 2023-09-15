/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        secondary: '#BE123C',
        text: '#333',
        'light-black': 'rgba(0, 0, 0, 0.30)',
        pink: '#BE123C',
        link: '#666',
        blurred: 'rgba(190, 18, 60, 0.10)',
        light: 'rgba(190, 18, 60, 0.70)',
        heavy: 'rgba(51, 51, 51, 0.80);',
        inactive: '#9CA3AF',
      },
      backgroundColor: {
        'light-black': 'rgba(0, 0, 0, 0.30)',
        pink: '#BE123C',
        blurred: 'rgba(190, 18, 60, 0.10)',
        grey: 'rgba(248, 231, 235, 0.40)',
        faint: 'rgba(190, 18, 60, 0.20)',
      },
      borderRadius: {
        sb: '2.8125rem',
        ss: '1.25rem',
        ul: '0.625rem',
      },
      boxShadow: {
        icon: '0px 1px 2px 0px rgba(0, 0, 0, 0.20)',
      },
      fontSize: {
        link: '1.25rem',
        small: '0.9375rem',
      },
    },
  },
  plugins: [],
};
