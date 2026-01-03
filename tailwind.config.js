// tailwind.config.js
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{cjs,vue,js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        'primary': '#1E2A38', // Dark Blue - Background & Sidebar
        'secondary': '#F5F7FA', // Light Gray - Content Background
        'accent': '#1E90FF', // Dodger Blue - Primary Buttons & Active Elements
        'text-primary': '#333540', // Dark Gray - Text
        'text-secondary': '#666666', // Lighter Gray - Subtext
        'cta': '#FF7F50', // Vibrant Orange - Call to Action (Hover Effects)
        'success': '#32CD32', // Lime Green - Success States (Optional)
      }
    },
  },
  variants: {},
  plugins: [],
}

