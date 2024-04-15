/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {


      fontFamily: {
        custom: ['Pokemon'],},
      fontFace:{
        'Pokemon':{
          'fontFamily': 'Pokemon',
          'fontStyle':'normal',
          'fontWeight':'400',
          'src':['/Pokemon_Solid_Normal/pokemonsolid.ttf)'],
        }
      }

    },
  },
  plugins: [],
}

