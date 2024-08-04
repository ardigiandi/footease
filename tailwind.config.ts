import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue' : '1px 5px 10px rgba(56, 189, 248, 1)',
      },
      colors: {
        'cream' : '#FFFDD0',
      },
    },
  },
  plugins: [
    require('tailwindcss-box-shadow'),
  ],
};
export default config;
