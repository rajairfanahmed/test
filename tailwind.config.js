module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      extend: {
        screens: {
          'xxsm': '320px',
          'xsm': '475px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        fontSize: {
          'xs': '.75rem',
          'sm': '.875rem',
          'tiny': '.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem',
        },
      },
    },
  plugins: [],
  };