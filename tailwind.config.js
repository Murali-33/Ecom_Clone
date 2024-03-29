/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        container:"1440px"
      },
      screens:{
        xs:"320px",
        sm:"375px",
        sml:"500px",
        md:"667px",
        mdl:"768px",
        lg:"960px",
        lgl:"1024px",
        xl:"1280px"
      },
      fontFamily:{
        titleFont:"Roboto",
        bodyFont:"Poppins",
      },
      colors:{
        amazon_blue:"#131931",
        amazon_dark:"#0F1111",
        amazon_light:"#232F3E",
        amazon_yellow:"#febd69",
        white_text:"#ffffff",
        light_text:"#ccc",
        quantity_box:"#F0F2F2",
        footer_bottom:"#131A22",
        cart_color:"#f08804"
      },
      boxShadow:{
        testShadow:"0px 0px 32px 1p rgba(199,199,199,1)",
        amazonInput:"0 0 3px 2px rgb(228 121 17 / 50%)",
      }
    },
  },
  plugins: [],
}
