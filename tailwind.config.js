/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    extend: {
      keyframes: {
        // ======================
        // Fade Animations
        // ======================
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // ======================
        // Slide Animations
        // ======================
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down-soft': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        // ======================
        // Float Animations
        // ======================
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },

        // ======================
        // Pulse Animations
        // ======================
        'pulse-soft-1': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        'pulse-soft-2': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.2)', opacity: '0.6' },
        },
        'pulse-soft-3': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' },
        },
        'pulse-soft-4': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '0.9' },
        },
      },

      animation: {
        // ======================
        // Fade Animations
        // ======================
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.8s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.8s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',

        // ======================
        // Slide Animations
        // ======================
        'slide-down': 'slide-down 0.6s ease-out',
        'slide-down-soft': 'slide-down-soft 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.4s ease-out forwards',

        // ======================
        // Float Animations
        // ======================
        float: 'float 3s ease-in-out infinite',
        'float-soft': 'float-soft 3s ease-in-out infinite',

        // ======================
        // Pulse Animations
        // ======================
        'pulse-soft-1': 'pulse-soft-1 3s ease-in-out infinite',
        'pulse-soft-2': 'pulse-soft-2 4s ease-in-out infinite',
        'pulse-soft-3': 'pulse-soft-3 3s ease-in-out infinite',
        'pulse-soft-4': 'pulse-soft-4 4s ease-in-out infinite',
      },
    },
  },



  plugins: [],
}

