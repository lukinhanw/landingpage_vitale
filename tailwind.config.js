/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36adf9',
          500: '#0f96ee',
          600: '#0074cb',
          700: '#005ca4',
          800: '#004f87',
          900: '#04396e',
          950: '#032247',
        },
        secondary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#1a1d24',
          900: '#111827',
          950: '#0b0f19',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffe0a8',
          300: '#ffcc70',
          400: '#ffad33',
          500: '#ff9500',
          600: '#e67700',
          700: '#bf5a00',
          800: '#9c4500',
          900: '#813b00',
          950: '#461d00',
        },
        success: {
          500: '#4caf50',
          600: '#2e7d32',
        },
        warning: {
          500: '#ff9800',
          600: '#e65100',
        },
        error: {
          500: '#f44336',
          600: '#c62828',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatSlow: 'floatSlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};