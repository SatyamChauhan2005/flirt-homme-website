/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#000044",
          soft: "#100e0e",
        },
        bone: {
          DEFAULT: "#FFFFFF",
          card: "#ddeeee",
        },
        brass: {
          DEFAULT: "#dd0808",
          light: "#dee2ad",
        },
        wine: {
          DEFAULT: "#5C1E28",
        },
        line: {
          DEFAULT: "#C9BFA9",
          dark: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        weave:
          "repeating-linear-gradient(45deg, rgba(0,0,0,0.05) 0px, rgba(0,0,0,0.05) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 10px)",
        "weave-dark":
          "repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 10px), repeating-linear-gradient(-45deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 10px)",
      },
    },
  },
  plugins: [],
};
