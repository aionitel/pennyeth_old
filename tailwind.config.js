module.exports = {
  darkTheme: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu"],
        karla: ["Karla"],
        quando: ["Quando"],
        source: ["Source Sans Pro"],
        noto: ["Noto Sans"],
        inter: ["Inter"]
      },
      colors: {
        'white': '#fff',
        'red': '#ff0000',
        'cyan': '#00ffff',
        'blue': '#1552F0',
        'gray': '#171717',
        'lightgray': '#202020',
        "pink": '#FFCCCC',
        "black": '#000000'
      }
    },
  },
  plugins: [],
}