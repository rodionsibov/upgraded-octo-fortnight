module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      inset: {
        '17': '68px',
        '26': '104px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
