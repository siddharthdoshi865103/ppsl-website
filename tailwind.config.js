/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#091E3A',
          dark: '#061325',
          card: '#0D2B52',
          primary: '#0284C7',
          sky: '#38BDF8',
          cyan: '#06B6D4',
          accent: '#F59E0B',
          amber: '#D97706',
          surface: '#F8FAFC',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(2, 132, 199, 0.3)',
        'glow-accent': '0 0 25px -5px rgba(245, 158, 11, 0.4)',
        'premium': '0 20px 40px -15px rgba(9, 30, 58, 0.08), 0 0 0 1px rgba(9, 30, 58, 0.05)',
        'premium-hover': '0 25px 50px -12px rgba(9, 30, 58, 0.15), 0 0 0 1px rgba(2, 132, 199, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'spin-slow': 'spin 6s linear infinite',
        'gradient-pulse': 'gradient-pulse 3s ease infinite',
        'fade-up': 'fade-up 0.5s ease both',
        'slide-right': 'slide-right 0.4s ease both',
        'logo-glow': 'logo-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'gradient-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'logo-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(2, 132, 199, 0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(2, 132, 199, 0.15)' },
        },
      }
    },
  },
  plugins: [],
}
