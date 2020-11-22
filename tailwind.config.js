const colors = require('tailwindcss/colors')
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        amber: colors.amber,
        orange: colors.orange,
      },
    },
  },
  variants: { 
    extend: {
      // ...

     transitionProperty: ['hover', 'focus'],
    }
  },
  plugins: [],
}
