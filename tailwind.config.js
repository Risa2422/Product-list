/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-color-fantasy": "hsl(20, 50%, 98%)",
        "custom-color-clamShell": "hsl(14, 25%, 72%)",
        "custom-color-pharlap": "hsl(7, 20%, 60%)",
        "custom-color-beaver": "hsl(12, 20%, 44%)",
        "custom-color-graphite": "hsl(14, 65%, 9%)",
        "custom-color-tiaMaria": "hsl(14, 86%, 42%)",
        "custom-color-martini": "rgba(176, 166, 166, 0.89)",
      },
      translate: {
        "-1/2": "-50%",
      },
      flex: {
        "custom-20": "0 0 20px",
        "custom-30": "0 0 48px",
      },
    },
  },
  plugins: [],
};
