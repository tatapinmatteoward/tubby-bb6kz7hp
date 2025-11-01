/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4b0082',
        accent: '#ffa500',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
