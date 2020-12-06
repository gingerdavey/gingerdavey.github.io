module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    layers: ['components', 'utilities'],
    content: ['../*.html'],
  },
  theme: {
    extend: {
      colors: {
        'main-orange' : '#FF5722',
        'main-light-orange' : '#FFCDBD',
        'main-dark-orange' : '#E43500'
      }
    },
  },
  variants: {},
  plugins: [],
}
