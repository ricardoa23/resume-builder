// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{cjs,vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': '#333333',
        'secondary': '#666666',
        'accent': '#0077B6'
      }
    },
  },
  variants: {},
  plugins: [],
}

