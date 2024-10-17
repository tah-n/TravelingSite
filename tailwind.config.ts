import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url("/images/herobg.png")',
        'promotion': 'url("/images/statue.png")',
        'nature': 'url("/images/nature.png")',
        'city': 'url("/images/city.png")',
        'activity': 'url("/images/activitybg.png")'
      },
      colors: {
        blue: {
          oceanBlue: "#4682B4",
          darkblue: "#181E4B",
          1: "#59B1E6",
        },
        red: {
          1: "#DF6951",
          2: "#FFA07A",
          3: "#DF6951"
        },
        gray: {
          1: "#dddddd"
        }
      },
    },
  },
  plugins: [],
};
export default config;
