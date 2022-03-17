module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily:{
        body:['Source Sans Pro']
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
