/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-100': '#166CFB',
        'blue-200': '#134BC5',
        'blue-300': '#08398A',
        'blue-400': '#041733',
        'blue-500': '#150035',
        'blue-000': '#21628A',
        'yellow-100': '#FCE385',
        'yellow-200': '#F4BE44',
        'yellow-200': '#F19236',
        'red-000': '#FF3838',
        'red-100': '#DE1841',
        'red-200': '#CA1238',
        'gray-100': '#F7F7F9',
        'gray-200': '#E6E7EA',
        'gray-400': '#B8BABF',
        'gray-500': '#595A5B',
        'gray-600': '#333437',
        'gray-700': '#252628',
        'gray-800': '#202123',
        'black-900': '#17181A',
        'black-1000': '#0F1010'
      },
    },
  },
  plugins: [],
}

