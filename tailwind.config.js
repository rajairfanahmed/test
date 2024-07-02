module.exports = {
  mode: "jit",
  // purge: ["./index.html", "./src/**/*.js"], // this command is obselete
   content: ["./index.html", "./src/**/*.js"],
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx}",
  //   "./components/**/*.{js,ts,jsx,tsx}",   // newer version i implement here
  // ],
 
  theme: {
    extend: {
      screens: {
        'xxsm': '320px',
        'xsm': '480px',
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
  variants: {
    extend: {},
  },
  plugins: [],
};
