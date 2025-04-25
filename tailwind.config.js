/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          darkest: '#0a0a2a',
          dark: '#1a1a4a',
          medium: '#2a2a6a',
          light: '#3a3a8a'
        },
        planet: {
          earth: '#1a4275',
          mars: '#c1440e',
          venus: '#a67c52',
          mercury: '#9c9c9c',
          jupiter: '#b3a06b',
          saturn: '#e3bb76',
          uranus: '#93cfed',
          neptune: '#3e66f9'
        },
        accent: {
          blue: '#4287f5',
          teal: '#41f4e8',
          purple: '#9d4edd',
          orange: '#f97316'
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      animation: {
        'shooting-star': 'shootingStar 5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'orbit': 'orbit 30s linear infinite'
      },
      keyframes: {
        shootingStar: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translateX(100vw) translateY(100vh)', opacity: 0 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 }
        },
        orbit: {
          to: {
            transform: 'rotate(360deg)'
          }
        }
      }
    },
  },
  plugins: [],
}