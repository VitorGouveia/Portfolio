/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "8px"
    },
    fontSize: {
      "6xl": "60px",
      "3xl": "30px"
    },
    colors: {
      system: {
        title: "hsl(240, 3%, 96%)",
        base: "hsl(240, 3%, 65%)",
        support: "hsl(240, 3%, 46%)",
        placeholder: "hsl(240, 3%, 22%)",
        background: "hsl(240, 3%, 6%)",
      },
    },
  },
  plugins: [],
}
