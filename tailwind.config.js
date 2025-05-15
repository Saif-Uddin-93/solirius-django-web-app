/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./journal_web_app/knowledge_base/**/*.{html,js}",
            // "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily:{
        //
      },
      colors: {
        "customGrey": "#b0babf",
        //
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}