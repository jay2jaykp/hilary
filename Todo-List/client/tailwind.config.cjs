/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      100: "100%",
    },
    fontSize: {
      sm: "15px",
      xs: "12px",
      monthyear: "0.7rem",
      weekday: "0.75rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      35: "35px",
    },
    extend: {
      spacing: {
        60: "60px",
        41: "41%",
        7: "7%",
        10: "10%",
        47: "47%",
        78: "78%",
        19: "19%",
        4.1: "4.1%",
        43: "43%",
        10: "10%",
        16: "16%",
        13.8: "13.8%",
        54: "54%",
        7.5: "7.5%",
      },
      width: {
        300: "300px",
      },
      height: {
        510: "510px",
      },
      colors: {
        background: "#f0efe9",
        complete: "#D0D2DA",
        todo: "#606372",
        white: "#FFFFFF",
        enter: "#50e3a4",
        plus: "#46be8b",
      },
    },
  },
  plugins: [],
};
